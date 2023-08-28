import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeTab = 'recipes';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
