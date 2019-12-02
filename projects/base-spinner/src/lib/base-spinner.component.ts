import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'base-spinner',
  templateUrl: './base-spinner.component.html',
  styles: []
})
export class BaseSpinnerComponent implements OnInit {

  @Input() color: string;
  @Input() type: string;
  @Input() size: string;
  constructor() { }

  ngOnInit() {
  }

  setMyStyles() {
    const styles = {
      height: this.size + 'rem',
      width: this.size + 'rem',
    };
    return styles;
  }

}
