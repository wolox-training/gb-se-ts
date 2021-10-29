import { When, Then, Given } from '@cucumber/cucumber';
import { Actor, Log } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';
import { Ensure, equals, not, property } from '@serenity-js/assertions';
import { LoginResponse } from '../../@types';
import { Login } from '../../tasks';
import World from '../../world';
When('{actor} log in the application as an {}', (actor: Actor, type: string) =>
    actor.attemptsTo(
        Login.as(type)
    ));

Given('{actor} is logged in the application as an {}', (actor: Actor, type: string) =>
    actor.attemptsTo(
        Login.as(type)
    ));

Then ('{pronoun} should get a token and the user id to use that', (actor: Actor) => 
    actor.attemptsTo(
        Ensure.that(
            LastResponse.header('authorization'), not(equals("")),
        ),
        Ensure.that(
            LastResponse.body<LoginResponse>(), property('user_id', not(equals(0))),
        )
    )
)

Then ('{pronoun} tests', (actor: Actor)=>
actor.attemptsTo(
    Log.the(World.data)
)
)