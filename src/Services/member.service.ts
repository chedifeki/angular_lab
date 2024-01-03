import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/Models/Member';
import { GLOBAL_DB } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  /**
   *
   */
  constructor(private httpClient: HttpClient) {}

  tab:Member[] = GLOBAL_DB._DB.members;
  save(member:any): Observable<void>
  {
   // return  this.httpClient.post<void>('localhost:8080/api', member); // <<<--- this is the way to go if there was a backend
   
   /* this is because we're only doing front end :) */
    this.tab.push(member);
    return new Observable(observer => observer.next())  
  }
}
