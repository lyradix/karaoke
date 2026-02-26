import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { RouterLink } from '@angular/router';


interface Song { title: string; }

@Component({
  selector: 'app-song-directory',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './song-directory.html',
  styleUrls: ['./song-directory.scss'],
})
export class SongDirectory implements OnInit {

  public apiUrl = 'http://192.168.1.164:8000';

  songData: Song[] = [];
  filteredSongsList: Song[] = [];
  selectedSongs: Song[] = [];
  currentSearch = '';

  constructor(private http: HttpClient,
        private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.displaySongs();
          console.log(localStorage.getItem('songs'))
  }

// displaySongs() {
//   this.songData = [
//     { title: "The Beatles" },
//     { title: "A Sky Full of Stars" },
//     { title: "Hello" },
//     { title: "Another Love" }
//   ];
// }

displaySongs(): void {
  this.http.get<Song[]>(`${this.apiUrl}/songs`).subscribe({
    next: (result) => {
      console.log("API result:", result);
      this.songData = result;
      console.log("songData après assignation:", this.songData);
    },
    error: (error) => {
      console.error("Erreur API:", error);
      this.songData = [];
    }
  });
}
 filterResults(searchText: string): void {
  this.currentSearch = (searchText || '').trim().toLowerCase();


  if (!this.currentSearch) {
    this.filteredSongsList = [];
    return;
  }

  this.filteredSongsList = this.songData.filter(song => {
    const title = song.title ?? '';
    return title.toLowerCase().includes(this.currentSearch);
  });
}

  // Highlight all matching characters in the title
  highlight(title: string): string {
    if (!this.currentSearch) return title;

    let highlighted = title;
    const searchChars = this.currentSearch.split('');
    const uniqueChars = [...new Set(searchChars)];

    // Highlight each unique character that was searched for
    uniqueChars.forEach(char => {
      const regex = new RegExp(char, 'gi');
      highlighted = highlighted.replace(regex, `<span class="highlight">${char}</span>`);
    });

    return highlighted;
  }

  addToSelection(song: Song): void {
    if (!this.selectedSongs.includes(song)) {
      this.selectedSongs.push(song);
    }
    // remove from the visible filtered list
    this.filteredSongsList = this.filteredSongsList.filter(s => s !== song);

  }

  removeFromSelection(song: Song): void {
    this.selectedSongs = this.selectedSongs.filter(s => s !== song);
    // re-apply current filter so the item can reappear if it matches
    this.filterResults(this.currentSearch);
  }

  trackBySong(index: number, song: Song): string {
    return song.title;
  }
}
