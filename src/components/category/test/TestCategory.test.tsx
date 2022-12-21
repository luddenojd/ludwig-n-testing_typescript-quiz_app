import { render, screen } from "@testing-library/react"
import TestCategory from "./TestCategory"

describe("Category component", () => {
  test("Checks if categories exists", () => {
    //Act
    render(<TestCategory />)
    //Arrange
    const fetchCategories = screen.getByTestId("category-buttons")
    //Assert
    expect(fetchCategories).toBeInTheDocument()
  })
})
