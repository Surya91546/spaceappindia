import { Component } from '@angular/core';

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.css']
})
export class WinnersComponent {
  globalWinners = ['Team_Name', 'Team_Name'];
  localWinners = ['Team_Name', 'Team_Name', 'Team_Name', 'Team_Name'];
}
