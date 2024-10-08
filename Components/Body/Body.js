import css from "./Body.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";
import Madrasa from "../Madrasa/Madrasa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import supabase from "../../Config/supabaseConfig";

function Body() {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    async function getName() {
      const x = await supabase.storage
        .from("prayerTimes")
        .list("", {
          limit: 1,
          offset: 0,
          sortBy: { column: "created_at", order: "desc" },
        })
        .then((res) => {
          let x = res.data[0].name;
          const urlWithSignedToken = supabase.storage
            .from("prayerTimes")
            .getPublicUrl(x);

          return urlWithSignedToken;
        })
        .then((t) => {
          setImageURL(t.data.publicUrl);
        });
    }

    getName();
  }, []);
  const imageLoader = ({ src, width, quality }) => {
    return `${src}`;
  };
  return (
    <>
      <div className={css.body}>
        <div className={css.container}>
          <div className={css.timetableContainer}>
            <a href={imageURL} target="_blank" rel="noopener noreferrer">
              <Image
                className={css.timetablePic}
                src={imageURL}
                alt={"Prayer Timetable"}
                layout={"fill"}
                loading="lazy"
                loader={imageLoader}
              />
            </a>
          </div>
          <a
            href={imageURL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Prayer Timetable"
            download
          >
            <div className={css.download}>
              <div>
                <FontAwesomeIcon
                  icon={faDownload}
                  style={{ width: "30px", height: "30px" }}
                  className={css.downloadIcon}
                />
              </div>
              <label>Download</label>
            </div>
          </a>
        </div>

        <div className={css.info}>
          <div className={css.imageAndNotice}>
            <div className={css.masjidPic}>
              <Image
                src={"/masjid-entrance.jpg"}
                alt={"Masjid Picture"}
                height={300}
                width={250}
                loading="lazy"
              />
            </div>
          </div>
          <div className={css.madrasa}>
            <Madrasa />
            <div className={css.directionBtn}>
              <address>
                513 Slade Rd
                <br /> Stockland Green
                <br /> Birmingham
                <br /> B23 7JG
              </address>
              <a
                href="https://goo.gl/maps/TGHHDSLYDQL5RVVF7"
                target="_blank"
                rel="noreferrer"
              >
                <button className={css.directions}>Directions</button>
              </a>
            </div>
          </div>
          <div className={css.directionCallBtn}>
            <div style={{ width: "100%" }}>
              <div>
                <label style={{ paddingRight: "5px" }}>07790186669</label>
                <a href="tel:07790186669">
                  <button className={css.contact}>Contact</button>
                </a>
              </div>
              <div style={{}}>
                <label style={{ paddingRight: "5px" }}>07971482049</label>
                <a href="tel:07971482049">
                  <button className={css.contact}>Contact</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
