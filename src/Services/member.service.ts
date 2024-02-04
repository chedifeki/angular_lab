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
  getNBPerType(): Observable<number[]> {
    let counts :number[] = [];
    let count_students = 0;
    let count_teachers = 0;
    this.tab.forEach(member=>
      {
        if(member.type == "teacher"){
          count_teachers ++;
        }
        if(member.type == "student"){
          count_students ++ ;
        }
      })

      counts.push(count_students, count_teachers)
    return new Observable(observer=> observer.next(counts))
  }
  
  getNBArticleByMember(): Observable<number[]> {
    let art_count: number[]=[];
    this.tab.forEach((member) => {
      art_count.push(member.tab_pub.length)
    })
    return new Observable(observer => observer.next(art_count));
  }



  constructor(private httpClient: HttpClient) {}

  tab:Member[] = GLOBAL_DB._DB.members;
  save(member:any): Observable<void>
  {
   // return  this.httpClient.post<void>('localhost:8080/api', member); // <<<--- this is the way to go if there was a backend
   
   /* this is because we're only doing front end :) */

   const memberNew = {...member, 
    id: member.id ?? Math.ceil(Math.random()*10000).toString(), 
    createdDate: member.createdDate ?? new Date().toISOString(),
   }

   this.tab = this.tab.filter( item => item.id != member.id);
   this.tab.push(memberNew);

   return new Observable(observer => observer.next())  
  }

  getMemberByID(id: string): Observable<Member> {
    // this is an example if the backend is springboot
    // return this.httpClient.get<Member>('localhost:8080/api/Members/id',
    
    // this is because we're only doing front
     return new Observable(observer => {
        observer.next(this.tab.find(m => m.id == id))
        }
      );

    // another way using filter 
    //return new Observable (observer => { observer.next(this.tab.filter(m =>{m.id == id})[0] ?? undefined)})
  }

  deleteMemberByID(id: string):Observable<void> {
    
    this.tab = this.tab.filter(m => m.id !== id);

    //return this.httpClient.delete<void>('localhost:8080/api/member/id') // as usual this is when we have a backend
    return new Observable( observer => {
      observer.next()
    });
  }

  getAll(): Observable<Member[]> {
    // return this.httpsClient.get<Member[]>('localhost:8080/api/Members)
    return new Observable ( observer => {
      observer.next(this.tab)
    });
  }
}
