import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private apiUrl = 'http://localhost:3000'; // Update with your Node.js server URL

  constructor(private http: HttpClient) { }

  addPlayer(playerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/players`, playerData);
  }

  updatePlayer(playerId: string, playerData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/players/${playerId}`, playerData);
  }

  deletePlayer(playerId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/players/${playerId}`);
  }

  queryPlayers(queryData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/players/query`, queryData);
  }

  getPlayerById(playerId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/players/${playerId}`);
  }
  getPlayers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/players`);
  }
  
}
