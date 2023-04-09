import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import { useEffect, FC, ReactNode } from "react";

interface IModal {
    onClose?: boolean | string | any;
    children: ReactNode;
}

const Modal: FC<IModal> = ({ children, onClose }) => {
    const { id } = useParams();

    const onModalClose = () => {
        onClose()
    }

    useEffect(() => {
        const closeEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onModalClose()
            }
        }
        window.addEventListener('keydown', closeEsc)
        return () => window.removeEventListener('keydown', closeEsc)
    }, [])


    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onModalClose} />
            <div className={styles.modalwindow}>
                <span className={styles.closeicon}>
                    {/* <CloseIcon type={'primary'} onClick={onModalClose} /> */}
                </span>
                <div className={styles.modal_content}>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')!
    )
}

export default Modal;