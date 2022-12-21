import { render, screen } from "@testing-library/react"
import TestCategory from "./TestCategory"

describe("Category component", () => {
  test("Checks buttons", () => {
    //Act
    render(<TestCategory />)
    //Arrange
    const pickRegion = screen.getByTestId("category-buttons")
    //Assert
    expect(pickRegion).toBeInTheDocument()
  })
})
