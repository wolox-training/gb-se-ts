import { Ensure, equals } from '@serenity-js/assertions';
import { Log, Task } from '@serenity-js/core';
import { GetRequest, LastResponse, Send } from '@serenity-js/rest';
import { USERS } from '../constants/modules';
// import { GetPurchasedBooksPath } from '../questions';
import { GetApiPathFor } from '../questions';

    
export const GetPurchasedBooks = (): Task =>
    Task.where(`#actor get purchased books from ${GetApiPathFor[USERS].toListPurchased()}`,
        // ChangeApiConfig.setHeader('Authorization', Note.of('token')),
        Log.the(GetApiPathFor[USERS].toListPurchased()),
        Send.a(GetRequest.to(GetApiPathFor[USERS].toListPurchased())),
        Ensure.that(LastResponse.status(), equals(200))
    )
