import type { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import type { Store, UnknownAction } from "@reduxjs/toolkit";
import type { BugState } from "../bug/slice/bugSlice";
import store from "../store/store";

interface AllContextsProviderStructure {
  initialEntries?: string[];
  customStore?: Store<
    {
      bugsReducer: BugState;
    },
    UnknownAction,
    unknown
  >;
}

const AllContextsProvider: React.FC<
  PropsWithChildren<AllContextsProviderStructure>
> = ({ children, initialEntries, customStore }) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>
      <Provider store={customStore ?? store}>{children}</Provider>
    </MemoryRouter>
  );
};

export default AllContextsProvider;
