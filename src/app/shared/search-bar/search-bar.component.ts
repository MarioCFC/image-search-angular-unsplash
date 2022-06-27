import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


//TODO:Set the same button height as of the search bar  
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  @ViewChild("queryInput",{static: false}) queryInput:ElementRef;

  constructor() { }

  ngOnInit() {
  }

  searhEvent(){
  this.searchEvent.emit(this.queryInput.nativeElement.value)
  }

}
