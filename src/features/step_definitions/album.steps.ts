import { Then, When } from '@cucumber/cucumber';
import { containAtLeastOneItemThat, containItemsWhereEachItem, Ensure, equals, property } from '@serenity-js/assertions';
import { Actor, Note, TakeNote, Transform } from '@serenity-js/core';
import { LastResponse } from '@serenity-js/rest';
import { AlbumsResponse, PurchasedAlbumsResponse } from '../../@types';
import { BuysAlbum, GetAlbums, GetPurchasedAlbums } from '../../tasks';

When('{pronoun} requests the purchased albums', (actor: Actor) =>
 actor.attemptsTo(
        GetPurchasedAlbums(),
        TakeNote.of(Transform.the(LastResponse.body<PurchasedAlbumsResponse>(), body => {
           return body
        })).as('boyPurcheasedAlbums')
       // Transform.the(LastResponse.body<any>(), (body:any) => {World.data = body})
    ));

When('{pronoun} buys some album of the list of availables', (actor: Actor) =>
    actor.attemptsTo(
        GetAlbums.ok(),
        BuysAlbum.fromTheList(LastResponse.body<AlbumsResponse[]>())
    ));

When('{actor} buys some album without being logged', (actor: Actor) =>
    actor.attemptsTo(
        GetAlbums.notLoggedUser(),
        BuysAlbum.byID("100")
    ));


Then('{pronoun} should see a list with all his purchased albums', (actor: Actor) => 
     actor.attemptsTo(
        //Log.the(World.data),
        Ensure.that(            
            LastResponse.body<PurchasedAlbumsResponse[]>(), 
            containItemsWhereEachItem(
                property('user_id', equals(Note.of<number>('user_id')))
            )
        ),
        Ensure.that(
            LastResponse.body<PurchasedAlbumsResponse[]>(),
            containAtLeastOneItemThat(
                property('album', property('id', equals(Note.of<number>('albumId'))))
            )
        )
    )
)


Then('{pronoun} should get a wrong status code', (actor: Actor) =>
actor.attemptsTo(
    Ensure.that(LastResponse.status(), equals(401))
)
)