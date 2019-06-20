import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  template: `
  <div><span class="maintitle">StarWars</span> </div>
    <div class="container" fxLayout="column wrap" fxLayoutGap="20px" >
      <a style=" text-decoration: none" href="{{ c | lowercase}}" *ngFor="let c of categories">
        <mat-card style=" border:3px solid #000;" >
          <mat-card-title id="category"> {{ c }} </mat-card-title>
        </mat-card>
      </a>
    </div>
    <div class="social-share" Title="share or favor" data-disabled="weibo,qq,qzone,tencent,douban,diandian,linkedin,wechat"
       data-mode="prepend">
       <a href="#"  rel="sidebar"
       onclick="return addFavorite('window.location.href','document.title');"class="social-share-icon icon-heart">
       </a></div>
  `
})
export class CategoryComponent implements OnInit {
  categories: string[] = [
    'Characters',
    'Films',
    'Species',
    'Starships',
    'Vehicles',
    'Planets'
  ];

  constructor() {}

  ngOnInit() {}
}
