import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SongDirectory } from './song-directory/song-directory';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'SongDirectory', component: SongDirectory },
    { path: '**', redirectTo: '' }
];
