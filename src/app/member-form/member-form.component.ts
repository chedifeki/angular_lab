import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.form = new FormGroup({
      cin: new FormControl( null, [Validators.required]),
      name: new FormControl(null,[]),
      cv: new FormControl(null, []),
      type: new FormControl(null, [])
    })
  }

  onSub(): void {
    console.log(this.form.value);
  }
  form!:FormGroup;

}
