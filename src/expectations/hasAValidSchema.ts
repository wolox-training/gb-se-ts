import { Expectation } from '@serenity-js/assertions';
import { Answerable } from '@serenity-js/core';
const validator = require('is-my-json-valid');

export function hasAValidSchema(expected: Answerable<object>): Expectation<object> {
    return Expectation.thatActualShould<object, object>('match with schema', expected)
        .soThat((body, schema) => {
            const validate = validator(schema, {verbose: true});
            return validate(body)
        });
}