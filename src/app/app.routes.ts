import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SongDirectory } from './song-directory/song-directory';
import { QrCode } from './qr-code/qr-code';
import { Contact } from './contact/contact';
import { Recap } from './recap/recap';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'SongDirectory', loadComponent: () => import('./song-directory/song-directory').then(m => m.SongDirectory) },
    {path: 'QrCode', component: QrCode},
    {path: 'Contact', component: Contact},
    {path: 'Recap', component: Recap},
    { path: '**', redirectTo: '' }
];
