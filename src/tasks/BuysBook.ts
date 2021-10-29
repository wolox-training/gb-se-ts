import { Ensure, equals } from '@serenity-js/assertions';
import { Question, Task } from '@serenity-js/core';
import { LastResponse, PostRequest, Send } from '@serenity-js/rest';
import { GetApiPathFor, GetRandomID } from '../questions';
import { AlbumsResponse } from '../@types';
import { BUYALBUMS_PATH } from '../constants/routes';
import { ALBUMS } from '../constants/modules';
// import { hasAValidSchema } from '../expectations/hasAValidSchema';
// import {} from '../schemas/buyAlbums.schema.json'
// import { GetApiPath, UrlEncodedExpression } from '../questions';

export const BuysBook = {
    byID: (id: string): Task =>
        Task.where(`#actor buys an album by id`,
            Send.a(PostRequest.to(BUYALBUMS_PATH.replace(/{idAlbum}/,id))),
            Ensure.that(LastResponse.status(), equals(201)),
            // Ensure.that(LastResponse.body<AlbumsResponse[]>(), hasAValidSchema(getAlbumsSchema))
        ),
    fromTheList: (albumsListResponse: Question<AlbumsResponse[]>): Task => 
        Task.where('#actor buys an album from the last response',
            Send.a(PostRequest.to(GetApiPathFor[ALBUMS].toBuyUsing(GetRandomID.from(albumsListResponse)))),
            Ensure.that(LastResponse.status(), equals(201))
        ),

}

