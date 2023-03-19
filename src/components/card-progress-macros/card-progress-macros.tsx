import React from 'react';
import styles from './card-progress-macros.module.css';
import BasicMacrosChart from '../charts/basic-macros-chart';




function CardProgressMacros() {

    return (
        <main className={styles.progressitem}>
            <h3 className={styles.subtitle}>БАЗОВАЯ АНАЛИТИКА РАЦИОНА</h3>
            <div className={styles.filterpanel}>
                <p className={styles.paneltitle}>Сопоставление фактических и плановых норм</p>
                <div className={styles.btns}>
                    <button className={styles.filterbtn}>Неделя</button>
                    <button className={styles.filterbtn}>Месяц</button>
                    <button className={styles.filterbtn}>Год</button>
                </div>
            </div>

            <div className={styles.cardsrow}>
                <div className={styles.card}>
                    <p className={styles.cardtitle}>Калории</p>
                    <p className={styles.factvalue}>{'1750'} <span className={styles.unit}>ккал</span></p>
                    <p className={styles.planvalue}>План: {'1750'} ккал</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.cardtitle}>Белок</p>
                    <p className={styles.factvalue}>{'135'} <span className={styles.unit}>гр</span></p>
                    <p className={styles.planvalue}>План: {'120'} гр</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.cardtitle}>Жиры</p>
                    <p className={styles.factvalue}>{'67'} <span className={styles.unit}>гр</span></p>
                    <p className={styles.planvalue}>План: {'90'} гр</p>
                </div>
                <div className={styles.card}>
                    <p className={styles.cardtitle}>Углеводы</p>
                    <p className={styles.factvalue}>{'230'} <span className={styles.unit}>гр</span></p>
                    <p className={styles.planvalue}>План: {'280'} гр</p>
                </div>

            </div>

            <div className={styles.chart}><BasicMacrosChart /></div>
        </main >
    );
}

export default CardProgressMacros;