import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RxUnsubscribe} from '../../core/services/rx-unsubscribe';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent extends RxUnsubscribe {

  constructor() {
    super();
  }
}
