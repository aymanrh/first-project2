import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private alertController :AlertController,private router:Router) {

   }

  ngOnInit() {
  }
  async login(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'are you sure',
      subHeader: 'login',
      message: 'This is an alert message.',
      buttons: [  {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          console.log('Confirm Okay');
        }
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  logout(){

  }
  goToHome(){
      this.router.navigate(['home-page'])
  }
}
