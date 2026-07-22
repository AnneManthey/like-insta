import { Component } from '@angular/core';
import { PostInterface } from '../../interfaces/post-interface';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

  posts: PostInterface[] = [
    {name:"Waterfall",
      img:"like-insta/src/assets/img/01.png",
      likes:6
    },
    {name:"Dunes",
      img:"like-insta/src/assets/img/02.png",
      likes:14
    },
    {name:"Sunrise",
      img:"like-insta/src/assets/img/03.png",
      likes:3
    }
  ]
}
