import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectorRef} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  nicknameValue: string = '';
  emailValue: string = '';




  constructor(private router: Router,
    private http: HttpClient,
        private cdr: ChangeDetectorRef) {}

  nickname(event: Event) {
    this.nicknameValue = (event.target as HTMLInputElement).value;
  }

  email(event: Event) {
    this.emailValue = (event.target as HTMLInputElement).value;
  }
  
    public apiUrl = 'http://192.168.1.164:8000';

     onSubmit(event: Event) {
    event.preventDefault();

    if(this.nicknameValue && this.emailValue) {

      const eventData = {
        nickname: this.nicknameValue,
        email: this.emailValue,
      };

          localStorage.setItem('user', JSON.stringify(eventData));

       this.http.post(`${this.apiUrl}/postSinger`, eventData).
       subscribe(
         (response) =>console.log(eventData),
      );
        console.log(localStorage)
          this.router.navigate(['/SongDirectory']);
  
    } else {
      console.warn('Veuillez remplir tous les champs du formulaire.');
    }
    }
}
