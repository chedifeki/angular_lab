import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css']
})
export class MemberFormComponent implements OnInit {
  form!:FormGroup;
  constructor(private MS:MemberService, private router:Router, private activatedRoute:ActivatedRoute) {
    // this is dependency injection
  }

  ngOnInit(): void {
   // recuperation de id de l'url (route active)
    const idCourant = this.activatedRoute.snapshot.params['id'];
    // if id exists : init form with parameter member[id] -> edit
    if (!!idCourant) {
      this.MS.getMemberByID(idCourant).subscribe((member) => {
        this.initFormWithMember(member);
      })
    } else {
      this.initForm();      
    }
    // getMemberByID(id) => this.initForm(M)
  }

  initFormWithMember(member:Member):void{
    this.form = new FormGroup({
      cin: new FormControl( member.cin, [Validators.required]),
      name: new FormControl(member.name,[]),
      cv: new FormControl(member.cv, []),
      type: new FormControl(member.type, []),

  })
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
    const memberToSave = this.form.value;
    const memberNew = {...memberToSave, id:Math.ceil(Math.random()*10000), createdDate: new Date().toISOString()}
    this.MS.save(memberNew).subscribe((res)=>{
      this.router.navigate(['/members'])
    });
  }



}
