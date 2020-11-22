import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RxUnsubscribe} from '../../core/services/rx-unsubscribe';

@Component({
  selector: 'animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationComponent extends RxUnsubscribe {

  constructor() {
    super();
  }
}
