import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var unsplashURL = 'https://source.unsplash.com/random?sig=';
    var count = -1; //Start from -1 because we increment first to get 0. Not that it matters.
    var images = $('img');

    $.each(images, function (i, element) {
      //Generate a unique sig id
      //Only the last number in the signature is used, so it can only be between 0-9
      //Therefor simply using a counter will suffice
      count++;

      //Concatenate to make url
      var url = unsplashURL + count.toString();

      //Set url to be the img src
      $(this).attr('src', url);
    });
  }
}
