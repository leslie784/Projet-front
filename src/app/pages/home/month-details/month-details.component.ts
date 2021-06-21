import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-month-details',
  templateUrl: './month-details.component.html',
  styleUrls: ['./month-details.component.css']
})
export class MonthDetailsComponent implements OnChanges {
  
  @Input() month: string;
  @Input() notesMonth: number[];
  @Input() commentsMonth: string[];
  comments: string[];
  notes: number[];
  firstResult: number;
  rawResult: number;
  result: number;
  message = ["Vos utilisateurs ne sont pas vraiment heureux ce mois-ci.", "Vos utilisateurs sont plutot mécontent en ce moment.", "Vos utilisateurs sont partagés et ne savent pas trop où ils en sont.", "Vos utilisateurs sont plutôt heureux sur ce mois-ci.", "Vos utilisateurs sont particulièrement heureux en ce moment."]
  noteNumber: number;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['1', '2', '3', '4', '5'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0], label: 'notes' }
  ];


  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    const m = changes['commentsMonth'];
    const r = changes['notesMonth'];
    this.notes = r.previousValue;
    let stock = [];
    let a=0;
    let b=0;
    let c=0;
    let d=0;
    let e=0;
    if(this.notes !== undefined){
      for(let i = 0; i < this.notes.length; i++){
        switch(this.notes[i]){
          case 1:
            a++;
            break;
          case 2:
            b++;
            break;
          case 3:
            c++;
            break;
          case 4:
            d++;
            break;
          case 5:
            e++;
            break;
          default:
            break;
        }
        stock = [a, b, c, d, e];
      }
      this.barChartData = [
        { data: stock, label: 'notes' }
      ];
    }

    if(this.notes !== undefined && this.notes.length > 0){
      this.firstResult = this.notes.reduce((p,d) => p+d, )/this.notes.length;
      this.noteNumber = this.notes.length;
      this.rawResult = Math.round(this.firstResult);
      let nb = (this.firstResult*100)/5 //result in %
      let arrondi = nb*100;
      arrondi = Math.round(arrondi);
      this.result = arrondi/100;
    }
    else {
      this.firstResult = null;
      this.result = null;
      this.noteNumber = null;
      this.rawResult = null;
    }
    this.comments = m.previousValue;
  }

}
