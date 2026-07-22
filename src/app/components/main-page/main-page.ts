import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {

  posts = [
    {name:"",
      img:"",
      likes:6
    },
    {name:"",
      img:"",
      likes:14
    },
    {name:"",
      img:"",
      likes:3
    },
    {name:"",
      img:"",
      likes:9
    },
  ]
}
