// Import the js file to test
import { hideResultSection, showResultSection } from "../js/resultDisplayer";

describe("Testing the resultDisplayer functionality", () => {
  // Provide empty alert function because jsdom does not implement it
  window.alert = jest.fn();
  test("Testing the hideResultSection() function definition", () => {
    expect(hideResultSection).toBeDefined();
  });

  test("Testing the showResultSection() function definition", () => {
    expect(showResultSection).toBeDefined();
  });

});
