import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StrategyComponent } from './components/strategy/strategy.component';
import { NextStepsComponent } from './components/next-steps/next-steps.component';
import { StoreModule } from '@ngrx/store';
import { formReducer } from './state/form.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StrategyComponent,
    NextStepsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    FormsModule,
    StoreModule.forRoot(formReducer),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
