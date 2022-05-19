import ContentEditable from "react-contenteditable";
import { useRef, useEffect } from "react";
import styles from "./styles/TextBox.module.css";
function TextBox(props) {
  const text = useRef(props.instanceContent);
  useEffect(() => {
    text.current = props.instanceContent;
  }, [props.instanceContent]);

  const handleChange = (evt) => {
    text.current = evt.target.value;
    props.setHandler(text.current);
  };

  const handleFocus = () => {
    console.log("😵", text.current);
  };
  return (
    <ContentEditable
      className={styles.textBox}
      html={text.current}
      onChange={handleChange}
      onFocus={handleFocus}
    />
  );
}

export default TextBox;
