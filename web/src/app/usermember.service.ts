import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserMember } from "./usermember";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class UserMemberService {
    private apiServiceUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getUsers(): Observable<UserMember[]> {
        return this.http.get<UserMember[]>(`${this.apiServiceUrl}/user/all`);
    }

    public addUser(user: UserMember): Observable<UserMember> {
        return this.http.post<UserMember>(`${this.apiServiceUrl}/user/add`, user);
    }

    public updateUser(user: UserMember): Observable<UserMember> {
        return this.http.put<UserMember>(`${this.apiServiceUrl}/user/update`, user);
    }
    
    public deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServiceUrl}/user/delete/${userId}`);
    }
}