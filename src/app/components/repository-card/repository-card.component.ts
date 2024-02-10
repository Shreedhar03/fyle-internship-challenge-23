import { Component, Input } from '@angular/core';
import { Repository } from 'src/models/repository.model';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss']
})
export class RepositoryCardComponent {

  @Input() repo: Repository | undefined;
  languages: string[] = [];
  ngonInit() {
    this.languages = Array.from(Object.keys(this.repo?.languages || {}));
    console.log(this.languages)
  }

  copied: boolean = false;
  copyToClipboard() {
    navigator.clipboard.writeText(this.repo?.clone_url || '');
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 1000);
  }
}
