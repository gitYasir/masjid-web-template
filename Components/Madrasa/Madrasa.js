import css from "./Madrasa.module.scss";

function Madrasa() {
  return (
    <div className={css.container}>
      <h2>Madrasa</h2>
      <p>
        There is a madrasa available Monday to Friday, 5-6:30pm for 4 to 17 year
        olds. The students are taught the Quran and tarbiya.
      </p>
    </div>
  );
}

export default Madrasa;
