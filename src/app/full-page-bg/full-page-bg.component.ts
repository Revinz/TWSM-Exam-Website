import {
  Component,
  OnInit,
  Input,
  Directive,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-full-page-bg',
  templateUrl: './full-page-bg.component.html',
  styleUrls: ['./full-page-bg.component.css', '../colorsheet.css'],
})
export class FullPageBGComponent implements OnInit {
  @Input('image-path') image_path: string;
  constructor() {}

  ngOnInit(): void {
    console.log('New BG');
  }
}
