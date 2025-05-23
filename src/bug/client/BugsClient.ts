import { mapBugDtoToBug, mapBugsDtoToBugs } from "../dto/mappers";
import type { BugsInfoDto } from "../dto/types";
import type { Bug, BugFormData, BugsInfo } from "../types";
import type { BugResponse, BugsClientStructure } from "./types";

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

  public async addBug(bugFormData: BugFormData): Promise<Bug> {
    const bugDataValues = Object.entries(bugFormData);

    for (const [key, value] of bugDataValues) {
      if (value === "") {
        throw new Error(`Error: input field '${key}' cannot have empty value`);
      }
    }

    const response = await fetch(`${this.apiUrl}/bugs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bugData: bugFormData }),
    });

    if (!response.ok) {
      throw new Error("Error adding new bug");
    }

    const { bug: bugDto } = (await response.json()) as BugResponse;

    return mapBugDtoToBug(bugDto);
  }

  public deleteBugById = async (bugId: string): Promise<Bug> => {
    const response = await fetch(`${this.apiUrl}/bugs/${bugId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error deleting bug");
    }

    const { bug: bugDto } = (await response.json()) as BugResponse;

    return mapBugDtoToBug(bugDto);
  };

  public getBugById = async (bugId: string): Promise<Bug> => {
    const response = await fetch(`${this.apiUrl}/bugs/${bugId}`);

    if (!response.ok) {
      throw new Error("Error fetching bug");
    }

    const { bug: bugDto } = (await response.json()) as BugResponse;

    return mapBugDtoToBug(bugDto);
  };
}

export default BugsClient;
