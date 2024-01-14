import { Component, ViewChild } from '@angular/core';
import { Article } from 'src/Models/Article';
import { GLOBAL_DB } from '../app.config';
import { ArticleService } from 'src/Services/article.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],

})
export class ArticleListComponent {

  constructor(private service:ArticleService) {
    
  }

  dataSource = new MatTableDataSource<Article>(this.service.data);
  displayedColumns: string[] = ["id", "type", "titre", "lien", "date", "sourcePDF"];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
