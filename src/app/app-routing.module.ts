import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { ToolListComponent } from './tool-list/tool-list.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "members",
    pathMatch: 'full',
    component: MemberComponent
  }, 
  {
    path: "members/create", 
    pathMatch: 'full', 
    component: MemberFormComponent
  },
  { path: 'members/:id/edit', 
    pathMatch: 'full',
    component: MemberFormComponent
  },
  {
    path: "tools",
    pathMatch: 'full',
    component: ToolListComponent
  }, 
  {
    path: "articles",
    pathMatch: 'full',
    component: ArticleListComponent
  },
  {
    path: "events",
    pathMatch: 'full',
    component: EventListComponent
  }, 
  {
    path: "dashboard",
    pathMatch: 'full',
    component: DashboardComponent
    }, 
  { path: '', 
    pathMatch: 'full',
    redirectTo:"members"
  },
  
  // keep last
  {
    path:"**",
    redirectTo:"members"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
