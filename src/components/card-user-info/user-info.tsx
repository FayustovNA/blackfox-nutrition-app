import React from 'react';
import styles from './user-info.module.css';
import { ReactComponent as SetIcon } from '../../images/setting.svg';
import AvatarImg from '../../images/avatar.jpg'



function UserInfo() {

    return (
        <main className={styles.cardinfo}>
            <SetIcon className={styles.setticon} />
            <div className={styles.userinfo}>
                <img className={styles.useravatar} src={AvatarImg} alt="" />
                <div className={styles.username}>{'Николай Фаюстов'}</div>
                <div className={styles.nick}>{'@nikolayfayustov'}</div>
            </div>
            <div className={styles.generalinfo}>
                <h2 className={styles.title}>ОБЩАЯ ИНФОРМАЦИЯ</h2>
                <p className={styles.text}>Дата старта: <span className={styles.value}>{'08.03.2023'}</span></p>
                <p className={styles.text}>Дней в проекте: <span className={styles.value}>{'10'}</span></p>
                <p className={styles.text}>Текущая неделя: <span className={styles.value}>{'1'}</span></p>
                <p className={styles.text}>Стартовый вес: <span className={styles.value}>{'77.7'} кг</span></p>
                <p className={styles.text}>Целевой вес: <span className={styles.value}>{'70.7'} кг</span></p>
                <p className={styles.text}>Общая динамика: <span className={styles.value}>{'-3.0'} кг</span></p>
            </div>
        </main >
    );
}

export default UserInfo;