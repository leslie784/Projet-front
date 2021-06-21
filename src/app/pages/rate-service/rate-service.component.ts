import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {environment} from '../../../environments/environment';
import { Router } from '@angular/router';
import { defaultsDeep } from 'lodash';
import {timeout} from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-rate-service',
  templateUrl: './rate-service.component.html',
  styleUrls: ['./rate-service.component.css']
})
export class RateServiceComponent implements OnInit {

  private url: string;
  public router: Router;

  

  constructor(private http: HttpClient, router: Router, private toastrService: ToastrService) { 
    this.url = environment.url;
    this.router = router;
  }

  ngOnInit(): void {
  }

  onSubmit(ngForm: NgForm) {
    if(ngForm.valid){
      const service = defaultsDeep({
        serviceName: ngForm.form.value.serviceName,
        mark: ngForm.form.value.mark,
        worker: ngForm.form.value.worker,
        comment: ngForm.form.value.comment
      });
      this.http.post(`${this.url}/elements/service/add`,service).pipe(timeout(10000)).subscribe(services => console.log(services));
      this.toastrService.success('Thank you for your review', 'Success!');
    }

  }


}
