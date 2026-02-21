import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SongDirectory } from './song-directory/song-directory';
import { QrCode } from './qr-code/qr-code';
import { Contact } from './contact/contact';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'SongDirectory', component: SongDirectory },
    {path: 'QrCode', component: QrCode},
    {path: 'Contact', component: Contact},
    { path: '**', redirectTo: '' }
];
