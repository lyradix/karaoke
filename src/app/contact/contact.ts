import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  nicknameValue: string = '';
  emailValue: string = '';

  constructor(private http: HttpClient) {}

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

       this.http.post(`${this.apiUrl}/postSinger`, eventData).
       subscribe(
         (response) =>console.log(eventData),
      );
    } else {
      console.warn('Veuillez remplir tous les champs du formulaire.');
    }
    }
}
