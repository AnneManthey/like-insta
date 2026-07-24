import { Component } from '@angular/core';
import { PostInterface } from '../../interfaces/post-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-page',
  imports: [RouterLink],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

  heartOutline = 'assets/img/like_outline.svg';
  heartFilled = 'assets/img/like_filled.svg';

  posts: PostInterface[] = [
    {
      name: "Waterfall",
      img: "assets/img/01.png",
      likes: 6,
      isLiked: false
    },
    {
      name: "Dunes",
      img: "assets/img/02.png",
      likes: 14,
      isLiked: false
    },
    {
      name: "Sunrise",
      img: "assets/img/03.png",
      likes: 3,
      isLiked: false
    }
  ]

  switchLike(index: number) {
    if (this.posts[index].isLiked == false) {
      this.posts[index].isLiked = true;
      this.posts[index].likes++;
    }
    else {
      this.posts[index].isLiked = false;
      this.posts[index].likes--;
    }
  }

}
