import React from 'react';
import styles from './daily-report.module.css';
import { ReactComponent as Calendar } from '../../images/calendar-plus.svg';
import { ReactComponent as Next } from '../../images/right.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';




function DailyReport() {

    return (
        <main className={styles.cardreport}>
            <h1 className={styles.title}><span className={styles.icon}><Calendar /></span>Сдать ежедневный отчет</h1>
            <div className={styles.data}>
                <button className={styles.prevday}><Next className={styles.next} /></button>
                <div className={styles.days}>{'Воскресенье, 23.03.2023'}</div>
                <button className={styles.nextday}><Next className={styles.next} /></button>
            </div>
            <div className={styles.reportitems}>
                <div className={styles.reportitem_left}>
                    <p className={styles.subtitle}>УТРЕННИЙ ВЕС</p>
                    <p className={styles.currentvalue}>{'87.7'}<span className={styles.unitvalue}>кг</span></p>
                    <p className={styles.targetvalue}>ЦЕЛЬ: {'77.0'} кг</p>
                    <button className={styles.button_left}><Plus />Добавить</button>
                </div>
                <div className={styles.reportitem_center}>
                    <p className={styles.subtitle}>ДНЕВНИК ПИТАНИЯ</p>
                    <p className={styles.currentvalue}>{'1750'}<span className={styles.unitvalue}>ккал</span></p>
                    <p className={styles.targetvalue}>ЦЕЛЬ: {'1900'} ккал</p>
                    <button className={styles.button_center}><Plus />Добавить</button>
                </div>
                <div className={styles.reportitem_right}>
                    <p className={styles.subtitle}>ШАГИ ЗА ДЕНЬ</p>
                    <p className={styles.currentvalue}>{'15 000'}<span className={styles.unitvalue}></span></p>
                    <p className={styles.targetvalue}>ЦЕЛЬ: {'17 000'} шагов</p>
                    <button className={styles.button_right}><Plus className={styles.iconplus} />Добавить</button>
                </div>
            </div>
        </main >
    );
}

export default DailyReport;