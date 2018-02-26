import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArticleModule } from './components/article/article.module';
import { SharedModule } from './shared/shared.module';
import { ArticleComponent } from './components/article/article.component';
import { TestComponentComponent } from './tryouts/test-component.component';
import { FetchService } from './shared/fetch.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
  ],
  imports: [
    BrowserModule,
    ArticleModule,
    SharedModule,
  ],
  providers: [ FetchService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
