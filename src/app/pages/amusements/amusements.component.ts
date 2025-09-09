import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';

interface Amusement {
  name: string;
  description: string;
  image: string;
  icon: string;
  category: string;
  duration: string;
  ageGroup: string;
  price: number;
}

@Component({
  selector: 'app-amusements',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './amusements.component.html',
  styleUrl: './amusements.component.css'
})
export class AmusementsComponent {
  amusements: Amusement[] = [
    {
      name: 'Giant Aquarium',
      description: 'Explore India\'s largest aquarium with over 200 marine species',
      image: '/nature-1.jpg',
      icon: 'pi-globe',
      category: 'Aquatic',
      duration: '2 Hours',
      ageGroup: 'All Ages',
      price: 250
    },
    {
      name: 'Butterfly Garden',
      description: 'Walk through a magical conservatory with hundreds of butterflies',
      image: '/nature-2.jpg',
      icon: 'pi-palette',
      category: 'Nature',
      duration: '1 Hour',
      ageGroup: 'All Ages',
      price: 150
    },
    {
      name: 'Zipline Adventure',
      description: 'Soar through the forest canopy on our 500m zipline',
      image: '/ride-1.jpg',
      icon: 'pi-bolt',
      category: 'Adventure',
      duration: '45 Mins',
      ageGroup: '12+ Years',
      price: 350
    },
    {
      name: 'Exotic Aviary',
      description: 'Meet exotic birds from around the world in walk-through habitats',
      image: '/nature-3.jpg',
      icon: 'pi-twitter',
      category: 'Wildlife',
      duration: '1.5 Hours',
      ageGroup: 'All Ages',
      price: 200
    },
    {
      name: 'Boating Lake',
      description: 'Enjoy peaceful boat rides on our scenic 10-acre lake',
      image: '/nature-4.jpg',
      icon: 'pi-sun',
      category: 'Water Sports',
      duration: '30 Mins',
      ageGroup: 'All Ages',
      price: 100
    },
    {
      name: 'Rock Climbing',
      description: 'Challenge yourself on our artificial rock climbing walls',
      image: '/ride-2.jpg',
      icon: 'pi-chart-line',
      category: 'Adventure',
      duration: '1 Hour',
      ageGroup: '10+ Years',
      price: 250
    },
    {
      name: 'Nature Trails',
      description: 'Guided walks through 5km of scenic forest trails',
      image: '/nature-5.jpg',
      icon: 'pi-map',
      category: 'Nature',
      duration: '2 Hours',
      ageGroup: 'All Ages',
      price: 50
    },
    {
      name: 'Rope Course',
      description: 'Navigate through challenging high rope obstacles',
      image: '/ride-3.jpg',
      icon: 'pi-share-alt',
      category: 'Adventure',
      duration: '1 Hour',
      ageGroup: '8+ Years',
      price: 300
    },
    {
      name: 'Kids Play Zone',
      description: 'Safe and fun playground with slides, swings, and more',
      image: '/nature-6.jpg',
      icon: 'pi-heart',
      category: 'Kids',
      duration: 'Unlimited',
      ageGroup: '3-12 Years',
      price: 100
    },
    {
      name: 'Cycling Track',
      description: 'Rent bikes and explore our dedicated cycling paths',
      image: '/nature-7.jpg',
      icon: 'pi-compass',
      category: 'Sports',
      duration: '1 Hour',
      ageGroup: 'All Ages',
      price: 80
    },
    {
      name: 'Picnic Gardens',
      description: 'Beautiful landscaped areas perfect for family picnics',
      image: '/nature-8.jpg',
      icon: 'pi-users',
      category: 'Leisure',
      duration: 'Full Day',
      ageGroup: 'All Ages',
      price: 50
    },
    {
      name: 'Photography Tours',
      description: 'Guided photography sessions at scenic spots',
      image: '/ride-1.jpg',
      icon: 'pi-camera',
      category: 'Tours',
      duration: '3 Hours',
      ageGroup: '15+ Years',
      price: 500
    }
  ];
}