import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  constructor(private readonly http: HttpClient) {}

  public sendToApi(values: unknown): Observable<null> {
    return this.http.post<null>('/apiendpoint', { body: values });
  }
}
