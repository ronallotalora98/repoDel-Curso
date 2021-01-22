import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare function customInitFuntion();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  linkTheme = document.querySelector('#theme');
  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {

    customInitFuntion();
  }

}
