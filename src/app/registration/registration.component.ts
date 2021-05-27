import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { RegistrationService } from "./registration.service";
import { RegistrationDTO } from "../dto/registration.dto";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  registerform = new FormGroup({
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    age: new FormControl(""),
    city: new FormControl(""),
    mobile: new FormControl(""),
    address: new FormControl(""),
    gender: new FormControl(""),
    country: new FormControl(""),
    userName: new FormControl(""),
    password: new FormControl(""),
    emailId: new FormControl(""),
  });

  mandatoryuserName: Boolean = false;
  mandatoryPassword: Boolean = false;
  mandatoryEmail: Boolean = false;
  mandatoryMobile: Boolean = false;
  mandatoryAddress: Boolean = false;
  mandatoryfirstName: Boolean = false;
  mandatorylastName: Boolean = false;
  validateEmail: Boolean = false;
  validatePassword: Boolean = false;
  validateuserName: Boolean = false;
  validateMobile: Boolean = false;
  validateAge: Boolean = false;
  alreadyexistuserName: Boolean = false;

  username: string = "UserName:";
  countries: any[] = [];
  constructor(
    private router: Router,
    private registrationService: RegistrationService
  ) {}
  disableButton: Boolean = false;

  ngOnInit() {
    this.countries.push("Austria");
    this.countries.push("Germany");
    this.countries.push("Japan");
    //this.registerform.get('gender').value='female';
  }
  validateField() {
    this.disableButton = true;
    if (this.registerform.get("firstName").value.length == 0) {
      this.mandatoryfirstName = true;
    } else {
      this.mandatoryfirstName = false;
    }

    if (this.registerform.get("lastName").value.length == 0) {
      this.mandatorylastName = true;
    } else {
      this.mandatorylastName = false;
    }
    if (this.registerform.get("password").value.length == 0) {
      this.mandatoryPassword = true;
    } else {
      this.mandatoryPassword = false;
    }
    if (
      this.registerform.get("password").value.length != 0 &&
      this.registerform.get("password").value.length < 6
    ) {
      this.validatePassword = true;
    } else {
      this.validatePassword = false;
    }

    if (this.registerform.get("emailId").value.length == 0) {
      this.mandatoryEmail = true;
    } else {
      this.mandatoryEmail = false;
    }
    if (this.registerform.get("emailId").value.includes("@")) {
      this.validateEmail = false;
    } else {
      this.validateEmail = true;
    }

    if (this.registerform.get("userName").value.length == 0) {
      this.mandatoryuserName = true;
    } else {
      this.mandatoryuserName = false;
    }
    if (
      this.registerform.get("userName").value.length != 0 &&
      this.registerform.get("userName").value.length < 6
    ) {
      this.validateuserName = true;
    } else {
      this.validateuserName = false;
    }

    if (this.registerform.get("mobile").value.length == 0) {
      this.mandatoryMobile = true;
    } else {
      this.mandatoryMobile = false;
    }
    if (
      this.registerform.get("mobile").value.length != 0 &&
      this.registerform.get("mobile").value.length < 10
    ) {
      this.validateMobile = true;
    } else {
      this.validateMobile = false;
    }

    if (
      this.registerform.get("age").value.length > 0 &&
      (this.registerform.get("age").value < 18 ||
        this.registerform.get("age").value > 55)
    ) {
      this.validateAge = true;
    } else {
      this.validateAge = false;
    }

    if (this.registerform.get("address").value.length == 0) {
      this.mandatoryAddress = true;
    } else {
      this.mandatoryAddress = false;
    }
  }
  submit() {
    this.validateField();
    if (
      !this.validateEmail &&
      !this.mandatoryEmail &&
      !this.mandatoryAddress &&
      !this.validateAge &&
      !this.mandatoryMobile &&
      !this.validateMobile &&
      !this.mandatoryuserName &&
      !this.validateuserName &&
      !this.mandatoryPassword &&
      !this.validatePassword &&
      !this.mandatoryfirstName &&
      !this.mandatorylastName
    ) {
      // const abc=new RegistrationDTO();
      //  this.registrationService.registrationdto=abc;
      this.registrationService.registrationdto.firstName = this.registerform.controls[
        "firstName"
      ].value;
      this.registrationService.registrationdto.lastName = this.registerform.controls[
        "lastName"
      ].value;
      this.registrationService.registrationdto.userName = this.registerform.controls[
        "userName"
      ].value;
      this.registrationService.registrationdto.password = this.registerform.controls[
        "password"
      ].value;
      this.registrationService.registrationdto.mobile = this.registerform.controls[
        "mobile"
      ].value;
      this.registrationService.registrationdto.address = this.registerform.controls[
        "address"
      ].value;
      this.registrationService.registrationdto.emailId = this.registerform.controls[
        "emailId"
      ].value;

      this.registrationService
        .getDataByusername(this.registrationService.registrationdto.userName)
        .subscribe((response1) => {
          console.log(response1);
          if (response1 == null) {
            this.registrationService
              .saveData(this.registrationService.registrationdto)
              .subscribe((res) => console.log(res));
            this.router.navigateByUrl("/registration-success");
          } else {
            this.alreadyexistuserName = true;
          }
        });
    }
  }

  reset() {
    this.registerform.controls["firstName"].setValue("");
    this.registerform.controls["lastName"].setValue("");
    this.registerform.controls["age"].setValue("");
    this.registerform.controls["mobile"].setValue("");
    this.registerform.controls["address"].setValue("");
    this.registerform.controls["city"].setValue("");
    this.registerform.controls["gender"].setValue("");
    this.registerform.controls["country"].setValue("");
    this.registerform.controls["password"].setValue("");
    this.registerform.controls["userName"].setValue("");
    this.registerform.controls["emailId"].setValue("");
    this.validatePassword = false;
    this.validateuserName = false;
    this.validateEmail = false;
    this.validateMobile = false;
    this.validateAge = false;
    this.mandatoryPassword = false;
    this.mandatoryAddress = false;
    this.mandatoryEmail = false;
    this.mandatoryMobile = false;
    this.mandatoryuserName = false;
    this.mandatoryfirstName = false;
    this.mandatorylastName = false;
    this.alreadyexistuserName = false;
    this.disableButton = false;
  }

  back() {
    this.router.navigateByUrl("/home");
  }

  registeredusers() {
    this.router.navigateByUrl("/viewusers");
  }

  gotologin() {
    this.router.navigateByUrl("/login");
  }
}
