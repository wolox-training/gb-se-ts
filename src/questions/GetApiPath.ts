import { Note, Question } from '@serenity-js/core';
import { ALBUMS, USERS } from '../constants/modules';
/**
 * @desc
 *  Serenity/JS Questions can be parametrised with other Questions
 *
 * @see https://serenity-js.org/handbook/design/questions.html
 * @see https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html
 */

interface Dic {
    [key: string]: any
}

export const GetApiPath = {
    for: (urlEncodedExpression: Question<string>): Question<Promise<string>> =>
        Question.about(`/v4?expr endpoint for ${ urlEncodedExpression }`, actor =>
            actor.answer(urlEncodedExpression).then(expression =>
                `/v4?expr=${ expression }`
            ))
};

export const GetApiPathFor: Dic = {
    [ALBUMS]: {
        toBuyUsing: (randomId: Question<Promise<string>>): Question<Promise<string>> =>
            Question.about(`albums endpoint `, actor =>
                actor.answer(randomId).then(id => `/albums/${id}`))
    },
    [USERS]: {
        toListPurchased: (): Question<Promise<string>> =>
            Question.about(`purchased books routes by users`, actor =>
                actor.answer(Note.of('user_id')).then((user_id) => `/users/${user_id}/albums`))
    }
        // toPurchaseBy,
        // toGetPhotos,
        // toList    
    };

    //const getNoteString = (note: string, actor: Actor):any => actor.answer(Note.of(note)).then((user_id: string) => `/users/${user_id}/albums`);
