import React from "react"
import styles from "./style/Modal.module.css"
import PropTypes from 'prop-types'

const Modal = ({ setIsOpen, color, information, commentary, action }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader} style={{backgroundColor:color}}>
            <h5 className={styles.heading}>{information || "Information"}</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            x
          </button>
          <div className={styles.modalContent}>
            {commentary || "Employee Created !"}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.closeModalBtn} onClick={() => setIsOpen(false)}>
                {action || "Close"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Modal.propTypes = {
  setIsOpen: PropTypes.func,
  color: PropTypes.string,
  information: PropTypes.string,
  commentary: PropTypes.string,
  action: PropTypes.string,
}

export default Modal;