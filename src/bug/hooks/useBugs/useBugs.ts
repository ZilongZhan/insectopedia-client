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
  const { setIsLoading, setModalConfig } = useApp();

  const bugsClient = useMemo(() => new BugsClient(), []);

  const getLoadingTimeOut = useCallback(
    (): NodeJS.Timeout => setTimeout(() => setIsLoading(true), 200),
    [setIsLoading],
  );

  const loadBugsInfo = useCallback(
    async (pageNumber: number): Promise<void> => {
      const timeOut = getLoadingTimeOut();

      try {
        const bugsInfo = await bugsClient.getBugsInfo(pageNumber);

        const action = renderBugsInfoActionCreator(bugsInfo);

        dispatch(action);
      } catch {
        const errorMessage = "Failed to fetch bugs";

        setModalConfig({
          showModal: true,
          isErrorModal: true,
          message: errorMessage,
        });
      } finally {
        clearTimeout(timeOut);
      }

      setIsLoading(false);
    },
    [bugsClient, dispatch, setModalConfig, getLoadingTimeOut, setIsLoading],
  );

  const addNewReport = async (bugFormData: BugFormData): Promise<void> => {
    try {
      const bug = await bugsClient.addBug(bugFormData);
      const modalMessage = "Report was sent successfully";

      setModalConfig({
        isErrorModal: false,
        showModal: true,
        message: modalMessage,
      });

      const action = addBugActionCreator(bug);

      dispatch(action);
    } catch {
      const errorMessage = "Failed to send report";

      setModalConfig({
        showModal: true,
        isErrorModal: true,
        message: errorMessage,
      });
    }
  };

  const deleteEntry = async (bugId: string): Promise<void> => {
    try {
      const bug = await bugsClient.deleteBugById(bugId);
      const modalMessage = "Entry deleted successfully";

      setModalConfig({
        isErrorModal: false,
        message: modalMessage,
        showModal: true,
      });

      const action = deleteBugActionCreator(bug);

      dispatch(action);
    } catch {
      const modalMessage = "Failed to delete entry";

      setModalConfig({
        isErrorModal: true,
        showModal: true,
        message: modalMessage,
      });
    }
  };

  const loadBugDetails = useCallback(
    async (bugId: string): Promise<Bug> => {
      const timeout = getLoadingTimeOut();
      let bug: Bug;

      try {
        bug = await bugsClient.getBugById(bugId);
      } finally {
        clearTimeout(timeout);
      }

      setIsLoading(false);
      return bug;
    },
    [bugsClient, setIsLoading, getLoadingTimeOut],
  );

  return {
    bugsInfo,
    loadBugsInfo,
    addNewReport,
    deleteEntry,
    loadBugDetails,
  };
};

export default useBugs;
