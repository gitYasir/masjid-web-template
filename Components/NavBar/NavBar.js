import css from "./NavBar.module.scss";

function NavBar() {
  return (
    <div className={css.mainContainer}>
      <h3>اسم المسجد</h3>
      <h4>Masjid Name</h4>
    </div>
  );
}

export default NavBar;
