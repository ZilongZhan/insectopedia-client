import { mapBugsDtoToBugs } from "../dto/mappers";
import type { BugsInfoDto } from "../dto/types";
import type { BugsInfo } from "../types";
import type { BugsClientStructure } from "./types";

class BugsClient implements BugsClientStructure {
  private readonly apiUrl = import.meta.env.VITE_API_URL;

  public async getBugsInfo(pageNumber = 1): Promise<BugsInfo> {
    if (pageNumber < 1) {
      throw new Error("Invalid page number: Cannot be less than 1");
    }

    const response = await fetch(
      `${this.apiUrl}/bugs?pageNumber=${pageNumber}`,
    );

    if (!response.ok) {
      throw new Error("Error fetching bugs info");
    }

    const { bugs: bugsDto, bugsTotal } = (await response.json()) as BugsInfoDto;

    const bugs = mapBugsDtoToBugs(bugsDto);

    return {
      bugs,
      bugsTotal,
    };
  }
}

export default BugsClient;
