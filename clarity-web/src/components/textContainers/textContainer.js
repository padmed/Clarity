import styles from "./textContainers.module.scss";

const TextContainer = ({ text }) => {
  return (
    <div className={`${styles.parentContainer}`}>
      <div className={`${styles.childContainer}`}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextContainer;
