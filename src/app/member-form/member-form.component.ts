import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  
  constructor(private MS:MemberService) {}

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
    const memberToSave = this.form.value;
    this.MS.save(memberToSave);
  }
  form!:FormGroup;

}
