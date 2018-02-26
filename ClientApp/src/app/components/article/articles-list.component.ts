import { Component, OnInit, Output } from '@angular/core';
import { UserModel, PageModel, ArticleModel } from '../../model/Models';
import { IFetch } from '../../shared/fetch';
import { FetchService } from '../../shared/fetch.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styles: []
})
export class ArticlesListComponent implements OnInit {

  fetchService: IFetch;
  @Output() articles: ArticleModel[];

  constructor(fetchService: FetchService) {
    this.fetchService = fetchService;
  }

  ngOnInit() {
    this.articles = this.fetchService.getArticles(new PageModel());
  }

}
