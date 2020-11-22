import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RxUnsubscribe} from '../../core/services/rx-unsubscribe';

@Component({
  selector: 'uploading',
  templateUrl: './uploading.component.html',
  styleUrls: ['./uploading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadingComponent extends RxUnsubscribe {

  constructor() {
    super();
  }
}
