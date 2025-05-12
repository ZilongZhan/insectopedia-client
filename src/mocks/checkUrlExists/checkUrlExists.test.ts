import checkUrlExists from "./checkUrlExists";

describe("Given the checkUrlExists function", () => {
  describe("When it receives 'localhost:3001'", () => {
    test("Then it should not throw error", () => {
      const apiUrl = "localhost:3001";

      expect(() => checkUrlExists(apiUrl)).not.toThrow();
    });
  });

  describe("When it receives an undefined URL", () => {
    test("Then it should throw error 'URL not found for the test'", () => {
      const apiUrl = undefined;

      expect(() => checkUrlExists(apiUrl)).toThrow(
        "URL not found for the test",
      );
    });
  });
});
