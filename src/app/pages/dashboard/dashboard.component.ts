import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private url: string;
  public router: Router;

  data;
  worker;

  settings = {
    selectMode: 'single',
    hideHeader: false,
        hideSubHeader: false,
        mode:'external',
        actions: {
            columnTitle: 'Actions',
            add: false,
            edit: false,
            delete: false,
            custom: [
              { name: 'viewrecord', title:'<i class="fa fa-eye"></i>&nbsp;&nbsp;&nbsp;&nbsp;'}
            ],
            position: 'right'
        },
        noDataMessage: 'No data found',
        columns: {

            firstname: {
                title: 'First name',
                type: 'string',
                filter: true,
                editable: true
            },
            lastname: {
                title: 'Last name',
                type: 'string',
                filter: true,
                editable: true
            },
            email: {
                title: 'E-mail',
                type: 'string',
                filter: true,
                editable: true
            },
            skills: {
              title: 'Skills',
              type: 'string',
              filter: true,
              editable: true
            },
            description: {
              title: 'Description',
              type: 'string',
              filter: true,
              editable: true
            }
        },
        pager: {
            display: true,
            perPage: 10
        }
  };

  getWorkers(){
    return this.http.get(`${this.url}/elements/workers`).subscribe(workers => this.data = workers);
  }


  constructor(private http: HttpClient, router: Router) {
    this.url = environment.url;
    this.router = router;
  }

  ngOnInit(): void {
    this.getWorkers();
  }

  
  /*public onView(event: any): void{
    this.worker = event.data;
    console.log(this.worker);
    console.log(Number(this.worker.id));
    this.router.navigate(['view-worker/'+ this.worker.id]);
  }*/

}
