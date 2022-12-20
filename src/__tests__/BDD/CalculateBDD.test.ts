import { loadFeature, defineFeature } from "jest-cucumber"
import { categories } from "../../components/main/Main"

const feature = loadFeature("./specs/features/calc.feature")
console.log(categories)
defineFeature(feature, (test) => {
  test("Add two numbers", ({ given, when, then }) => {
    given(/^x: (\d+) and y: (\d+)$/, (arg0, arg1) => {})

    when("Calling the function to add two numbers", () => {})

    then(/^the result should be (\d+)$/, (expected) => {})
  })
})
