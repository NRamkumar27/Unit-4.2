import { Component } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent {
  playerData: any = {};

  constructor(private playerService: PlayerService) { }

  addPlayer() {
    this.playerService.addPlayer(this.playerData).subscribe((data: any) => {
      // Handle success or error, possibly redirect to the player list.
    });
  }

  updatePlayer(playerId: string) {
    this.playerService.updatePlayer(playerId, this.playerData).subscribe((data: any) => {
      // Handle success or error, possibly redirect to the player list.
    });
  }
}
