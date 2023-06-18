import css from "./Notice.module.scss";

function Notice() {
  return (
    <div className={css.main}>
      <div className={css.sub}>
        <h2>Notice</h2>
        <div className={css.notice}>
          <h4>Darse Quran</h4>
          <p>Taking place every Friday after prayer</p>
        </div>
        <div className={css.notice}>
          <h4>Eid Adha</h4>
          <p>Date: TBC</p>
          <p>Timings: TBC</p>
        </div>
      </div>
    </div>
  );
}

export default Notice;
