import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-progress',
  templateUrl: './base-progress.component.html',
  styles: []
})
export class BaseProgressComponent implements OnInit {
  @Input() width: string;
  @Input() size: string;
  @Input() type: string;
  @Input() color: string;
  @Input() animation: string;

  constructor() { }

  ngOnInit() {
  }

}
