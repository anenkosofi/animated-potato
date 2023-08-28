import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() setActiveTab = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(tab: string) {
    this.setActiveTab.emit(tab);
  }


}
