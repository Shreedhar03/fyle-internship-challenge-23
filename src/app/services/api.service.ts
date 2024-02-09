import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';
import { Repository } from 'src/models/repository.model';
import { UserData } from 'src/models/userdata.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get<UserData>(`https://api.github.com/users/${githubUsername}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
  getRepos(githubUsername: string) {
    return this.httpClient.get<Repository[]>(`https://api.github.com/users/${githubUsername}/repos`);
  }
}
