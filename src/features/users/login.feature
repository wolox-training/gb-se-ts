Feature: Login
    As a user of Naiofy
    I want to log in the application
    so I can use that

Scenario Outline: Login <type>

When Carlos log in the application as an <type>
Then he should get a token and the user id to use that
When he requests the purchased books
Then he should see a list with all his purchased books
# Then he tests
Examples:
  | type |
  | adminUser |
  | regularUser |