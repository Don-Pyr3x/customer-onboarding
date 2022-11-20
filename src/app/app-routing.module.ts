import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NextStepsComponent } from './components/next-steps/next-steps.component';
import { StrategyComponent } from './components/strategy/strategy.component';

const routes: Routes = [
  {
    path: '',
    component: StrategyComponent,
  },
  {
    path: 'next-steps',
    component: NextStepsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
