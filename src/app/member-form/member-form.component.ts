import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  
  constructor(private MS:MemberService, private router:Router) {
    // this is dependency injection
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm():void{
    this.form = new FormGroup({
      cin: new FormControl( null, [Validators.required]),
      name: new FormControl(null,[]),
      cv: new FormControl(null, []),
      type: new FormControl(null, []),

  })
  }

  onSub(): void {
    console.log(this.form.value);
    const memberToSave = this.form.value;
    this.MS.save(memberToSave).subscribe((res)=>{
      this.router.navigate(['/members'])
    });
  }
  form!:FormGroup;

}
