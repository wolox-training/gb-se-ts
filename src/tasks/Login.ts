import { Ensure, equals } from '@serenity-js/assertions';
import { TakeNote, Task, Transform } from '@serenity-js/core';
import { ChangeApiConfig, LastResponse, PostRequest, Send } from '@serenity-js/rest';
import { LOGIN_PATH } from '../constants/routes';
import { LoginResponse } from '../@types';
import { config } from '../config';
import { hasAValidSchema } from '../expectations/hasAValidSchema'

export const Login = {
    as: (type: string): Task =>
        Task.where(`#actor login with the credentials of an ${type} to ${LOGIN_PATH}`,
            Send.a(PostRequest.to(LOGIN_PATH).with(config[type])),
            Ensure.that(LastResponse.status(), equals(200)),
            Ensure.that(LastResponse.body<LoginResponse>(), hasAValidSchema(require('../schemas/login.schema.json'))),
            // TakeNote.of(LastResponse.header('authorization')).as('token'),
            ChangeApiConfig.setHeader('Authorization', LastResponse.header('authorization')),
            TakeNote.of(Transform.the(LastResponse.body<LoginResponse>(), body => body.user_id)).as('user_id')
        )
};
