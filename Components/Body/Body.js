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
          src={"/Green_Lane_Mosque_sym.jpg"}
          alt={"Masjid Picture"}
          height={200}
          width={150}
          className={css.masjidPic}
        />
        <address>
          102 Masjid Rd
          <br />
          Masjidsville
          <br />
          MA5 9ID
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
