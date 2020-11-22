import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {
}
