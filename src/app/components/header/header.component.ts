import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  modeSelect: string = 'investment';
  activeTab: boolean = true;
  tabSubscribe: Subscription;

  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.currentOpenAccountStage.subscribe(
      (stage) => (this.activeTab = stage)
    );
  }

  ngOnDestroy(): void {
    this.tabSubscribe?.unsubscribe();
  }
}
