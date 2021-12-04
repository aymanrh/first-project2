import { Component, OnInit } from '@angular/core';

export interface AppUser {
  name:string
  lastName:string
  avatarUrl:string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  appUsers:AppUser[]=[
    {name:"name1",lastName:"lastname1",avatarUrl:"https://firebasestorage.googleapis.com/v0/b/studentfeeds-1c5f7.appspot.com/o/uploads%2F1637965022-Claims_94.jpg?alt=media&token=30cf44dd-b4ac-40d1-bba9-9abdc329c2ed"},
    {name:"name2",lastName:"lastname2",avatarUrl:""},
    {name:"name3",lastName:"lastname3",avatarUrl:""},
    {name:"name3",lastName:"lastname3",avatarUrl:""},  
    {name:"name3",lastName:"lastname3",avatarUrl:""},
    {name:"name3",lastName:"lastname3",avatarUrl:""},
    {name:"name3",lastName:"lastname3",avatarUrl:""},
    {name:"name3",lastName:"lastname3",avatarUrl:""},
    {name:"name3",lastName:"lastname3",avatarUrl:""},
    {name:"name3",lastName:"lastname3",avatarUrl:""},
    {name:"name3",lastName:"lastname3",avatarUrl:""},

    {name:"name4",lastName:"lastname4",avatarUrl:""}
];
  constructor() { }

  ngOnInit() {
   
  }
  getAvatar(user:AppUser) :string{
   
    if(user.avatarUrl){
      return user.avatarUrl
    }

    return "https://firebasestorage.googleapis.com/v0/b/studentfeeds-1c5f7.appspot.com/o/uploads%2F1637998981-MicrosoftTeams-image.png?alt=media&token=c1e2724e-9ebb-4199-aae2-44f7cc056c1f"
  }

}
