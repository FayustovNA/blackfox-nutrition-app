import React from 'react';
import styles from './card-progress-antropometry.module.css';
import BasicAnthropometryChart from '../charts/basic-anthropometry-chart';




function CardProgressAntropometry() {

    return (
        <main className={styles.progressitem}>
            <h3 className={styles.subtitle}>ДИНАМИКА АНТРОПОМЕТРИИ</h3>
            <div className={styles.datarow}>
                <div className={styles.rowitem}>
                    <p className={styles.subtitleitem}>ТАЛИЯ</p>
                    <div className={styles.value}>{'-5'} <span className={styles.unit}>см</span></div>
                </div>
                <div className={styles.rowitem}>
                    <p className={styles.subtitleitem}>ЖИВОТ</p>
                    <div className={styles.value}>{'-7'} <span className={styles.unit}>см</span></div>
                </div>
                <div className={styles.rowitem}>
                    <p className={styles.subtitleitem}>БЕДРА</p>
                    <div className={styles.value}>{'-12'} <span className={styles.unit}>см</span></div>
                </div>
                <div className={styles.rowitem}>
                    <p className={styles.subtitleitem}>ГРУДЬ</p>
                    <div className={styles.value}>{'-11'} <span className={styles.unit}>см</span></div>
                </div>
            </div>
            <div className={styles.chart}><BasicAnthropometryChart /></div>
        </main >
    );
}

export default CardProgressAntropometry;