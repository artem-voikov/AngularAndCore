import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from '../../model/Models';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {

  @Input() article: ArticleModel;
  constructor() { }

  ngOnInit() {
  }

}
