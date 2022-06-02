import { filterProps } from "framer-motion";
import styled from "styled-components";
import FloatingButton from "../../components/FloatingButton";
import { useState, useCallback, useEffect, useRef } from "react";
import { api } from "../../api/api";

function FloatingButtonUpload(props) {
  const hiddenFileInput = useRef(null);
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  //    Upload image ======================================================
  const handleChange = (e) => {
    setImg(e.target.files[0]);
  };

  useEffect(() => console.log("🐠 NEW IMAGE", img), [img]);

  const uploadImage = useCallback(
    async (e) => {
      try {
        const uploadData = new FormData();
        uploadData.append("picture", img);
        const response = await api.post("/upload", uploadData);
        setImgUrl(response.data.url);
      } catch (err) {}
    },
    [img]
  );

  useEffect(() => {
    if (!img) return;
    uploadImage();
    setImg("");
  }, [img, uploadImage]);

  useEffect(() => console.log("😍 NEW IMAGE URL", imgUrl), [imgUrl]);

  //    Create new instance  ==============================================
  const addNewImageInstanceHandler = useCallback(async () => {
    try {
      // Create new instance
      const response = await api.post("/instances", {
        type: "picture",
        asset: imgUrl,
        owner: props.currentLaneId,
      });
      // Check for response status
      if (!response.status === 201) {
        throw new Error("Error creating instance!");
      }
      // Add new children to engram
      await api.post(`/engrams/children/${props.currentEngramId}`, {
        children: response.data.data.instance._id,
      });
      // Cleanup
      setImgUrl("")
      // Update
      props.forceUpdate();
    } catch (err) {}
  }, [imgUrl, props]);

  useEffect(() => {
    if (!imgUrl.length) return;
    addNewImageInstanceHandler();
    console.log("😚 ADD NEW CHILDREN")
  }, [imgUrl, addNewImageInstanceHandler]);

  return (
    <StyledContainer>
      <FloatingButton
        onClickHandler={() => hiddenFileInput.current.click()}
        img={props.img}
      />
      <input
        className="input-field"
        type="file"
        id="formImg"
        label="picture"
        name="url"
        ref={hiddenFileInput}
        onChange={handleChange}
      />
    </StyledContainer>
  );
}

export default FloatingButtonUpload;

const StyledContainer = styled.div`
  & .input-field {
    display: none;
  }
`;
