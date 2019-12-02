import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-button',
  templateUrl: './base-button.component.html',
  styles: []
})
export class BaseButtonComponent implements OnInit {

  @Input() color: string;
  @Input() size: string;
  constructor() { }

  ngOnInit() {
  }

}
