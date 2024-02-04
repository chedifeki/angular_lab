import { Component } from '@angular/core';
import { ArticleService } from 'src/Services/article.service';
import { MemberService } from 'src/Services/member.service';
import {ChartDataset, ChartOptions} from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  getLabels(): string[] {
   
return this.articles_chart_labels;
  }
  getTypes(): number[] {
    let count_tab :number[] = [];
    this.memberService.getNBPerType().subscribe(
      (x) => {
        count_tab = x ;
      }
    );
    return count_tab
  }
  arts_by_member:number[]= [];
  getNumber(): number[] {
    this.memberService.getNBArticleByMember().subscribe( (x) => {
      this.arts_by_member = x;
    })
    return this.arts_by_member;
  }

  nb_articles: number = 0;
  nb_members:  number = 0;
  nb_tools:    number = 0;
  nb_evts:     number = 0;
  members_chart_labels : string[] = [];
  members_chart_options : ChartOptions = {};
  members_chart_data: ChartDataset[] = [
    {
      label:'$ in millions', 
      data: this.getNumber()
    }
  ];
articles_chart_data: ChartDataset[]=[
  { 
    data: this.getTypes()
  }
];
articles_chart_labels:string[]=[];
aticles_chart_options: ChartOptions = {};
  /**
   *
   */
  constructor(private memberService:MemberService,
    private articlesService:ArticleService,) {
    
      this.nb_members = this.memberService.tab.length;
      this.nb_articles = this.articlesService.data.length;
      this.memberService.tab.forEach(member => {
        this.members_chart_labels.push(member.name);
      });

      this.memberService.tab.forEach(member =>{
        this.articles_chart_labels.push(member.type);
      
  });
  }



}
