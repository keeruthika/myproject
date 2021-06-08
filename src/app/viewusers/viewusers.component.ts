import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RegistrationService } from "../registration/registration.service";
import { RegistrationDTO } from "../dto/registration.dto";

@Component({
  selector: "app-viewusers",
  templateUrl: "./viewusers.component.html",
  styleUrls: ["./viewusers.component.scss"],
})
export class ViewusersComponent implements OnInit {
  abc =[];
  columnDefs = [
    { field: "UserName" },
    { field: "Firstname" },
    { field: "Lastname" },
    { field: "EmailId" },
    { field: "Mobile" },
    { field: "Age" },
  ];

  rowData = [
    { UserName:"inika",Firstname: "wwww",Lastname: "wwwqqq",EmailId: "Celica", Mobile: 35000, Age: 23},
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 },
  ];

  constructor(private router: Router,private registrationService: RegistrationService ) {}

  ngOnInit() {
  this.registrationService
          .getDataAllUsers()
          .subscribe((response1) => {
            console.log(response1);
          });

  }

  registeredusers() {
    this.router.navigateByUrl("/registration");
  }



}
