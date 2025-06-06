import { mapBugDtoToBug, mapBugsDtoToBugs } from "../dto/mappers";
import type { BugsInfoDto } from "../dto/types";
import type { Bug, BugFormData, BugsInfo } from "../types";
import type { BugResponse, BugsClientStructure, ErrorResponse } from "./types";

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
      throw new Error("Failed to fetch bugs info");
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
        throw new Error(`Input field '${key}' cannot have empty value`);
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
      const { error } = (await response.json()) as ErrorResponse;

      throw new Error(error);
    }

    const { bug: bugDto } = (await response.json()) as BugResponse;

    return mapBugDtoToBug(bugDto);
  }

  public deleteBugById = async (bugId: string): Promise<Bug> => {
    const response = await fetch(`${this.apiUrl}/bugs/${bugId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete bug");
    }

    const { bug: bugDto } = (await response.json()) as BugResponse;

    return mapBugDtoToBug(bugDto);
  };

  public getBugById = async (bugId: string): Promise<Bug> => {
    const response = await fetch(`${this.apiUrl}/bugs/${bugId}`);

    if (!response.ok) {
      throw new Error("Failed to fetch bug");
    }

    const { bug: bugDto } = (await response.json()) as BugResponse;

    return mapBugDtoToBug(bugDto);
  };

  public toggleIsFavorite = async (bugId: string): Promise<Bug> => {
    const response = await fetch(`${this.apiUrl}/bugs/${bugId}`, {
      method: "PATCH",
    });

    if (!response.ok) {
      throw new Error("Failed to patch bug");
    }

    const { bug: bugDto } = (await response.json()) as BugResponse;

    return mapBugDtoToBug(bugDto);
  };

  public editBug = async (
    bugId: string,
    bugFormData: BugFormData,
  ): Promise<Bug> => {
    const response = await fetch(`${this.apiUrl}/bugs/${bugId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bugData: bugFormData }),
    });

    if (!response.ok) {
      throw new Error("Failed to edit bug");
    }

    const { bug: bugDto } = (await response.json()) as BugResponse;

    return mapBugDtoToBug(bugDto);
  };
}

export default BugsClient;
