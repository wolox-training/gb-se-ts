Feature: Login
    As a user of Naiofy
    I want to log in the application
    so I can use that

# Scenario Outline: Login <type>

# When Carlos log in the application as an <type>
# Then he should get a token and the user id to use that

# Examples:
#   | type |
#   | adminUser |
#   | regularUser |


Scenario: Get Purchased Books

Given Carlos is logged in the application as an adminUser
# When he buys some book of the list of availables
# Then he should the book in his purchased books list
# And he should see the rest of his purchased books

When he requests the purchased books
Then he should see a list with all his purchased books
Then he tests