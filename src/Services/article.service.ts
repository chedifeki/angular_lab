import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/Models/Article';
import { GLOBAL_DB } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  data: Article[] = GLOBAL_DB._DB.articles;

  constructor() {}


  save(article:any): Observable<void>
  {
   // return  this.httpClient.post<void>('localhost:8080/api', article); // <<<--- this is the way to go if there was a backend
   
   /* this is because we're only doing front end :) */

   const articleNew = {...article, 
    id: article.id ?? Math.ceil(Math.random()*10000).toString()
   }

   this.data = this.data.filter( item => item.id != article.id);
   this.data.push(articleNew);

   return new Observable(observer => observer.next())  
  }

}
