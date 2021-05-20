import { Component, OnInit } from "@angular/core";
import { RegistrationService } from "../registration/registration.service";

@Component({
  selector: "app-registration-success",
  templateUrl: "./registration-success.component.html",
  styleUrls: ["./registration-success.component.less"],
})
export class RegistrationSuccessComponent implements OnInit {
  username: string;
  password: string;
  mobile: number;
  address: string;
  emailid: string;

  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {
    this.username = this.registrationService.registrationdto.userName;
    this.password = this.registrationService.registrationdto.password;
    this.mobile = this.registrationService.registrationdto.mobile;
    this.address = this.registrationService.registrationdto.address;
    this.emailid = this.registrationService.registrationdto.emailId;
  }
}
