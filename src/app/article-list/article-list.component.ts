import { Component, ViewChild } from '@angular/core';
import { Article } from 'src/Models/Article';
import { GLOBAL_DB } from '../app.config';
import { ArticleService } from 'src/Services/article.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArticleFormComponent } from '../article-form/article-form.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent {
  constructor(private service: ArticleService, private dialog: MatDialog) {}

  dataSource = new MatTableDataSource<Article>(this.service.data);
  displayedColumns: string[] = [
    'id',
    'type',
    'titre',
    'lien',
    'date',
    'sourcePDF',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onCreate() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(ArticleFormComponent, dialogConfig);

    dialogRef
      .afterClosed()
      .subscribe((data) => {
        console.log('Dialog output:', data);
        this.service.save(data).subscribe(() => {
          this.dataSource.data = this.service.data;
        })
      });
  }

  onAssign(arg0: any) {
    throw new Error('Method onAssign not implemented.');
  }
  onDelete(arg0: any) {
    throw new Error('Method onDelete not implemented.');
  }
}
