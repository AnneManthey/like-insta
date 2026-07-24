import { Component } from '@angular/core';
import { PostInterface } from '../../interfaces/post-interface';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

  isLiked:boolean = false;

  posts: PostInterface[] = [
    {name:"Waterfall",
      img:"assets/img/01.png",
      likes:6
    },
    {name:"Dunes",
      img:"assets/img/02.png",
      likes:14
    },
    {name:"Sunrise",
      img:"assets/img/03.png",
      likes:3
    }
  ]

  switchLike(index: number){
    if (this.isLiked == false){
      this.isLiked = true;
      this.posts[index].likes ++;
    }
    else{
      this.isLiked = false;
      this.posts[index].likes --;
    }
  }


}
