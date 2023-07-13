import React from 'react';
import styles from './card-progress-micros.module.css';
import MarkersChart from '../charts/bar-with-markers';



function CardProgressMicros() {

    return (
        <main className={styles.progressitem}>
            <h3 className={styles.subtitle}>ДЕТАЛЬНАЯ АНАЛИТИКА РАЦИОНА</h3>
            <div className={styles.filterpanel}>
                <p className={styles.paneltitle}>Сопоставление фактических и плановых норм</p>
                <div className={styles.btns}>
                    <button className={styles.filterbtn}>День</button>
                    <button className={styles.filterbtn}>Неделя</button>
                    <button className={styles.filterbtn}>Месяц</button>
                </div>
            </div>
            <div className={styles.chartbox}>
                <MarkersChart />
            </div>
        </main >
    );
}

export default CardProgressMicros;