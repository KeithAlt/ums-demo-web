import { HttpErrorResponse } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UserMember } from './usermember';
import { UserMemberService } from './usermember.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public users!: UserMember[];

  constructor(private userMemberService: UserMemberService){}

  // When component is init, call function & set our employees in-memory for the below function to use later
  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userMemberService.getUsers().subscribe(
      (response: UserMember[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public onOpenModal(user: UserMember | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement("button")
    button.type = 'button'; // Default was 'submit'
    button.style.display = 'none'; // Hides button in UI
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addUserModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', '#updateUserModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', '#deleteUserModal');
    }

    container?.appendChild(button);
    button.click();
  }

  public searchUsers(key: string): void {
    console.log(key);
    const results: UserMember[] = [];
    for (const user of this.users) {
      if (user.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || user.userRole.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(user);
      }
    }
    this.users = results;
    if (results.length === 0 || !key) {
      this.getUsers();
    }
  }

}
