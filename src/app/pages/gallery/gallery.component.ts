import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { NavbarComponent } from '../../components/navbar/navbar.component';

interface GalleryImage {
  url: string;
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, TooltipModule, NavbarComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  viewMode: 'grid' | 'masonry' | 'carousel' | 'list' = 'grid';
  selectedCategory = 'All';
  currentIndex = 0;
  lightboxOpen = false;
  lightboxIndex = 0;

  categories = ['All', 'Landscapes', 'Wildlife', 'Activities', 'Gardens', 'Aquarium', 'Adventures'];

  images: GalleryImage[] = [
    {
      url: '/nature-1.jpg',
      title: 'Sunrise Lake View',
      category: 'Landscapes',
      description: 'Beautiful sunrise over the main lake with morning mist'
    },
    {
      url: '/nature-2.jpg',
      title: 'Butterfly Garden',
      category: 'Gardens',
      description: 'Colorful butterflies in our tropical conservatory'
    },
    {
      url: '/ride-1.jpg',
      title: 'Adventure Zipline',
      category: 'Adventures',
      description: 'Thrilling zipline experience through the forest canopy'
    },
    {
      url: '/nature-3.jpg',
      title: 'Exotic Birds',
      category: 'Wildlife',
      description: 'Rare and exotic birds in our aviary'
    },
    {
      url: '/nature-4.jpg',
      title: 'Marine Life',
      category: 'Aquarium',
      description: 'Diverse marine species in India\'s largest aquarium'
    },
    {
      url: '/ride-2.jpg',
      title: 'Rock Climbing',
      category: 'Activities',
      description: 'Challenge yourself on our rock climbing walls'
    },
    {
      url: '/nature-5.jpg',
      title: 'Rose Garden',
      category: 'Gardens',
      description: 'Beautiful rose varieties in full bloom'
    },
    {
      url: '/nature-6.jpg',
      title: 'Forest Trail',
      category: 'Landscapes',
      description: 'Serene walking paths through dense forest'
    },
    {
      url: '/nature-7.jpg',
      title: 'Peacock Display',
      category: 'Wildlife',
      description: 'Majestic peacocks in their natural habitat'
    },
    {
      url: '/ride-3.jpg',
      title: 'Boating Fun',
      category: 'Activities',
      description: 'Family enjoying boat rides on the lake'
    },
    {
      url: '/nature-8.jpg',
      title: 'Coral Reef',
      category: 'Aquarium',
      description: 'Vibrant coral reef ecosystem'
    },
    {
      url: '/ride-1.jpg',
      title: 'Rope Course',
      category: 'Adventures',
      description: 'Challenging rope course adventure'
    }
  ];

  filteredImages: GalleryImage[] = [];

  ngOnInit() {
    this.filteredImages = this.images;
  }

  setViewMode(mode: 'grid' | 'masonry' | 'carousel' | 'list') {
    this.viewMode = mode;
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredImages = this.images;
    } else {
      this.filteredImages = this.images.filter(img => img.category === category);
    }
    this.currentIndex = 0;
  }

  openLightbox(index: number) {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
  }

  closeLightbox() {
    this.lightboxOpen = false;
  }

  lightboxPrev() {
    this.lightboxIndex = this.lightboxIndex > 0 ? this.lightboxIndex - 1 : this.filteredImages.length - 1;
  }

  lightboxNext() {
    this.lightboxIndex = this.lightboxIndex < this.filteredImages.length - 1 ? this.lightboxIndex + 1 : 0;
  }

  prevImage() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.filteredImages.length - 1;
  }

  nextImage() {
    this.currentIndex = this.currentIndex < this.filteredImages.length - 1 ? this.currentIndex + 1 : 0;
  }

  viewImage(image: GalleryImage) {
    const index = this.filteredImages.indexOf(image);
    this.openLightbox(index);
  }
}