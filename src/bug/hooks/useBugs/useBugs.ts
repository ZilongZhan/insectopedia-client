import { useCallback, useMemo } from "react";
import type { UseBugsStructure } from "../types";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import BugsClient from "../../client/BugsClient";
import {
  addBugActionCreator,
  deleteBugActionCreator,
  renderBugsInfoActionCreator,
} from "../../slice/bugSlice";
import type { Bug, BugFormData } from "../../types";
import useApp from "../../../hooks/useApp";

const useBugs = (): UseBugsStructure => {
  const bugsInfo = useAppSelector((state) => state.bugsReducer.bugsInfo);
  const dispatch = useAppDispatch();
  const { setIsLoading } = useApp();

  const bugsClient = useMemo(() => new BugsClient(), []);

  const loadBugsInfo = useCallback(
    async (pageNumber: number): Promise<void> => {
      const timeOut = setTimeout(() => setIsLoading(true), 200);

      try {
        const bugsInfo = await bugsClient.getBugsInfo(pageNumber);

        const action = renderBugsInfoActionCreator(bugsInfo);

        dispatch(action);
      } finally {
        clearTimeout(timeOut);
      }

      setIsLoading(false);
    },
    [bugsClient, dispatch, setIsLoading],
  );

  const addNewReport = async (bugFormData: BugFormData): Promise<void> => {
    const bug = await bugsClient.addBug(bugFormData);

    const action = addBugActionCreator(bug);

    dispatch(action);
  };

  const deleteEntry = async (bugId: string): Promise<void> => {
    const bug = await bugsClient.deleteBugById(bugId);

    const action = deleteBugActionCreator(bug);

    dispatch(action);
  };

  const loadBugDetails = useCallback(
    async (bugId: string): Promise<Bug> => {
      return await bugsClient.getBugById(bugId);
    },
    [bugsClient],
  );

  return {
    bugsInfo,
    loadBugsInfo: loadBugsInfo,
    addNewReport,
    deleteEntry,
    loadBugDetails,
  };
};

export default useBugs;
