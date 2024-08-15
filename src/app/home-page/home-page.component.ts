import { Component } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  greeting = 'Greetings traveler!';

  welcome = 'Welcome to my corner in the cyberspace!';

  DATE_STARTED_WORKING = DateTime.fromFormat('20-03-2021', 'dd-LL-yyyy');
  yearsOfExperience = this.calculateYearsOfExperience();

  farewell = `Thank you for visiting my page, and I hope you enjoy exploring my work!`;

  languages: string[] = ['Java', 'Javascript/Typescript', 'C#', 'C++'];

  technologies: string[] = [
    'Angular',
    'NodeJS',
    'Spring framework',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'SonarQube',
    'Linux (Debian, Arch)',
    'Windows',
    'Git (Github/Bitbucket/CodeCommit)',
    'Unreal Engine 5',
    'Godot 4',
    'Microsoft Office',
    'MATLAB',
  ];

  experience: string[] = [
    'Trainee (MAR 2021 - JUN 2022) at Deloitte',
    'Junior Programmer (JUN 2021 - AUG 2022) at Deloitte',
    'Experienced Programmer (SEP 2022 - SEP 2023) at Deloitte',
    'Rockstar Developer (SEP 2023 - MAR 2024) at Critical Techworks',
    'Full Stack Developer (MAR 2024 - Present) at CGI'
  ];

  calculateYearsOfExperience(): string {
    return DateTime.now().diff(this.DATE_STARTED_WORKING).toFormat('y');
  }
}
