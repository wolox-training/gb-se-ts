import { Expectation } from '@serenity-js/assertions';
import { Answerable } from '@serenity-js/core';

const validator = require('is-my-json-valid');

export function hasAValidSchema(expected: Answerable<any>): Expectation<any> {
    return Expectation.thatActualShould<any, any>('match with schema', expected)
        .soThat((body, schema) => {
            const validate = validator(schema, {verbose: true});
            return validate(body)
        });
}