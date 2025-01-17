import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TemporaryComponent } from "./temporary/temporary.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TemporaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vogelbekdier de Vries - The Game';

  private audioElement: HTMLAudioElement;
  isMuted: boolean = false; // Houd bij of geluid uit staat

  constructor() {
    this.audioElement = new Audio('assets/music/background.mp3');
    this.audioElement.loop = true;
    this.audioElement.volume = 0.5; // Start met een standaardvolume
  }

  toggleMute(): void {
    this.isMuted = !this.isMuted; // Wissel de mute-status
    this.audioElement.muted = this.isMuted;
  }

}
