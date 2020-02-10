import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppViewComponent } from './view/app-view.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarItemComponent } from './calendar/calendar-item/calendar-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonthsRowComponent } from './calendar/months-row/months-row.component';

@NgModule({
  declarations: [
    AppComponent,
    AppViewComponent,
    CalendarComponent,
    CalendarItemComponent,
    MonthsRowComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
