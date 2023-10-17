// playerdetails.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {
  player: any;
  playerId: string;

  constructor(private route: ActivatedRoute, private playerService: PlayerService) {
    this.playerId = this.route.snapshot.paramMap.get('id') || '';

  }

  ngOnInit(): void {
    this.playerService.getPlayerById(this.playerId).subscribe((data: any) => {
      this.player = data;
    });
  }
}
