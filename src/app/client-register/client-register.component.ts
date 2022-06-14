import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import axios from "axios";
import { FormBuilder, FormGroup, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-client-register',
  templateUrl: './client-register.component.html',
  styleUrls: ['./client-register.component.css']
})
export class ClientRegisterComponent implements OnInit {

  

  constructor(private router: Router) { }

  EmailError : string | undefined;
  DocumentError: string | undefined;
  LoginError: string | undefined;

  ngOnInit(): void {}

  VerifyForm() {
    let nameInput = this.getInputField('name');
    let nameBoolean =
      this.VerifyInputFieldIsNull(nameInput) &&
      this.VerifyInputFieldSize(3, nameInput);

    let phoneInput = this.getInputField('phone');
    let phoneBoolean =
      this.VerifyInputFieldIsNull(phoneInput) &&
      this.VerifyPhoneSize(phoneInput);

    let emailInput = this.getInputField('email');
    let emailBoolean =
      this.VerifyInputFieldIsNull(emailInput) &&
      this.VerifyEmailIsValidy(emailInput);

    let documentInput = this.getInputField('document');
    let documentBoolean = this.VerifyInputFieldIsNull(documentInput);

    let dateInput = this.getInputField('date_of_birth');
    let dateBoolean = this.VerifyInputFieldIsNull(dateInput);

    let loginInput = this.getInputField('login');
    let loginBoolean =
      this.VerifyInputFieldIsNull(loginInput) &&
      this.VerifyInputFieldSize(4, loginInput);

    let passwdInput = this.getInputField('passwd');
    let passwordBoolean =
      this.VerifyInputFieldIsNull(passwdInput) &&
      this.VerifyPasswordIsValid(passwdInput);

  
      // let name = document.getElementById("name") as HTMLInputElement;
      // let phone = document.getElementById("phone") as HTMLInputElement;
      // let documento = document.getElementById("document") as HTMLInputElement;
      // let email = document.getElementById("email") as HTMLInputElement;
      // let login = document.getElementById("login") as HTMLInputElement;
      // let passwd = document.getElementById("passwd") as HTMLInputElement;
      // let date_of_birth = document.getElementById("date_of_birth") as HTMLInputElement;

      let street =document.getElementById("street") as HTMLInputElement;
      let state =document.getElementById("state") as HTMLInputElement;
      let city =document.getElementById("city") as HTMLInputElement;
      let country =document.getElementById("country") as HTMLInputElement;
      let postal_code =document.getElementById("postal_code") as HTMLInputElement;
    

      console.log(dateInput.value)
      console.log()

      let result =
        nameBoolean &&
        phoneBoolean &&
        emailBoolean &&
        documentBoolean &&
        dateBoolean &&
        loginBoolean &&
        passwordBoolean;


      if(result == true){
        var data = JSON.stringify({
          "name" : nameInput?.value,
          "phone" : phoneInput?.value,
          "document" : documentInput?.value,
          "email" : emailInput?.value,
          "login" : loginInput?.value,
          "passwd" : passwdInput?.value,
          "date_of_birth" : dateInput?.value,
          "address" : {
            "street" : street?.value,
            "state" : state?.value,
            "city" : city?.value,
            "country" : country?.value,
            "postal_code" : postal_code?.value

          }

        
        })

      let self = this;
      var config = {
        method: 'post',
        url: 'http://localhost:5136/client/register',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data

      }
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        self.router.navigate(['client/login'])
      })
      .catch(function (error) {
        let errors = (error.response.data)
            console.log(errors)
            if(errors.email){
              self.EmailError = errors.email;
            }
            if(errors.document){
              self.DocumentError = errors.document;
            }
            if(errors.login){
              self.LoginError= errors.login;
            }
      });
    }
        

      
    
  }
  spanOn(id: string) {
    var span = document.querySelector(id);
    span?.classList.remove('invisible');
  }

  spanOff(id: string) {
    var span = document.querySelector(id);
    span?.classList.add('invisible');
  }

  getInputField(id: string) {
    let response = document.querySelector(id) as HTMLInputElement;
    return response;
  }

  VerifyInputFieldIsNull(input: HTMLInputElement) {
    let prop = '#' + input.id + '-none';
    if (input.value.length == 0) {
      this.spanOn(prop);
      return false;
    } else {
      this.spanOff(prop);
      return true;
    }
  }

  VerifyInputFieldSize(size: number, input: HTMLInputElement) {
    let prop = '#' + input.id + '-lenght';
    if (input.value.length >= size) {
      this.spanOff(prop);
      return true;
    } else {
      this.spanOn(prop);
      return false;
    }
  }

  VerifyPhoneSize(input: HTMLInputElement) {
    let prop = '#' + input.id + '-lenght';
    if (input.value.length == 15) {
      this.spanOff(prop);
      return true;
    } else {
      this.spanOn(prop);
      return false;
    }
  }

  VerifyEmailIsValidy(Input: HTMLInputElement) {
    let prop = '#' + Input.id + '-valid';
    if (Input.value.includes('@') && Input.value.length > 3) {
      this.spanOff(prop);
      return true;
    } else {
      this.spanOn(prop);
      return false;
    }
  }

  VerifyPasswordIsValid(Input: HTMLInputElement) {
    let value = Input.value;
    let prop = '#' + Input.id + '-valid';
    let masc = /[A-Z]/;
    let min = /[a-z]/;
    let number = /[0-9]/;
    let spec = /[\!\$\.]/;
    if (
      masc.test(value) &&
      number.test(value) &&
      min.test(value) &&
      spec.test(value)
    ) {
      this.spanOff(prop);
      return true;
    } else {
      this.spanOn(prop);
      return false;
    }
  }

  PhoneMaskField(event: KeyboardEvent) {
    var key = event.keyCode || event.charCode;
    let phoneField = this.getInputField('#phone') as HTMLInputElement;
    let phoneValue = phoneField.value;
    let number = /[0-9]/;
    if( key != 8 && key != 46 ){

      if(!number.test(phoneValue[phoneValue.length-1])){
        let alpha = /[a-zA-Z]/
        phoneValue =  phoneValue.replace(alpha,"");
      }
       else if (phoneValue.length == 1) {
        phoneValue = '(' + phoneValue;
      } else if (phoneValue.length == 3) {
        phoneValue = phoneValue + ') ';
      } else if (phoneValue.length == 10) {
        phoneValue += '-';
      }
    }
    phoneField.value = phoneValue
  }
  

}
