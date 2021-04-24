import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  async onLogout() {
      this.authService.logout();
  }
}
