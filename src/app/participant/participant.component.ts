import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var bootstrap: any;

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
  year = '';
  images: string[] = [];
  selectedImage: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.year = this.route.snapshot.paramMap.get('year')!;
    this.loadImagesForYear(this.year);
  }

  loadImagesForYear(year: string) {
    this.http.get<Record<string, string[]>>('/assets/gallery-index.json')
      .subscribe({
        next: (galleryIndex) => {
          const filenames = galleryIndex[year];
          if (!filenames) {
            console.warn(`No images found for year ${year}`);
            return;
          }
          this.images = filenames.map(file => `../../../assets/${year}/${file}`);
        },
        error: (err) => {
          console.error('Failed to load gallery index:', err);
        }
      });
  }

  openModal(image: string) {
    this.selectedImage = image;
    const modalElement = document.getElementById('imageModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
