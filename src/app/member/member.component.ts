import { Component } from '@angular/core';
import { GLOBAL_DB } from '../app.config';
import { Member } from 'src/Models/Member';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  displayedColumns: string[] = ['id','cin', 'name', 'cv', 'type', 'createdDate', 'action'];
  nom = "chedi";
  dataSource:Member[] = GLOBAL_DB._DB.members

  source:any[]=[
    {
      id:'1254',
      cin:'125478',
      name:'chedi',
      cv:'lien', 
      type:'student',
      createdDate:'12/28/2023'
    },
    {
      id:'1475',
      cin:'789456123',
      name:'imen',
      cv:'lien', 
      type:'teacher',
      createdDate:'12/28/2023'
    },
  ]
}
