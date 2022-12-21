import { render, screen } from "@testing-library/react"
import TestDifficulty from "./TestDifficulty"

describe("Difficulty component", () => {
  test("renders difficulty", () => {
    //Act
    render(<TestDifficulty />)
    //Arrange
    const pickDifficulty = screen.getByText("Easy")
    //Assert
    expect(pickDifficulty).toBeInTheDocument()
  })
})
