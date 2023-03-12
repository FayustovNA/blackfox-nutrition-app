import React from 'react';
import styles from './week-tasks.module.css';
import { ReactComponent as Task } from '../../images/task.svg';





function WeekTasks() {

    return (
        <main className={styles.cardweektasks}>
            <h1 className={styles.title}><span className={styles.icon}><Task /></span>Задания на неделю</h1>
            <div className={styles.message}>
                <div className={styles.message_box}>
                    <div className={styles.message_text}>
                        <p className={styles.necessarily}>Обязательно</p>
                        <p className={styles.text_box}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
                        }</p>
                    </div>
                    <div className={styles.message_text}>
                        <p className={styles.recommended}>Рекомендуем</p>
                        <p className={styles.text_box}>{'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'}</p>
                    </div>
                </div>
            </div>


        </main >
    );
}

export default WeekTasks;