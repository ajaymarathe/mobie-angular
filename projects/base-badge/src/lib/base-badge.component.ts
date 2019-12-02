import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-badge',
  templateUrl: './base-badge.component.html',
  styles: []
})
export class BaseBadgeComponent implements OnInit {
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

}
