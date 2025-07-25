import { Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
@Component({
  selector: 'app-mars',
  templateUrl: './mars.component.html',
  styleUrls: ['./mars.component.css']
})
export class MarsComponent {
 @ViewChild('canvasContainer', { static: false }) canvasContainer!: ElementRef;
  private object: THREE.Group | null = null;

  constructor() {}

  ngAfterViewInit(): void {
    this.init3DModel();
  }

  init3DModel() {
    const scene = new THREE.Scene();

    const width = this.canvasContainer.nativeElement.clientWidth;
    const height = this.canvasContainer.nativeElement.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 2000);
    camera.position.set(0, 100, 800);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    this.canvasContainer.nativeElement.appendChild(renderer.domElement);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(200, 300, 400);
    scene.add(directionalLight);

    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('assets/3dobjects/8k_mars.jpg');

    // Load Earth OBJ model
    const loader = new OBJLoader();
    loader.load(
      'assets/3dobjects/Earth.obj',
      (object) => {
        object.scale.set(280, 280, 280);
        object.position.set(0, 0, 0);

        object.traverse((child: any) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshStandardMaterial({
              map: earthTexture,
              roughness: 0.4,
              metalness: 0.3,
              emissive: new THREE.Color(0x002244),
              emissiveIntensity: 0.4
            });
          }
        });

        this.object = object;
        scene.add(object);

        // ✅ Add glow/shadow sphere around Earth
        const glowGeometry = new THREE.SphereGeometry(290, 64, 64);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0x3399ff,
          transparent: true,
          opacity: 0.08,
          side: THREE.BackSide,
          depthWrite: false
        });

        const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
        glowSphere.position.copy(object.position);
        scene.add(glowSphere);
      },
      undefined,
      (error) => {
        console.error('Error loading OBJ model:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      if (this.object) {
        this.object.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
      const newWidth = this.canvasContainer.nativeElement.clientWidth;
      const newHeight = this.canvasContainer.nativeElement.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });
  }
}
