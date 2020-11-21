import { Component } from '@angular/core';
import {RestService} from './core/services/rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  imageSrc: string;
  selectedFile: File;

  constructor(private restService: RestService) {
  }

  previewFile(file: File): void {
    if (file) {
      const reader = new FileReader();
      reader.onload = (() => {
        this.imageSrc = reader.result.toString();
      });
      reader.readAsDataURL(file);
    }
    this.selectedFile = file;
  }

  uploadImage() {
    this.restService.sendImage(this.selectedFile).subscribe();
  }
}
