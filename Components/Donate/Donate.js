import Image from "next/image";
import css from "./Donate.module.scss";

function Donate() {
  return (
    <div className={css.donate}>
      <a href="">
        <Image src={"/Donate.png"} alt={"Donate"} height={75} width={125} />
      </a>
    </div>
  );
}

export default Donate;
