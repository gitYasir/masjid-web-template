import Image from "next/image";
import css from "./Notice.module.scss";

function Notice() {
  return (
    <div className={css.main}>
      <div className={css.sub}>
        <h2>Notice</h2>
        <div className={css.notice}>
          <h4>Darse Quran</h4>
          <p>Taking place every Friday after Maghrib prayer</p>
        </div>
        <div className={css.eid}>
          <Image
            src={"/WhatsApp Image 2023-06-22 at 10.42.35 AM (1).jpeg"}
            alt=""
            layout="fill"
            className={css.eidPic}
          />
        </div>
      </div>
    </div>
  );
}

export default Notice;
