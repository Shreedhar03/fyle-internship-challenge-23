import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  username: string = '';

  constructor(private router: Router) { }

  handleSubmit(event: any) {
    event.preventDefault();
    console.log('Form submitted');
    if (this.username.trim() !== '') {
      this.router.navigate([`user/${this.username}`]);
      this.username = '';
    }
  }
}
