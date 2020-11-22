import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
    FormsModule
  ],
  declarations: [],
  providers: [],
})
export class SharedModule {
}
