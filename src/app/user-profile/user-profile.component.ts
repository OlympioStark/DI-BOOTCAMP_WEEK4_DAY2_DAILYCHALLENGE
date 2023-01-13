import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user: User = {
    name: "Maké",
    prenom: "Gilles-Chris",
    email: "gdcgjhksdc,nscwkh@gmail.com",
    profilePictureUrl: "https://www.universityofcalifornia.edu/sites/default/files/black-man-suit.jpg"
  }

  constructor() { }

  ngOnInit(): void {
  }

  getFullName() {
    return `${this.user.name} ${this.user.prenom}`;
  } 

}
