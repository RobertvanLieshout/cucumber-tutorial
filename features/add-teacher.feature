Feature: Administrator can add a teacher to the school
As an administrator
I want to add a teacher to the school
So that they can enter exam results by themselves

Scenario: Add a new teacher
Given I have no teachers
When I add "Mr. John Doe" as a teacher
Then the school has 1 teacher
