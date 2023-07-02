import React from 'react';
import styles from './card-coach-info.module.css';
import AvatarImg from '../../images/avatar.jpg'



function CoachInfo() {

    return (
        <main className={styles.cardinfo}>
            <div className={styles.userinfo}>
                <div className={styles.avatarbox}>
                    <img className={styles.useravatar} src={AvatarImg} alt="" />
                </div>
                <div className={styles.username}>{'Николай Фаюстов'}</div>
                <div className={styles.nick}>{'@nikolayfayustov'}</div>
            </div>
        </main >
    );
}

export default CoachInfo;