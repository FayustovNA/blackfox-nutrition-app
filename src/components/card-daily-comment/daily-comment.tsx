import React from 'react';
import styles from './daily-comment.module.css';
import { ReactComponent as Comment } from '../../images/comment.svg';





function DailyComment() {

    return (
        <main className={styles.carddailycomment}>
            <h1 className={styles.title}><span className={styles.icon}><Comment /></span>Комментарии к текущему дню</h1>
            <div className={styles.message}>
                <div className={styles.message_box}>
                    <div className={styles.message_text}>
                        <p className={styles.text_box}>{'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'}</p>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default DailyComment;