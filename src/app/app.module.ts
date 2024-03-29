import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgFontawesomeModule} from 'ng-fontawesome-icon';

// custom components
import {BaseButtonModule} from '../../projects/base-button/src/lib/base-button.module';
import {BaseCardModule} from '../../projects/base-card/src/lib/base-card.module';
import {BaseCardbodyModule} from '../../projects/base-cardbody/src/lib/base-cardbody.module';
import {BaseCardfooterModule} from '../../projects/base-cardfooter/src/lib/base-cardfooter.module';
import {BaseCardheaderModule} from '../../projects/base-cardheader/src/lib/base-cardheader.module';
import {BaseBadgeModule} from '../../projects/base-badge/src/lib/base-badge.module';
import {BaseAlertModule} from '../../projects/base-alert/src/lib/base-alert.module';
import {BaseSpinnerModule} from '../../projects/base-spinner/src/lib/base-spinner.module';
import {BaseMenuModule} from '../../projects/base-menu/src/lib/base-menu.module';
import {BaseProgressModule} from '../../projects/base-progress/src/lib/base-progress.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFontawesomeModule,
    BaseButtonModule,
    BaseCardModule,
    BaseCardbodyModule,
    BaseCardfooterModule,
    BaseCardheaderModule,
    BaseBadgeModule,
    BaseAlertModule,
    BaseSpinnerModule,
    BaseMenuModule,
    BaseProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
