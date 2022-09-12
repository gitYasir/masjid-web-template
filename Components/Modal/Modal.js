import Image from "next/image";
import css from "./Modal.module.scss";

function Modal({ onClick }) {
  return (
    <div className={css.modalContainer} onClick={onClick}>
      <Image
        src={"/DonateDetails.jpg"}
        alt={"Donation Details"}
        height={200}
        width={300}
      />
    </div>
  );
}

export default Modal;
