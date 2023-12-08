import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '../github-api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private githubService: GithubApiService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.githubService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    });
  }

  searchUsers(query: string) {
    this.githubService.searchUsers(query).subscribe((data: any) => {
      this.users = data.items;
    });
  }
}




