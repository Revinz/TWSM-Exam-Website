import { Component, OnInit, Input } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-big-nav-button',
  templateUrl: './big-nav-button.component.html',
  styleUrls: ['./big-nav-button.component.css', '../colorsheet.css'],
})
export class BigNavButtonComponent implements OnInit {
  @Input('bnName') name: string;
  @Input('link') link: string;

  constructor() {}

  ngOnInit(): void {}
}
