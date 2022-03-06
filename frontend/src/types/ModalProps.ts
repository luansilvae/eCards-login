export interface ModalProps {
  title: string;
  action: string;
  closeModal?: () => void;
  autoHide?: boolean;
}
