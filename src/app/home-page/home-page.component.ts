import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  name = 'João Iglésias';
  jobTitle = 'Full Stack Developer';

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
    'Junior Programmer (JUN 2021 - AUG 2022) at Deloitte',
    'Experienced Programmer (SEP 2022 - Present) at Deloitte',
  ];
}
