import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
dataSource!:Event[];
displayedColumns: String[ ] = ['id', 'titre', 'date_deb', 'date_fin','lieu', 'actions'];
onDelete(arg0: any) {
throw new Error('Method not implemented.');
}

}
