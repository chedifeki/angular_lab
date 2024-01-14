import { Injectable } from '@angular/core';
import { Article } from 'src/Models/Article';
import { GLOBAL_DB } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  data: Article[] = GLOBAL_DB._DB.articles;

  constructor() {

   }
}
