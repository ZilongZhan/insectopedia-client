import { http, HttpResponse } from "msw";
import {
  insect1Dto,
  insect2Dto,
  insect3Dto,
  insectsDtoCollection,
} from "../bug/dto/fixtures";
import type { BugDto, BugsInfoDto } from "../bug/dto/types";
import checkUrlExists from "./checkUrlExists/checkUrlExists";
import type { BugFormData } from "../bug/types";

const apiUrl = import.meta.env.VITE_API_URL;

checkUrlExists(apiUrl);

export const handlers = [
  http.get(`${apiUrl}/bugs`, ({ request }) => {
    const url = new URL(request.url);

    const pageNumber = Number(url.searchParams.get("pageNumber"));

    const bugsTotal = insectsDtoCollection.length;

    const pages = [];

    for (
      let bugsCount = 0;
      bugsCount < insectsDtoCollection.length;
      bugsCount += 16
    ) {
      pages.push(insectsDtoCollection.slice(bugsCount, bugsCount + 16));
    }

    const doesPageExist = pageNumber <= pages.length;

    const bugs = doesPageExist ? pages[pageNumber - 1] : [];

    return HttpResponse.json<BugsInfoDto>({
      bugs,
      bugsTotal,
    });
  }),

  http.get(`${apiUrl}/bugs/${insect1Dto._id}`, () => {
    return HttpResponse.json({ bug: insect1Dto });
  }),

  http.get(`${apiUrl}/bugs/${insect2Dto._id}`, () => {
    return HttpResponse.json(null, { status: 404 });
  }),

  http.post(`${apiUrl}/bugs`, async ({ request }) => {
    const invalidBugName = "A";

    const { bugData } = (await request.json()) as {
      bugData: BugFormData;
    };

    if (bugData.name === insect2Dto.commonName) {
      return HttpResponse.json(null, { status: 409 });
    }

    if (bugData.name === invalidBugName) {
      return HttpResponse.json(null, { status: 400 });
    }

    return HttpResponse.json({ bug: insect1Dto }, { status: 200 });
  }),

  http.delete(`${apiUrl}/bugs/${insect1Dto._id}`, () => {
    return HttpResponse.json({ bug: insect1Dto });
  }),

  http.delete(`${apiUrl}/bugs/${insect2Dto._id}`, () => {
    return HttpResponse.json(null, { status: 404 });
  }),

  http.patch(`${apiUrl}/bugs/${insect1Dto._id}`, () => {
    const patchedInsect1Dto: BugDto = {
      ...insect1Dto,
      isFavorite: true,
    };

    return HttpResponse.json({ bug: patchedInsect1Dto });
  }),

  http.patch(`${apiUrl}/bugs/${insect2Dto._id}`, () => {
    const patchedInsect2Dto: BugDto = {
      ...insect2Dto,
      isFavorite: false,
    };

    return HttpResponse.json({ bug: patchedInsect2Dto });
  }),

  http.patch(`${apiUrl}/bugs/${insect3Dto._id}`, () => {
    return HttpResponse.json(null, { status: 404 });
  }),

  http.put(`${apiUrl}/bugs/${insect1Dto._id}`, () => {
    const modifiedInsect1Dto: BugDto = {
      ...insect1Dto,
      commonName: "Insecto Uno",
    };

    return HttpResponse.json({ bug: modifiedInsect1Dto });
  }),

  http.put(`${apiUrl}/bugs/${insect2Dto._id}`, () => {
    return HttpResponse.json(null, { status: 404 });
  }),
];
