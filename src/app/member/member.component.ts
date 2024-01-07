import { Component } from '@angular/core';
import { GLOBAL_DB } from '../app.config';
import { Member } from 'src/Models/Member';
import { MemberService } from 'src/Services/member.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent {
  /**
   *
   */
  constructor( private ms :MemberService, private dialog:MatDialog) {
    
  }

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



  onDelete(id: string):void {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      height: "400px",
      width:"400px"
    });

    dialogRef.afterClosed().subscribe( (x) => {
      if ( x == true){
        this.ms.deleteMemberByID(id).subscribe(() => {
          // if we had a backend this would become a fetch operation 
          //this.dataSource = this.ms.tab
          this.getAll()
      
          });
      }
    })
  
  }


  getAll():void {
     this.ms.getAll().subscribe((members) =>{
        this.dataSource = members
     })

  }

}
 

