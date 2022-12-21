import { loadFeature, defineFeature } from "jest-cucumber"
const feature = loadFeature("./specs/features/game.feature")
const question = "Which author wrote 'The Tales of Beedle the Bard'?"

export function getQuestion(category: string) {
  if (category === "Arts & Literature") {
    return question
  } else {
    return "Error"
  }
}
defineFeature(feature, (test) => {
  let category: string
  let result: string

  test("One round", ({ given, when, then }) => {
    given(/^category: (.*)$/, (arg) => {
      category = arg
    })

    when("Calling the function to get question", () => {
      result = getQuestion(category)
    })

    then(/^the result should be (.*)$/, (expected) => {
      expect(result).toBe(expected)
    })
  })
})
