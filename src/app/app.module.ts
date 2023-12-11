import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { DirDirective } from './dir.directive';
import { PipePipe } from './pipe.pipe';
import { CmpChildComponent } from './cmp-child/cmp-child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Cmp2Component,
    DirDirective,
    PipePipe,
    CmpChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
