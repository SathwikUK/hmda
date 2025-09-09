import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  constructor(private router: Router, private authService: AuthService) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    if (this.router.url === '/home') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.isMenuOpen = false;
      }
    } else {
      this.router.navigate(['/home'], { fragment: sectionId });
    }
  }

  navigateToBookTickets() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/book-tickets']);
    } else {
      console.log('User not authenticated, redirecting to login');
      this.authService.redirectToLogin();
    }
  }
}