// Import the js file to test
import { checkForText } from "../js/inputChecker";

describe("Testing the checkForText functionality", () => {
  // Provide an empty mock alert function because jsdom does not implement it
  window.alert = jest.fn();
  test("Testing the checkForText() function definition", () => {
    expect(checkForText).toBeDefined();
  });

  test("Testing the handleSubmit() function with input length less than required", () => {
    expect(checkForText('1234')).toBeFalsy();
    expect(window.alert).toHaveBeenCalled();
  });

  test("Testing the handleSubmit() function with input length longer than required", () => {
    expect(checkForText('1234567890abc')).toBeTruthy();
  });
});
