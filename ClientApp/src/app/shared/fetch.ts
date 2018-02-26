import { ArticleModel } from '../model/ArticleModel';
import { PageModel } from '../model/PageModel';
import { UserModel } from '../model/UserModel';
import { CommentModel } from '../model/Models';


export interface IFetch {
    getArticle(id: string): ArticleModel;
    getArticles(page: PageModel): ArticleModel[];
    getUsers(page: PageModel): UserModel[];
    getComments(page: PageModel): CommentModel[];
}
