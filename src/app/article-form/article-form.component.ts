import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit{

  form!: FormGroup;
  description!: any;


  constructor(
      private dialogRef: MatDialogRef<ArticleFormComponent>){}

  ngOnInit() {
      this.initForm();
  }
  initForm():void{
    this.form = new FormGroup({
      type: new FormControl(null,[Validators.required]),
      titre: new FormControl(null, []),
      lien: new FormControl(null, []),
      date: new FormControl(null, []),
      sourcepdf: new FormControl(null, []),

  })
  }

  save() {
      console.log(this.form.value)
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}

