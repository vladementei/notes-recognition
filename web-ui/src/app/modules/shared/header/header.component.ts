import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RxUnsubscribe} from '../../../core/services/rx-unsubscribe';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent extends RxUnsubscribe {

  constructor() {
    super();
  }
}
