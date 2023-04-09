import React from 'react';
import { FC } from "react";
import styles from './modal-overlay.module.css';

interface IonClick {
    onClick: () => void;
}

const ModalOverlay: FC<IonClick> = ({ onClick }) => {

    return (
        <div className={styles.overlay} onClick={onClick} />
    );
}

export default ModalOverlay;