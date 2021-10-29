import { Ensure, equals } from '@serenity-js/assertions';
import { Task } from '@serenity-js/core';
import { GetRequest, LastResponse, Send } from '@serenity-js/rest';
import { ALBUMS_PATH } from '../constants/routes';
import { hasAValidSchema } from '../expectations/hasAValidSchema';
import { AlbumsResponse } from '../@types/api';
import getAlbumsSchema from '../schemas/getAlbums.schema.json';

export const GetAlbums = (): Task =>
    Task.where(`#actor get list of albums`,
        // ChangeApiConfig.setHeader('Authorization', Note.of('token')),
        Send.a(GetRequest.to(ALBUMS_PATH)),
        Ensure.that(LastResponse.status(), equals(200)),
        Ensure.that(LastResponse.body<AlbumsResponse[]>(), hasAValidSchema(getAlbumsSchema))
    )
