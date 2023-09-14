import { Component, OnInit } from '@angular/core';

import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {}

  ngOnInit(): void {}

  onSaveRecipes() {
    this.dataStorageService.saveRecipes();
  }

  onGetRecipes() {
    this.dataStorageService.getRecipes().subscribe();
  }
}
