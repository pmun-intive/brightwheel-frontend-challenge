import { Modal, ModalHeader } from "@kiwicom/orbit-components";
import { Dispatch, SetStateAction } from "react";

interface ModalType {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  imageSrc: string;
}

/**
 * @component
 * @name DataTableModal
 * @description Modal components responsible to show image from company data.
 * @namespace modules mainPage/modal
 * @param {Dispatch<SetStateAction<boolean>>} setShowModal - Changes the modal state value controlling open and close from the modal
 * @param {string} imageSrc - Source of the image that will be rendered

 */
const DataTableModal: React.FC<ModalType> = ({ setShowModal, imageSrc }) => {
  return (
    <Modal
      onClose={() => {
        setShowModal(false);
      }}
    >
      <ModalHeader title="Company Image" />
      <img
        src={imageSrc}
        alt="image defined for the company"
        width={300}
        height={300}
      />
    </Modal>
  );
};

export default DataTableModal;
