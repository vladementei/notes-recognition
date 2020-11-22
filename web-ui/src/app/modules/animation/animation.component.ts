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

  @ViewChild('musicSheet') musicSheet;
  musicEditor;
  isAnimationWorks: boolean = undefined;
  music: string;

  constructor(private cdr: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.music = 'G4 c4 d2 d2 d2 B2 A4 A4 A4 d4 |\n' +
      ' d2 e2 e2 c2 B4 G4 B4 e4 e2 f2 e2 e2 |\n' +
      ' B4 G2 G2 d2 B4 c4 |\n' +
      ' c4 c2 d2 c2 B2 A4 A4 A4 d4 |\n' +
      ' d2 e2 d2 c2 B2 G2 B2 e4 e2 f2 e2 d2 |\n' +
      ' d4 A4 G2 G2 A4 d2 B4 c4 |';
    this.cdr.detectChanges();

    this.musicEditor = new abcjs.Editor(
      'abc', {
        paper_id: 'musicSheet',
        warnings_id: 'warnings',
        abcjsParams: {
          add_classes: true
        }
      }
    );
  }

  animate(): void {
    const params = {showCursor: true};
    const sheet = this.musicSheet.nativeElement;
    abcjs.startAnimation(sheet, this.musicEditor.tunes[0], params);
    this.isAnimationWorks = true;
  }

  pause(): void {
    abcjs.pauseAnimation(this.isAnimationWorks);
    this.isAnimationWorks = !this.isAnimationWorks;
  }
}
