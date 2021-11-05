import { Ensure, equals } from '@serenity-js/assertions';
import { Log, Task } from '@serenity-js/core';
import { LastResponse, PostRequest, Send } from '@serenity-js/rest';
import { hasAValidSchema } from '../expectations/hasAValidSchema';
import { REGISTER_PATH } from '../constants/routes';
import { GetRegisterData } from '../questions';
import { RegisterResponse } from '../@types';

export const Register = {
    with: (type: string): Task =>
        Task.where(`#actor register with the credentials to ${REGISTER_PATH}`,
            Send.a(PostRequest.to(REGISTER_PATH).with(GetRegisterData())),
            Log.the(LastResponse.body()),
            Ensure.that(LastResponse.status(), equals(201)),
            Ensure.that(LastResponse.body<RegisterResponse>(), hasAValidSchema(require('../schemas/register.schema.json'))),
        )
};
