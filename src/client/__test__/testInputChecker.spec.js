// Import the js file to test
import { checkForInput } from "../js/inputChecker";

describe("Testing the checkForInput functionality", () => {
  // Provide an empty mock alert function because jsdom does not implement it
  window.alert = jest.fn();
  test("Testing the checkForInput() function definition", () => {
    expect(checkForInput).toBeDefined();
  });

  test("Testing the checkForInput() function with invalid url", () => {
    expect(checkForInput('checkForInput')).toBeFalsy();
    expect(window.alert).toHaveBeenCalled();
  });

  test("Testing the checkForInput() function with valid url", () => {
    expect(checkForInput('https://www.meaningcloud.com/developer/documentation/supported-formats')).toBeTruthy();
  });
});
