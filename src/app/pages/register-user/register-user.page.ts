import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {


  constructor(private alertController :AlertController,
    private router:Router,
    private authService:AuthService) {
       

   }

  ngOnInit() {
  }
  register(email,password){
    console.log(email.value,email.value);
    if(!email.value && email.value.length <3){
      return;
    }
    if(!password.value && password.value.length <6){
      return;
    }

    this.authService.registerUser(email.value,password.value).then(data=>{
      console.log(data);
      

    }).catch(err=>{
      console.error(err);
    });
  }
}
