import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-tabs',
  templateUrl: './info-tabs.component.html',
  styleUrls: ['./info-tabs.component.scss']
})
export class InfoTabsComponent {
  @Input() public label = "Mijn team"
}
