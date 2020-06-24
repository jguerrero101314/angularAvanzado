import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingService } from '../../services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  constructor(public _ajustes: SettingService) {}

  ngOnInit(): void {}
  cambiarColor(tema: string, link: any) {
    this.aplicarCheack(link);
    this._ajustes.aplicarTema( tema );
  }
  aplicarCheack(link: any) {
    let selectores: any = document.getElementsByClassName('selector');
    for (let ref of selectores) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }
}
