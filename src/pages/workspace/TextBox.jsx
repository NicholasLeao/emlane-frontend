import ContentEditable from "react-contenteditable";
import { useRef } from "react";
import styles from "./styles/TextBox.module.css";
function TextBox(props) {
  const text = useRef("");

  const handleChange = (evt) => {
    text.current = evt.target.value;
  };

  const handleBlur = () => {
    // console.log(text.current);
    if (text.current !== "") {
      props.setHandler(text.current);
    }
  };
  return (
    <ContentEditable
      className={styles.textBox}
      html={text.current}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
}

export default TextBox;
