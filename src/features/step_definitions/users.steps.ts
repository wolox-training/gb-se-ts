import { When } from '@cucumber/cucumber';
import { Actor, Log } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';
// import { LastResponse } from '@serenity-js/rest';
// import { Ensure, equals, not, property } from '@serenity-js/assertions';
// import { LoginResponse } from '../../@types';
import { Register } from '../../tasks';

//Jose sends a register request with correct data
When('{actor} sends a register request with correct data', (actor: Actor) => 
    actor.attemptsTo(
        //TODO: finish
        Register.with('la'),
        Log.the(LastResponse.body())
)
)