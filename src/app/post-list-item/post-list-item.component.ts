import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string
  @Input() postContent: string
  @Input() createDate: any;
  @Input() loveIts:number;

  constructor() { }

  ngOnInit() {
  }

  loveIt(){
    this.loveIts +=1; 

  }

  donLoveIt(){
    this.loveIts -=1;
  }

}
