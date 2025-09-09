import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';

interface Slide {
  image: string;
  title: string;
  description: string;
}

interface Activity {
  name: string;
  description: string;
  image: string;
  category: string;
  duration: string;
  ageGroup: string;
}

interface GalleryImage {
  url: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CardModule, CommonModule, TooltipModule, RouterModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('parkVideo') parkVideo!: ElementRef<HTMLVideoElement>;
  
  isMenuOpen = false;
  isScrolled = false;
  currentSlide = 0;

  // Slideshow data with all available images
  slides: Slide[] = [
    {
      image: '/nature-1.jpg',
      title: 'Welcome to Paradise',
      description: '125 acres of pure nature'
    },
    {
      image: '/nature-2.jpg',
      title: 'Adventure Awaits',
      description: 'Thrilling activities for all ages'
    },
    {
      image: '/nature-3.jpg',
      title: 'Wildlife Sanctuary',
      description: 'Home to exotic birds and butterflies'
    },
    {
      image: '/nature-4.jpg',
      title: 'Aquatic Wonderland',
      description: "India's largest aquarium"
    },
    {
      image: '/nature-5.jpg',
      title: 'Family Fun',
      description: 'Create unforgettable memories'
    },
    {
      image: '/nature-6.jpg',
      title: 'Nature Trails',
      description: 'Explore scenic walking paths'
    },
    {
      image: '/nature-7.jpg',
      title: 'Eco Tourism',
      description: 'Sustainable and green practices'
    },
    {
      image: '/nature-8.jpg',
      title: 'Events & Celebrations',
      description: 'Perfect venue for special occasions'
    }
  ];

  // Activities with all images
  activities: Activity[] = [
    {
      name: 'Boating Adventure',
      description: 'Peaceful boat rides on our scenic lake surrounded by nature',
      image: '/ride-1.jpg',
      category: 'Water Sports',
      duration: '30 mins',
      ageGroup: 'All Ages'
    },
    {
      name: 'Butterfly Garden',
      description: 'Walk through our magical butterfly conservatory',
      image: '/nature-2.jpg',
      category: 'Nature',
      duration: '1 hour',
      ageGroup: 'All Ages'
    },
    {
      name: 'Zipline Thrill',
      description: 'Soar through the canopy on our 500m zipline',
      image: '/ride-2.jpg',
      category: 'Adventure',
      duration: '45 mins',
      ageGroup: '12+ Years'
    },
    {
      name: 'Nature Photography',
      description: 'Capture stunning moments in our photogenic spots',
      image: '/nature-4.jpg',
      category: 'Tours',
      duration: '2 hours',
      ageGroup: 'All Ages'
    },
    {
      name: 'Rock Climbing',
      description: 'Challenge yourself on our climbing walls',
      image: '/ride-3.jpg',
      category: 'Adventure',
      duration: '1 hour',
      ageGroup: '10+ Years'
    },
    {
      name: 'Bird Watching',
      description: 'Spot exotic birds in their natural habitat',
      image: '/nature-6.jpg',
      category: 'Wildlife',
      duration: '1.5 hours',
      ageGroup: 'All Ages'
    }
  ];

  // Gallery images
  galleryImages: GalleryImage[] = [
    { url: '/nature-1.jpg', title: 'Sunrise Lake', category: 'Landscapes' },
    { url: '/nature-2.jpg', title: 'Morning Mist', category: 'Nature' },
    { url: '/nature-3.jpg', title: 'Butterfly Haven', category: 'Wildlife' },
    { url: '/ride-1.jpg', title: 'Adventure Zone', category: 'Activities' },
    { url: '/nature-4.jpg', title: 'Forest Canopy', category: 'Nature' },
    { url: '/ride-2.jpg', title: 'Family Fun', category: 'Activities' },
    { url: '/nature-5.jpg', title: 'Sunset Views', category: 'Landscapes' },
    { url: '/nature-6.jpg', title: 'Garden Paradise', category: 'Nature' },
    { url: '/nature-7.jpg', title: 'Wildlife Safari', category: 'Wildlife' },
    { url: '/nature-8.jpg', title: 'Eco Trails', category: 'Nature' },
    { url: '/ride-3.jpg', title: 'Thrill Rides', category: 'Activities' },
    { url: '/nature-1.jpg', title: 'Lake Views', category: 'Landscapes' }
  ];
  
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Auto-rotate slideshow
    setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  ngAfterViewInit() {
    // Set up scroll-based video auto-play after view is initialized
    setTimeout(() => {
      this.setupVideoAutoPlay();
    }, 500);
  }

  setupVideoAutoPlay() {
    if (this.parkVideo) {
      console.log('Setting up video auto-play...');
      
      // Add scroll listener
      const handleScroll = () => {
        const video = this.parkVideo.nativeElement;
        const videoRect = video.getBoundingClientRect();
        const isInViewport = videoRect.top < window.innerHeight && videoRect.bottom > 0;
        
        if (isInViewport && video.paused) {
          console.log('Video is in viewport, starting playback...');
          video.play().then(() => {
            console.log('Video playing successfully');
          }).catch(error => {
            console.error('Error playing video:', error);
            // Try to play muted if autoplay fails
            video.muted = true;
            video.play().catch(e => console.error('Still failed:', e));
          });
        } else if (!isInViewport && !video.paused) {
          console.log('Video out of viewport, pausing...');
          video.pause();
        }
      };

      // Initial check
      handleScroll();
      
      // Add scroll listener
      window.addEventListener('scroll', handleScroll);
      
      console.log('Video auto-play setup complete');
    } else {
      console.log('Video element not found');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false;
    }
  }

  // Slideshow controls
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  navigateToBookTickets() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/book-tickets']);
    } else {
      console.log('User not authenticated, redirecting to login');
      this.authService.redirectToLogin();
    }
  }

  playVideo() {
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      if (video.paused) {
        video.play();
        video.muted = false;
      } else {
        video.pause();
      }
    }
  }

  toggleVideo() {
    if (this.parkVideo) {
      const video = this.parkVideo.nativeElement;
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  }
}