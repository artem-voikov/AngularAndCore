import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { ArticlesListComponent } from './articles-list.component';
import { ArticlePreviewComponent } from './article-preview.component';
import { ArticleCommentsComponent } from './article-comments.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleComponent, ArticlesListComponent, ArticlePreviewComponent, ArticleCommentsComponent],
  exports: [ArticleComponent, ArticlesListComponent, ArticlePreviewComponent, ArticleCommentsComponent]
})
export class ArticleModule { }
