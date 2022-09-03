import css from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={css.mainContainer}>
      <h1>مسجد عثمان أهل السنة والجماعة</h1>
      <h2>Ar-Rehman Trust & Masjid Usman</h2>
    </div>
  );
}

export default NavBar;
