import { Ensure, equals } from '@serenity-js/assertions';
import { Log, Note, Question, TakeNote, Task } from '@serenity-js/core';
import {  LastResponse, PostRequest, Send } from '@serenity-js/rest';
import { GetApiPathFor, GetRandomID } from '../questions';
import { AlbumsResponse } from '../@types';
import { BUY_ALBUMS_PATH } from '../constants/routes';
import { ALBUMS } from '../constants/modules';

export const BuysAlbum = {
    byID: (id: string): Task =>
        Task.where(`#actor buys an album by id`,
            Send.a(PostRequest.to(BUY_ALBUMS_PATH.replace(/{idAlbum}/,id))),
            //Ensure.that(LastResponse.status(), equals(201)),
            // Ensure.that(LastResponse.body<AlbumsResponse[]>(), hasAValidSchema(getAlbumsSchema))
        ),
    fromTheList: (albumsListResponse: Question<AlbumsResponse[]>): Task => 
        Task.where('#actor buys an album from the last response',
            TakeNote.of(GetRandomID.from(albumsListResponse)).as('albumId'),
            Send.a(PostRequest.to(GetApiPathFor[ALBUMS].toBuyUsing(Note.of('albumId')))),
            Log.the(LastResponse.body()),
            Ensure.that(LastResponse.status(), equals(201))
        ),
}
