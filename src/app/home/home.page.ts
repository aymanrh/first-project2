import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { AuthService } from '../services/user/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService,private authService:AuthService) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }
  logout(){
      this.authService.logout();
  }
}
