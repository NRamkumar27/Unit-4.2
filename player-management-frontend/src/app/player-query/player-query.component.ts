import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-query',
  templateUrl: './player-query.component.html',
  styleUrls: ['./player-query.component.css']
})
export class PlayerQueryComponent {
  queryData: any = {}; // Object to store query parameters
  queryResults: any[] = []; // Array to store query results

  constructor(private playerService: PlayerService) {}

  executeQuery() {
    // Call the PlayerService method to execute the query
    this.playerService.queryPlayers(this.queryData).subscribe(
      (data: any) => {
        this.queryResults = data;
      },
      (error) => {
        console.error('Error executing query:', error);
      }
    );
  }
}
