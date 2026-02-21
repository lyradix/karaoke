import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SongDirectory } from './song-directory/song-directory';
import { QrCode } from './qr-code/qr-code';
import { Contact } from './contact/contact';
import { Recap } from './recap/recap';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SongDirectory, QrCode, Contact, Recap],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('karaoke');
}
