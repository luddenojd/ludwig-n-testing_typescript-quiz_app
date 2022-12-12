export function TestThis(animals: string[]) {
  const shuffledArray = animals.sort((a, b) => 0.5 - Math.random())
}

describe("Our <3 test", () => {
  test("Calling TestThis expected blabla", () => {
    const animals = ["Dog", "Cat", "Monkey", "Lion"]
    const expected = animals

    const actual = TestThis(animals)
    expect(actual).toBe(!expected)
  })
})
