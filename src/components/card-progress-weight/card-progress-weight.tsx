import React from 'react';
import styles from './card-progress-weight.module.css';




function CardProgressWeight() {

    return (
        <main className={styles.progressitem}>
            <h3 className={styles.subtitle}>ДИНАМИКА ВЕСА</h3>
            <div className={styles.datarow}>

                <div className={styles.rowitem}>
                    <p className={styles.subtitleitem}>СТАРТОВЫЙ</p>
                    <div className={styles.value}>{'100'} <span className={styles.unit}>кг</span></div>
                </div>
                <div className={styles.rowitem}>
                    <p className={styles.subtitleitem}>ТЕКУЩИЙ</p>
                    <div className={styles.value}>{'100'} <span className={styles.unit}>кг</span></div>
                </div>
                <div className={styles.rowitem}>
                    <p className={styles.subtitleitem}>НЕДЕЛЬНЫЙ</p>
                    <div className={styles.value}>{'-0.7'} <span className={styles.unit}>кг</span></div>
                </div>
                <div className={styles.rowitem}>
                    <p className={styles.subtitleitem}>ОБЩИЙ</p>
                    <div className={styles.value}>{'-3.4'} <span className={styles.unit}>кг</span></div>
                </div>
            </div>
        </main >
    );
}

export default CardProgressWeight;