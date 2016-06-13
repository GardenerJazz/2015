import { Component, OnInit, Input } from '@angular/core';
import { band } from './index';

@Component({
  moduleId: module.id,
  selector: 'band',
  templateUrl: 'band.component.html',
  styleUrls: ['band.component.css']
})
export class BandComponent implements OnInit {
  @Input() band:band;

  constructor() {
  }

  ngOnInit() {
  }

}
