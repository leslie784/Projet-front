import {NgForm} from '@angular/forms';
import { defaultsDeep } from 'lodash';
import {UserService} from '../../services/user.service';
import {environment} from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  private url: string;

  constructor(private userService: UserService,private toastr: ToastrService) {
    this.url = environment.url;
  }

  ngOnInit(): void {
  }
  
  onSubmit(ngForm: NgForm) {
    if(ngForm.valid){
      const user = defaultsDeep({
        username: ngForm.form.value.username,
        email: ngForm.form.value.email,
        password: ngForm.form.value.password
      });
      this.userService.addUser(user).subscribe(user => console.log(user));
      this.toastr.success('You are now a member', 'Success!');
    }

  }


}
