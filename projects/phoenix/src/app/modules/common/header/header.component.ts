import {Component, Input} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() sidenav!: MatSidenav;
}
