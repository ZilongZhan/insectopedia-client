import { http } from "msw";
import { server } from "../../../mocks/browser";
import { insectsDtoCollection } from "../../dto/fixtures";
import { mapBugsDtoToBugs } from "../../dto/mappers";
import type { BugDto } from "../../dto/types";
import BugsClient from "../BugsClient";

describe("Given the getBugsInfo method of BugsClient", () => {
  const bugsClient = new BugsClient();

  describe("When it is called", () => {
    test("Then it should return insects 1 to 16 and number 17 as total number of bugs", async () => {
      const expectedBugsTotal = insectsDtoCollection.length;
      const bugsPerPage = 16;
      const expectedBugs = mapBugsDtoToBugs(
        insectsDtoCollection.slice(0, bugsPerPage),
      );

      const { bugs, bugsTotal } = await bugsClient.getBugsInfo();

      expect(bugs).toStrictEqual(expectedBugs);
      expect(bugsTotal).toBe(expectedBugsTotal);
    });
  });

  describe("When it receives -1 invalid page number", () => {
    test("Then it should throw error with message 'Invalid page number: Cannot be less than 1'", async () => {
      const expectedErrorMessage = "Invalid page number: Cannot be less than 1";
      const pageNumber = -1;

      const getPostsInfo = async (): Promise<void> => {
        await bugsClient.getBugsInfo(pageNumber);
      };

      await expect(getPostsInfo).rejects.toThrow(expectedErrorMessage);
    });
  });

  describe("When it receives 99 page number for non existent page", () => {
    const pageNumber = 99;

    test("Then it should not return any bugs", async () => {
      const emptyArray: BugDto[] = [];

      const { bugs } = await bugsClient.getBugsInfo(pageNumber);

      expect(bugs).toStrictEqual(emptyArray);
    });

    test("Then it should return 10 as total number of posts", async () => {
      const expectedBugsTotal = insectsDtoCollection.length;

      const { bugsTotal } = await bugsClient.getBugsInfo(pageNumber);

      expect(bugsTotal).toBe(expectedBugsTotal);
    });
  });

  describe("When the response isn't successful", () => {
    test("Then it should throw error 'Failed to fetch bugs info'", async () => {
      const apiUrl = import.meta.env.VITE_API_URL;
      const expectedErrorMessage = "Failed to fetch bugs info";

      server.use(
        http.get(`${apiUrl}/bugs`, () => new Response(null, { status: 500 })),
      );

      await expect(async () => await bugsClient.getBugsInfo()).rejects.toThrow(
        expectedErrorMessage,
      );
    });
  });
});
