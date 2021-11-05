import { Note, Question } from '@serenity-js/core';
import {ALBUMS_PATH } from '../constants/routes';

/**
 * @desc
 *  Serenity/JS Questions can be parametrised with other Questions
 *
 * @see https://serenity-js.org/handbook/design/questions.html
 * @see https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html
 */
export const GetPurchasedAlbumsPath: Question<Promise<string>> =
    Question.about(`purchased albums routes by users`, actor =>
        actor.answer(Note.of('user_id')).then((user_id: string) => ALBUMS_PATH.replace(/{user_id}/,user_id)))

