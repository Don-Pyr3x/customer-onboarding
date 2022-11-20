import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private openAccountStage = new BehaviorSubject(true);
  currentOpenAccountStage = this.openAccountStage.asObservable();

  constructor() {}

  updateOpenAccountStage(stage: boolean) {
    this.openAccountStage.next(stage);
  }
}
