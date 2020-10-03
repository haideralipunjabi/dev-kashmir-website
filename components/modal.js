import styles from "./modal.module.scss";
export default function Modal(props) {
  const { isActive, isSuccess, text,closeModal } = props;
  return (
    <div className={`modal ${isActive && "is-active"}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className={`box ${isSuccess ? styles.success : styles.failed}`}>
          <h1 className="is-size-2 has-text-centered">{text}</h1>
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
    </div>
  );
}
