import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.css']
})
export class SelectListComponent implements OnInit {
  @Input() listItems;
  @Output() itemSelectedEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onRegion(value: string) {
    console.log(value);
    this.itemSelectedEvent.emit(value);
  }

}
