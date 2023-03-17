import React from 'react';
import styles from './card-progress-macros.module.css';




function CardProgressMacros() {

    return (
        <main className={styles.progressitem}>
            <h3 className={styles.subtitle}>БАЗОВАЯ АНАЛИТИКА РАЦИОНА</h3>
            <div className={styles.filterpanel}>
                <p className={styles.paneltitle}>Сопоставление фактических и плановых норм</p>
                <button className={styles.filterbtn}>Неделя</button>
                <button className={styles.filterbtn}>Месяц</button>
                <button className={styles.filterbtn}>Год</button>
            </div>
            <div className={styles.cardsrow}>
                <div className={styles.card}>
                    <p className={styles.cardtitle}>Калории</p>
                    <p className={styles.factvalue}>{'1750'} <span className={styles.unit}>ккал</span></p>
                    <p className={styles.planvalue}>План: {'1750'} ккал</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.cardtitle}>Белок</p>
                    <p className={styles.factvalue}>{'1750'} <span className={styles.unit}>гр</span></p>
                    <p className={styles.planvalue}>План: {'1750'} гр</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.cardtitle}>Жиры</p>
                    <p className={styles.factvalue}>{'1750'} <span className={styles.unit}>гр</span></p>
                    <p className={styles.planvalue}>План: {'1750'} гр</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.cardtitle}>Углеводы</p>
                    <p className={styles.factvalue}>{'1750'} <span className={styles.unit}>гр</span></p>
                    <p className={styles.planvalue}>План: {'1750'} гр</p>
                </div>

            </div>
        </main >
    );
}

export default CardProgressMacros;