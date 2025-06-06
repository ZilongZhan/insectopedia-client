import { useCallback, useMemo } from "react";
import type { UseBugsStructure } from "../types";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import BugsClient from "../../client/BugsClient";
import {
  addBugActionCreator,
  deleteBugActionCreator,
  editBugActionCreator,
  renderBugsInfoActionCreator,
  toggleIsFavoriteActionCreator,
} from "../../slice/bugSlice";
import type { Bug, BugFormData } from "../../types";
import useApp from "../../../hooks/useApp";
import { useNavigate } from "react-router";

const useBugs = (): UseBugsStructure => {
  const bugsInfo = useAppSelector((state) => state.bugsReducer.bugsInfo);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setIsLoading, setModalConfig } = useApp();

  const bugsClient = useMemo(() => new BugsClient(), []);

  const getLoadingTimeOut = useCallback(
    (delay: number): NodeJS.Timeout =>
      setTimeout(() => setIsLoading(true), delay),
    [setIsLoading],
  );

  const loadBugsInfo = useCallback(
    async (pageNumber: number): Promise<void> => {
      const timeOut = getLoadingTimeOut(200);

      try {
        const bugsInfo = await bugsClient.getBugsInfo(pageNumber);

        const action = renderBugsInfoActionCreator(bugsInfo);

        dispatch(action);
      } catch {
        const errorMessage = "Failed to obtain bugs";

        setModalConfig({
          showModal: true,
          isErrorModal: true,
          message: errorMessage,
        });
      } finally {
        clearTimeout(timeOut);

        setIsLoading(false);
      }
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
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send report";

      setModalConfig({
        showModal: true,
        isErrorModal: true,
        message: errorMessage,
      });

      return;
    }

    navigate("/home");
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

      return;
    }

    navigate("/home");
  };

  const loadBugDetails = useCallback(
    async (bugId: string): Promise<Bug | null> => {
      const timeout = getLoadingTimeOut(200);
      let bug: Bug;

      try {
        bug = await bugsClient.getBugById(bugId);

        return bug;
      } catch {
        const errorMessage = "Failed to obtain bug details";

        setModalConfig({
          isErrorModal: true,
          message: errorMessage,
          showModal: true,
        });
      } finally {
        clearTimeout(timeout);

        setIsLoading(false);
      }

      return null;
    },
    [bugsClient, setIsLoading, getLoadingTimeOut, setModalConfig],
  );

  const toggleIsFavorite = async (bugId: string): Promise<Bug | null> => {
    let bug: Bug;

    try {
      bug = await bugsClient.toggleIsFavorite(bugId);

      const action = toggleIsFavoriteActionCreator(bug);

      dispatch(action);

      return bug;
    } catch {
      const errorMessage = "Failed to update bug's favorite status";

      setModalConfig({
        isErrorModal: true,
        message: errorMessage,
        showModal: true,
      });
    }

    return null;
  };

  const updateReport = async (
    bugId: string,
    bugFormData: BugFormData,
  ): Promise<void> => {
    try {
      const bug = await bugsClient.editBug(bugId, bugFormData);
      const modalMessage = "Report was updated successfully";

      setModalConfig({
        isErrorModal: false,
        showModal: true,
        message: modalMessage,
      });

      const action = editBugActionCreator(bug);

      dispatch(action);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to send report";

      setModalConfig({
        showModal: true,
        isErrorModal: true,
        message: errorMessage,
      });

      return;
    }

    navigate("/home");
  };

  return {
    bugsInfo,
    loadBugsInfo,
    addNewReport,
    deleteEntry,
    loadBugDetails,
    toggleIsFavorite,
    updateReport,
  };
};

export default useBugs;
