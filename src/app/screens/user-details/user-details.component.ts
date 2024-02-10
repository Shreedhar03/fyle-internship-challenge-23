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
  repositories: Repository[] = [];
  username: string = '';
  errorMessageHeader: string | undefined;
  errorMessageBody: string | undefined;
  userDataLoading: boolean = false;
  reposLoading: boolean = false;

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
    this.userDataLoading = true
    this.apiService.getUser(this.username).subscribe({
      next: (data) => {
        this.userDetails = data;
        // this.errorMessage="Something went wrong. Please check your internet connection and try again later"
        this.errorMessageHeader = undefined
        this.errorMessageBody = undefined
        console.log("userData", this.userDetails)
        this.userDataLoading = false
      },
      error: (error) => {
        console.error(error.message);
        if (error.message.includes('404')) {
          this.navigate.navigate(['/not-found']);
        } else {
          this.userDetails = undefined;
          this.errorMessageHeader = "Something went wrong!"
          this.errorMessageBody = "Unexpexted error occured. Please try again later"
        }
        this.repositories = [];
        this.userDataLoading = false
      }
    });
  }

  // Fetch user repositories
  fetchUserRepos() {
    this.reposLoading = true
    this.apiService.getRepos(this.username).subscribe({
      next: (repos: Repository[]) => {
        this.repositories = repos;
        console.log("repos", this.repositories);
        this.reposLoading = false
      },
      error: (error) => {
        console.error(error.message);
        this.repositories = [];
        this.reposLoading = false
      }
    });
  }
}
