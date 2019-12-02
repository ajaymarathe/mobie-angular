import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-alert',
  templateUrl: './base-alert.component.html',
  styles: []
})
export class BaseAlertComponent implements OnInit {
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

}
