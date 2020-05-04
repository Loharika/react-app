
/*global expect*/
import React from "react";
import { render } from "@testing-library/react";
import SearchByName from './searchField.js';

describe("SearchInout", () => {
  it("should render typed search Input", () => {
    const searchInput = "test-user";
    const { getByPlaceholderText } = render(
      <SearchByName searchInput={searchInput}  />
    );

    const searchInputField = getByPlaceholderText("Search Name");

    expect(searchInputField.value).toBe(searchInput);
  });
});