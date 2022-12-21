import { render, screen } from "@testing-library/react"
import TestCountdown30 from "./TestCountdown30"

describe("Category component", () => {
  test("Checks initial state of countdown", () => {
    //Act
    render(<TestCountdown30 />)
    //Arrange
    const checkNumber = screen.getByText("30 sekunder kvar")
    //Assert
    expect(checkNumber).toBeInTheDocument()
  })
})
