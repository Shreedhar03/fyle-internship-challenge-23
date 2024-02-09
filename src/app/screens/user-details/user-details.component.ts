import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userImage: string = '../../../assets/user.jpg';
  repositories: any[] = [1,2,3,4,5,6,7,8,9,10];
}
