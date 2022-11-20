import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  activeTab: boolean = true;
  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit(): void {
    this.commonService.currentOpenAccountStage.subscribe(stage => this.activeTab = stage)
  }

  nextStep(): void {
    this.commonService.updateOpenAccountStage(false);
    this.router.navigate(['/next-steps']);
  }
}
