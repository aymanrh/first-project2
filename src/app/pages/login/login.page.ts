import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



  constructor(private alertController :AlertController,
    private router:Router,
    private authService:AuthService) {
       

   }

  ngOnInit() {
    
  }
  
  logout(){

  }
  goToHome(){
      this.router.navigate(['home-page'])
  }
  login(email,password){
   
    if(!email.value && email.value.length <3){
      return;
    }
    if(!password.value && password.value.length <6){
      return;
    }

    this.authService.signIn(email.value,password.value).then(data=>{
      console.log(data.user);
      if(data.user){
        localStorage.setItem('user',JSON.stringify(data.user))
        this.router.navigateByUrl('/home-page', {replaceUrl: true});
      }


    }).catch(err=>{
      console.error(err);
    });
  }
}
