import { useCallback, useMemo } from "react";
import type { UseBugsStructure } from "../types";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import BugsClient from "../../client/BugsClient";
import {
  addBugActionCreator,
  renderBugsInfoActionCreator,
} from "../../slice/bugSlice";
import type { BugFormData } from "../../types";

const useBugs = (): UseBugsStructure => {
  const bugsInfo = useAppSelector((state) => state.bugsReducer.bugsInfo);
  const dispatch = useAppDispatch();

  const bugsClient = useMemo(() => new BugsClient(), []);

  const renderBugsInfo = useCallback(
    async (pageNumber: number): Promise<void> => {
      const bugsInfo = await bugsClient.getBugsInfo(pageNumber);

      const action = renderBugsInfoActionCreator(bugsInfo);

      dispatch(action);
    },
    [bugsClient, dispatch],
  );

  const addNewReport = async (bugFormData: BugFormData): Promise<void> => {
    const bug = await bugsClient.addBug(bugFormData);

    const action = addBugActionCreator(bug);

    dispatch(action);
  };

  return {
    bugsInfo,
    renderBugsInfo,
    addNewReport,
  };
};

export default useBugs;
