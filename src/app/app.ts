import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SongDirectory } from './song-directory/song-directory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongDirectory],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('karaoke');
}
