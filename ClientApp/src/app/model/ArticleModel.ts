import { InfoModel } from './InfoModel';
import { CommentModel } from './CommentModel';

export class ArticleModel {
    title: string;
    descritpion: string;
    body: string;
    info: InfoModel;
    isHidden: boolean;

    comments: CommentModel[];
}
