import { useState } from "react";
import supabase from "../Config/supabaseConfig";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from "uuid";
import Body from "../Components/Body/Body";

function Upload() {
  const [file, setFile] = useState([]);
  const [formError, setFormError] = useState(null);
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
    router.push("/");
  };

  const handleFileSelected = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" name="image" onChange={handleFileSelected} />
      <button type="submit">Upload image</button>
      {formError && <p>{formError}</p>}
    </form>
  );
}

export default Upload;
