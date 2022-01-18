import { render, screen } from "@testing-library/react";
import React from "react";
import { useQuery } from "react-query";
import PostList from "./PostList";
jest.mock("react-query");

// Arrange Act Assertion
describe("PostList", () => {
  it("when DOM is loading then loading text should be displayed", () => {
    // Arrange
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: null,
    });

    // Act
    render(<PostList isDrawerOpen={false} closeDrawer={jest.fn()} />);

    // Assertion
    const loadingText = screen.queryByTestId("loading-container").innerHTML;

    expect(loadingText).toBe("Loading...");
  });
});
