import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-menu',
  templateUrl: './base-menu.component.html',
  styles: []
})
export class BaseMenuComponent implements OnInit {
  @Input() color: string;
  @Input() size: string;
  constructor() { }

  ngOnInit() {
  }

}
