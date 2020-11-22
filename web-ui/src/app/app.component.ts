import { Component } from '@angular/core';
import {RestService} from './core/services/rest-service.service';
import {RxUnsubscribe} from './core/services/rx-unsubscribe';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends RxUnsubscribe {

  imageSrc: string;
  private selectedFile: File;

  constructor(private restService: RestService) {
    super();
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

  uploadImage(): void {
    this.restService.sendImage(this.selectedFile)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
