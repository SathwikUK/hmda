import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, CardModule, NavbarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  features = [
    {
      icon: 'pi-map-marker',
      title: '125 Acres',
      description: 'Sprawling green landscape on the scenic Himayat Sagar lakefront'
    },
    {
      icon: 'pi-users',
      title: 'Family Destination',
      description: 'Perfect for all age groups with activities for everyone'
    },
    {
      icon: 'pi-star',
      title: 'Award Winning',
      description: 'Recognized as Hyderabad\'s premier eco-tourism destination'
    },
    {
      icon: 'pi-leaf',
      title: 'Eco-Friendly',
      description: 'Committed to sustainable tourism and nature conservation'
    }
  ];

  milestones = [
    { year: '2020', event: 'Park Inauguration', description: 'Grand opening with state-of-the-art facilities' },
    { year: '2021', event: 'Aquarium Launch', description: 'India\'s largest aquarium opened to public' },
    { year: '2022', event: 'Adventure Zone', description: 'Added thrilling adventure activities' },
    { year: '2023', event: 'Butterfly Garden', description: 'Magical butterfly conservatory established' },
    { year: '2024', event: 'Expansion', description: 'New attractions and enhanced facilities' }
  ];
}