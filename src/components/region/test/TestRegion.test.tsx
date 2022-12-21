import { render, screen } from "@testing-library/react"
import TestRegion from "./TestRegion"

describe("Region component", () => {
  test("renders region", () => {
    //Act
    render(<TestRegion />)
    //Arrange
    const pickRegion = screen.getByText("GB")
    //Assert
    expect(pickRegion).toBeInTheDocument()
  })
})
