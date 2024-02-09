import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Repository } from 'src/models/repository.model';
import { UserData } from 'src/models/userdata.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userImage: string = '../../../assets/user.jpg';
  userDetails: UserData | undefined;
  repositories: Repository[] =[];
  username: string = '';

  constructor(private router: ActivatedRoute, private navigate: Router, private apiService: ApiService) { }


  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.username = params['username'];
      this.fetchUserDetails();
      this.fetchUserRepos();
    })
  }

  // Fetch user details
  fetchUserDetails() {
    this.apiService.getUser(this.username).subscribe({
      next: (data) => {
        this.userDetails = data;
        console.log("userData", this.userDetails)
      },
      error: (error) => {
        console.error(error.message);
        if (error.message.includes('404')) {
          this.navigate.navigate(['/not-found']);
        }
        this.repositories = [];
      }
    });
  }

  // Fetch user repositories
  fetchUserRepos() {
    this.apiService.getRepos(this.username).subscribe({
      next: (repos:Repository[]) => {
        this.repositories = repos;
        console.log("repos", this.repositories);
      },
      error: (error) => {
        console.error(error.message);
        this.repositories = [];
      }
    });
  }
}
