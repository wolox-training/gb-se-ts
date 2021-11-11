Feature: Purchease albums
    As a user of the application
    I want to purchease albums

Scenario: Purchease album without session
    When Carlos buys some album without being logged
    Then he should get a wrong status code


Scenario: Get Purchased albums
    Given Carlos is logged in the application as an adminUser
    When he buys some album of the list of availables
    Then he should see a list with all his purchased album
    #And he should see the rest of his purchased books