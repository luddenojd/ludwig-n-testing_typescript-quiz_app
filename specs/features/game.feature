Feature: Game

    Scenario: One round
        Given category: Arts & Literature
        When Calling the function to get question
        Then the result should be Which author wrote 'The Tales of Beedle the Bard'?
