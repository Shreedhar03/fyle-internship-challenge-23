import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { UserDetailsComponent } from './screens/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { RepositoryCardComponent } from './components/repository-card/repository-card.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserDataLoaderComponent } from './components/userdata-loader/userdata-loader.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RepoLoaderComponent } from './components/repo-loader/repo-loader.component';

const routes:Routes = [
  { path: '', component: HomeComponent,title:'RepoReveal' },
  { path: 'user/:username', component: UserDetailsComponent,title:'User' },
  { path: '**', component: NotFoundComponent,title:'404' },
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UserDetailsComponent,
    RepositoryCardComponent,
    NotFoundComponent,
    UserDataLoaderComponent,
    PaginationComponent,
    RepoLoaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
