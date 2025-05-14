import { http, HttpResponse } from "msw";
import { insectsDtoCollection } from "../bug/dto/fixtures";
import type { BugsInfoDto } from "../bug/dto/types";
import checkUrlExists from "./checkUrlExists/checkUrlExists";

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
];
