import { Injectable } from '@angular/core';
import { RegistrationDTO } from '../dto/registration.dto';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService  {
registrationdto:RegistrationDTO=new RegistrationDTO();
//abc:string;
//cc:number;
//dd:[];
  constructor() { }
}
