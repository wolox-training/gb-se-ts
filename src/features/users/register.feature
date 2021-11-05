Feature: Register new user
    As a new user
    I want register myself in the platform
@only
Scenario: Successfull new user
When Jose sends a register request with correct data
#Then he should get a succesfull request response