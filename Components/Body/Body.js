import css from "./Body.module.scss";
import Image from "next/image";

function Body() {
  return (
    <div className={css.body}>
      <div className={css.timetableContainer}>
        <Image
          className={css.timetablePic}
          src={"/prayer-timetable.jpg"}
          alt={"Prayer Timetable"}
          layout={"fill"}
        />
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
            href="https://goo.gl/maps/r1nnDo8TFBpFJX9cA"
            target="_blank"
            rel="noreferrer"
          >
            <button>Directions</button>
          </a>
          <a href="tel:11111">
            <button>Call</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Body;
