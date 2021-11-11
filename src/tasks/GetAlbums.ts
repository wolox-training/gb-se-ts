import { Ensure, equals } from '@serenity-js/assertions';
import { Note, Task } from '@serenity-js/core';
import { ChangeApiConfig, GetRequest, LastResponse, Send } from '@serenity-js/rest';
import { ALBUMS_PATH } from '../constants/routes';
import {hasAValidSchema} from '../expectations/hasAValidSchema';
import {AlbumsResponse} from '../@types/api';
import getAlbumsSchema from '../schemas/getAlbums.schema.json';

export const GetAlbums = {
    ok: (): Task => Task.where(`#actor get list of albums`,
    ChangeApiConfig.setHeader('Authorization', Note.of('token')),
    Send.a(GetRequest.to(ALBUMS_PATH)),
    Ensure.that(LastResponse.status(), equals(200)),
    Ensure.that(LastResponse.body<AlbumsResponse[]>(), hasAValidSchema(getAlbumsSchema))
    ),
    notLoggedUser: (): Task => Task.where(`#actor get list of albums without being logged`,
    Send.a(GetRequest.to('/users/999/albums')),
    Ensure.that(LastResponse.status(), equals(401)))
}
