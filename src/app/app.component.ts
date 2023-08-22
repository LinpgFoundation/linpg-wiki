import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static readonly HOME_SOURCE: string = 'https://raw.githubusercontent.com/LinpgFoundation/linpg/master/README.md'
  title = 'linpg-wiki';
  readonly WIKI_DOC: Record<string, string> = {
    "about_en": "About",
    "about_cn": "关于",
    "introduction_cn": "简介"
  }
  protected currentSource: string = AppComponent.HOME_SOURCE

  protected setCurrentSource(src: string | null): void {
    this.currentSource = src != null ? `/doc/${src}.md` : AppComponent.HOME_SOURCE
  }
}
