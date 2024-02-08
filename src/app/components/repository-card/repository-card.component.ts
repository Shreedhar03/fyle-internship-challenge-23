import { Component } from '@angular/core';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent {
  copied:boolean = false;
  copyToClipboard(){
    navigator.clipboard.writeText('hello angular dev!');
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 1000);
  }
}
