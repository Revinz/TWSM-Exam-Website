import {
  Component,
  OnInit,
  Input,
  Directive,
  ViewContainerRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-title-service',
  templateUrl: './title-service.component.html',
  styleUrls: ['./title-service.component.css'],
})
export class TitleServiceComponent implements OnInit {
  @Input('PageTitle') title: string;

  constructor(private titleService: Title) {}

  ngOnInit(): void {
    console.log('Changed title to: ' + this.title);
    this.titleService.setTitle(this.title);
  }
}
