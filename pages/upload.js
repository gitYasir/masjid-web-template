import { useState } from "react";
import supabase from "../Config/supabaseConfig";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import css from "../styles/upload.module.scss";
import Image from "next/image";

function Upload() {
  const [file, setFile] = useState([]);
  const [formError, setFormError] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filename = `${uuidv4()}`;

    if (!file) {
      setFormError("Please fill in all required fields.");
      return;
    }
    const { data, error } = await supabase.storage
      .from("prayerTimes")
      .upload(filename, file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      setFormError(error.message);
    }

    if (data) {
      setFormError(null);
    }
    // router.push("/");
  };
  console.log(file);
  const handleFileSelected = (e) => {
    const selectedFile = e.target.files[0];
    setFile(e.target.files[0]);
    const reader = new FileReader();

    reader.onload = () => {
      const dataURL = reader.result;
      setPreviewImage(dataURL);
    };

    reader.readAsDataURL(selectedFile);
  };

  const X = () => {
    return (
      <>
        {previewImage ? (
          <Image src={previewImage} alt="preview" width={200} height={250} />
        ) : (
          <p>No file selected</p>
        )}
        {file && <p>{file.name}</p>}
        <label htmlFor="file-upload" className={css.label}>
          Choose Prayer Timetable
        </label>
        <input
          id="file-upload"
          type="file"
          style={{ display: "none" }}
          onChange={handleFileSelected}
        />
      </>
    );
  };
  return (
    <form onSubmit={handleSubmit} className={css.main}>
      <X />
      <button type="submit" className={css.btn}>
        Upload Image
      </button>
      {formError && <p>{formError}</p>}
    </form>
  );
}

export default Upload;
