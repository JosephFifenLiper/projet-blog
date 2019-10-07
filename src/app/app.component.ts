import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dateCreated = new Date();
   MesPosts = [
     {
       title: 'Mon premier Post',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel illo at, error quo repellat obcaecati eligendi assumenda inventore laborum rem aut soluta a id vitae facilis numquam ratione quasi!',
       loveIts: 5,
       created_at: this.dateCreated
     },
     {
      title: 'Mon deuxieme Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel illo at, error quo repellat obcaecati eligendi assumenda inventore laborum rem aut soluta a id vitae facilis numquam ratione quasi!',
      loveIts: - 4,
      created_at: this.dateCreated
     },
     {
      title: 'Mon nieme Post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel illo at, error quo repellat obcaecati eligendi assumenda inventore laborum rem aut soluta a id vitae facilis numquam ratione quasi!',
      loveIts: 1,
      created_at: this.dateCreated
     }
  ];

}
