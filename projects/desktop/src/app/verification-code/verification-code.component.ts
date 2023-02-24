import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {
  constructor(private builder: FormBuilder,  private toastr: ToastrService, private service: AuthService, private router: Router){

  }
  verificationCode:any;
  proceedVerification(){
    console.log(this.verificationCode);
    this.toastr.success('Registered Successfully');
  }
  ngOnInit(): void {
    
  }
}
