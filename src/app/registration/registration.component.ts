import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.less']
})
export class RegistrationComponent implements OnInit{
 registerform = new FormGroup({
   firstName: new FormControl(''),
   lastName: new FormControl(''),
   age: new FormControl(''),
   city: new FormControl(''),
   mobile: new FormControl(''),
   address: new FormControl(''),
   gender: new FormControl(''),
   country: new FormControl(''),
   userName: new FormControl(''),
   password: new FormControl(''),
   emailId: new FormControl('')
});

  mandatoryuserName:Boolean=false;
  mandatoryPassword:Boolean=false;
  mandatoryEmail:Boolean=false;
  mandatoryMobile:Boolean=false;
  mandatoryAddress:Boolean=false;
  validateEmail:Boolean=false;
  validatePassword:Boolean=false;
  validateuserName:Boolean=false;
  validateMobile:Boolean=false;
  validateAge:Boolean=false;

  countries:any[]=[];
  constructor(private router:Router) {}
  disableButton:Boolean=false;

  ngOnInit() {
    this.countries.push('Austria');
    this.countries.push('Germany');
    this.countries.push('Japan');
    //this.registerform.get('gender').value='female';
  }

  submit() {
     this.disableButton=true;
     if(this.registerform.get('password').value.length==0){
      this.mandatoryPassword=true;
      }else{
      this.mandatoryPassword=false;
      }
     if(this.registerform.get('password').value.length!=0 && this.registerform.get('password').value.length<6){
       this.validatePassword=true;
      }else{
       this.validatePassword=false;
      }

      if(this.registerform.get('userName').value.length==0){
        this.mandatoryuserName=true;
      }else{
           this.mandatoryuserName=false;
      }
     if(this.registerform.get('userName').value.length!=0 && this.registerform.get('userName').value.length<6){
         this.validateuserName=true;
      }else{
       this.validateuserName=false;
        }

     if(this.registerform.get('mobile').value.length==0){
        this.mandatoryMobile=true;
      }else{
         this.mandatoryMobile=false;
        }
        if(this.registerform.get('mobile').value.length!=0 && this.registerform.get('mobile').value.length<10){
                 this.validateMobile=true;
              }else{
               this.validateMobile=false;
                }

     if(this.registerform.get('address').value.length==0){
        this.mandatoryAddress=true;
      }else{
         this.mandatoryAddress=false;
        }
     if(this.registerform.get('emailId').value.length==0){
         this.mandatoryEmail=true;
      }else{
         this.mandatoryEmail=false;
        }
     if(this.registerform.get('emailId').value.includes('@')){
          this.validateEmail=false;
     }else{
         this.validateEmail=true;
       }


   }
     // const aa='kisore';
    // console.log(aa.includes('o'));
   reset() {
       this.registerform.controls['firstName'].setValue('');
       this.registerform.controls['lastName'].setValue('');
       this.registerform.controls['age'].setValue('');
       this.registerform.controls['mobile'].setValue('');
       this.registerform.controls['address'].setValue('');
       this.registerform.controls['city'].setValue('');
       this.registerform.controls['gender'].setValue('');
       this.registerform.controls['country'].setValue('');
       this.registerform.controls['password'].setValue('');
       this.registerform.controls['userName'].setValue('');
       this.registerform.controls['emailId'].setValue('');
       this.validatePassword=false;
       this.validateuserName=false;
       this.validateEmail=false;
       this.validateMobile=false;
       this.mandatoryPassword=false;
       this.mandatoryAddress=false;
       this.mandatoryEmail=false;
       this.mandatoryMobile=false;
       this.mandatoryuserName=false;
       this.disableButton=false;
       }

  gotologin() {
       this.router.navigateByUrl('/login');
     }
   }

