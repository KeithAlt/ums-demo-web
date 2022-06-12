import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserMemberService } from './usermember.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,    
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }