import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {RxUnsubscribe} from '../../core/services/rx-unsubscribe';
import abcjs from 'abcjs';

@Component({
  selector: 'animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimationComponent extends RxUnsubscribe implements OnInit {

  @ViewChild('paper') paperView;
  abc_editor;
  isAnimationWorks: boolean = undefined;

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.abc_editor = new abcjs.Editor(
      'abc', {
        paper_id: 'paper',
        warnings_id: 'warnings',
        abcjsParams: {
          add_classes: true
        }
      }
    );
  }

  animate(): void {
    let params = {showCursor: true};
    let paper = this.paperView.nativeElement;
    abcjs.startAnimation(paper, this.abc_editor.tunes[0], params);
    this.isAnimationWorks = true;
  }

  pause(): void {
    abcjs.pauseAnimation(this.isAnimationWorks);
    this.isAnimationWorks = !this.isAnimationWorks;
  }
}
