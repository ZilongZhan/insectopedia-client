import { lazy } from "react";

export const LazyHomePage = lazy(
  () => import("../bug/pages/HomePage/HomePage"),
);

export const LazyReportPage = lazy(
  () => import("../bug/pages/ReportPage/ReportPage"),
);

export const LazyDetailsPage = lazy(
  () => import("../bug/pages/DetailsPage/DetailsPage"),
);

export const LazyEditPage = lazy(
  () => import("../bug/pages/EditPage/EditPage"),
);

export const LazyNotFoundPage = lazy(
  () => import("../ui/pages/NotFoundPage/NotFoundPage"),
);
