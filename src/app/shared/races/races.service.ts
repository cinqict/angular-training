import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { Race, RaceResponse } from './races.model';

@Injectable({
  providedIn: 'root'
})
export class RacesService {
  constructor(private readonly http: HttpClient) {}

  public getRaces(): Observable<Race[]> {
    return this.http
      .get<RaceResponse>('https://ergast.com/api/f1/2022.json')
      .pipe(map((response: RaceResponse) => response.MRData.RaceTable.Races));
  }

  public getRace(id: number): Observable<Race> {
    return this.http.get<RaceResponse>(`https://ergast.com/api/f1/2022/${id}.json`).pipe(
      delay(1000),
      map((response: RaceResponse) => response.MRData.RaceTable.Races[0])
    );
  }

  public getResults(id: number, type: 'qualifying' | 'sprint' | 'results'): Observable<Race> {
    return this.http.get<RaceResponse>(`https://ergast.com/api/f1/2022/${id}/${type}.json`).pipe(
      delay(1000),
      map((response: RaceResponse) => response.MRData.RaceTable.Races[0] ?? {})
    );
  }
}
