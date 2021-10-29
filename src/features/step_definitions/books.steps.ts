import { Then, When } from '@cucumber/cucumber';
import { containItemsWhereEachItem, Ensure, equals, property } from '@serenity-js/assertions';
import { Actor, Note, TakeNote, Transform } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';
import { AlbumsResponse, PurchasedBooksResponse } from '../../@types';
import { BuysBook, GetAlbums, GetPurchasedBooks } from '../../tasks';
import World from '../../world'


When('{pronoun} requests the purchased books', (actor: Actor) =>
 actor.attemptsTo(
        GetPurchasedBooks(),
        TakeNote.of(Transform.the(LastResponse.body<PurchasedBooksResponse>(), body => {
            World.data = {resposePurcB: body};
           return body
        })).as('boyPurcheasedBooks')
       // Transform.the(LastResponse.body<any>(), (body:any) => {World.data = body})
    ));

When('{pronoun} buys some book of the list of availables', (actor: Actor) =>
    actor.attemptsTo(
        GetAlbums(),
        BuysBook.fromTheList(LastResponse.body<AlbumsResponse[]>())
    ));

Then('{pronoun} should see a list with all his purchased books', (actor: Actor) => 
     actor.attemptsTo(
        //Log.the(World.data),
        Ensure.that(            
            LastResponse.body<PurchasedBooksResponse[]>(), 
            containItemsWhereEachItem(
                property('user_id', equals(Note.of<number>('user_id')))
            ),
        )
    )
)