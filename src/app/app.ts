import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SongDirectory } from './song-directory/song-directory';
import { QrCode } from './qr-code/qr-code';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongDirectory, QrCode, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('karaoke');
}
