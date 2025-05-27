import type { ModalConfig } from "../slice/types";

export interface UseAppStructure {
  modalConfig: ModalConfig;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  setModalConfig: (modalConfig: ModalConfig) => void;
}
