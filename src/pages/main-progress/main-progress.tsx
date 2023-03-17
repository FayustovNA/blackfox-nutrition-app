import React from 'react';
import styles from './main-progress.module.css';
import { ReactComponent as Chart } from '../../images/chart.svg';
import CardProgressWeight from '../../components/card-progress-weight/card-progress-weight';
import CardProgressAntropometry from '../../components/card-progress-anthropometry/card-progress-antropometry';
import CardProgressMacros from '../../components/card-progress-macros/card-progress-macros';
import CardProgressMicros from '../../components/card-progress-micros/card-progress-micros';




function MainProgressPage() {

    return (
        <main className={styles.mainpage}>
            <div className={styles.progressbox}>
                <h2 className={styles.title}><span className={styles.icon}><Chart /></span>Мой прогресс и аналитика</h2>
                <div className={styles.progressgrid}>
                    <CardProgressWeight />
                    <CardProgressAntropometry />
                    <CardProgressMacros />
                    <CardProgressMicros />
                </div>
            </div>
        </main >
    );
}

export default MainProgressPage;