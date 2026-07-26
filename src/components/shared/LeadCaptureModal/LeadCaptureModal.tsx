import Modal from "./Modal";
import LeadForm from "./LeadForm";

interface Props {
  open: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

const LeadCaptureModal = ({
  open,
  onClose,
  onSubmitSuccess,
}: Props) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <LeadForm
        onSuccess={onSubmitSuccess}
      />
    </Modal>
  );
};

export default LeadCaptureModal;