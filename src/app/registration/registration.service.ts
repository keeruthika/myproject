import { Injectable } from "@angular/core";
import { RegistrationDTO } from "../dto/registration.dto";
import { ApiService } from "../apiservice/api.service";
@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  registrationdto: RegistrationDTO = new RegistrationDTO();
  //abc:string;
  //cc:number;
  //dd:[];
  constructor(private apiService: ApiService) {}

  saveData(abc) {
    // const abc=new RegistrationDTO();
    // abc.firstName="Inika";
    //abc.lastName="Kisore";
    return this.apiService.postData(
      "http://15.207.6.226:8080/registerUser",
      abc
    );
  }
  getDataAllUsers() {
  const abc = this.apiService.getData("http://15.207.6.226:8080/getAllRegisteredUser");
  return abc;
  }
  getDataByusername(username){
  return this.apiService.getData("http://15.207.6.226:8080/getRegisteredUserByUserName/"+username);
  }
}
