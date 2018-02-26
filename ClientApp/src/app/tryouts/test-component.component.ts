import { Component, OnInit, Output } from '@angular/core';

import { IFetch } from '../shared/fetch';
import { FetchService } from '../shared/fetch.service';
import { UserModel, PageModel, ArticleModel } from '../model/Models';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styles: []
})
export class TestComponentComponent implements OnInit {
  @Output() output: string;
  @Output() tryInterface: string;
  @Output() articles: ArticleModel[];
  fetchService: IFetch;

  ngOnInit(): void {
    // this.output = this.fetchService.getArticles(new PageModel()).toLocaleString();

    this.articles = this.fetchService.getArticles(new PageModel());

  }

  constructor(fetchService: FetchService) {
    this.fetchService = fetchService;
  }

}

interface MyCallback {
  [name: string]: string;
}

interface IMyStrategy {
  name: string;
  getData(): string;
  getOtherData?(): string;
}

class BasicStrategy implements IMyStrategy {
  name: string;
  getData(): string {
    return this.name;
  }
}

class MyClass {
  name: string;

  getData(): string {
    return this.name;
  }

  constructor(name: string) {
    this.name = name;
  }

  getOtherData() {
    return `other data of ${this.name}`;
  }
}

class MyDerived extends MyClass {
  id: string;

  getData(): string {
    return `${super.getData()}, ${this.id}`;
  }

  getOtherData() {
    return `df ${super.getData()}`;
  }
}
