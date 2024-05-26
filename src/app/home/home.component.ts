import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AuthService]
})
export class HomeComponent implements OnInit {
  user: any;
  showLogout: boolean = false;

  constructor(private authService: AuthService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  toggleLogout(): void {
    console.log('toggleLogout called');
    this.showLogout = !this.showLogout;
    console.log('showLogout:', this.showLogout);
  }

  logout(): void {
    this.authService.logout().subscribe(
      () => {
        console.log('Logout successful');
        alert('Logout successful');
      },
      error => {
        console.error('Logout failed', error);
      }
    );
  }
}
