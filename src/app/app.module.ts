import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookListComponent } from './book-list/book-list.component';
import { BookReducer } from './books/book.reducer';

@NgModule({
  declarations: [AppComponent, BookListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ book: BookReducer }),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
