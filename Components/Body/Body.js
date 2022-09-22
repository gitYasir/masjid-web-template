import css from "./Body.module.scss";
import Image from "next/image";
import Donate from "../Donate/Donate";
import { useState } from "react";
import Modal from "../Modal/Modal";

function Body() {
  const [modal, setModal] = useState(false);
  function changeModal() {
    setModal(!modal);
  }
  return (
    <>
      <div className={css.body}>
        {modal && <Modal onClick={changeModal} />}
        <div className={css.timetableContainer}>
          <a
            href="/prayer-timetable.jpg"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <Image
              className={css.timetablePic}
              src={"/prayer-timetable.jpg"}
              alt={"Prayer Timetable"}
              layout={"fill"}
            />
          </a>
        </div>
        <div className={css.info}>
          <Image
            src={"/masjid-entrance.jpg"}
            alt={"Masjid Picture"}
            height={300}
            width={250}
            className={css.masjidPic}
          />
          <address>
            513 Slade Rd
            <br /> Stockland Green
            <br /> Birmingham
            <br /> B23 7JG
          </address>
          <div className={css.directionCallBtn}>
            <a
              href="https://goo.gl/maps/TGHHDSLYDQL5RVVF7"
              target="_blank"
              rel="noreferrer"
            >
              <button>Directions</button>
            </a>
            <a href="tel:07971482049">
              <button>Call</button>
            </a>
          </div>
        </div>
        <div className={css.donate}>
          <Donate onClick={changeModal} />
        </div>
      </div>
    </>
  );
}

export default Body;
