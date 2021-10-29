import { Question } from '@serenity-js/core';
import { AlbumsResponse } from '../@types';

export const GetRandomID = {
    from: (lr: Question<AlbumsResponse[]>): Question<Promise<string>> =>
        Question.about(`ksaldakldakmlsd ${ lr }`, actor =>
            actor.answer(lr).then((array: AlbumsResponse[]) =>{
                // return `/albums/${getRandomItemFrom(array).id}`
                return getRandomItemFrom(array).id.toString();
            }
        ))
}

function getRandomItemFrom(array: AlbumsResponse[]){
    return array[Math.floor(Math.random()*array.length)]
} 
    