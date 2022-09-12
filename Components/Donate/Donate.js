import Image from "next/image";
import css from "./Donate.module.scss";

function Donate({ onClick }) {
  return (
    <div className={css.donate} onClick={onClick}>
      <Image src={"/Donate.png"} alt={"Donate"} height={75} width={125} />
    </div>
  );
}

export default Donate;
