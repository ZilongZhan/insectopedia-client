import { insect1 } from "../../fixtures";
import BugsClient from "../BugsClient";

describe("Given the getBugById method of BugsClient", () => {
  describe("When it receives Insect One's ID", () => {
    test("Then it should return Insect One", async () => {
      const bugsClient = new BugsClient();

      const bug = await bugsClient.getBugById(insect1.id);

      expect(bug).toStrictEqual(insect1);
    });
  });
});
