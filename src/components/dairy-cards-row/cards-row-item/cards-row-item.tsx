import React, { useEffect, FC } from 'react';
import styles from './cards-row-item.module.css';
import { ReactComponent as Edit } from '../../../images/edit.svg';

export interface ICard {
    readonly date: string,
    readonly link: string,
    readonly proteins: number,
    readonly calories: number,
    readonly weight: number,
}

interface ICarsRow {
    card: ICard;
}

const CardsRowItem: FC<ICarsRow> = ({ card }) => {

    return (
        <main className={styles.itembox} >
            <div className={styles.titlepanel}>
                <p className={styles.carddate}>{card.date}</p>
                <a className={styles.opendiary} href={card.link} >Открыть полный отчет</a>
                <button className={styles.editdiary}><Edit /></button>
            </div>
            <div className={styles.generalinfo}>
                <div>
                    <p className={styles.subtitle}>Калории</p>
                    <p className={styles.value}>{card.calories} <span className={styles.unit}>ккал</span></p>
                </div>
                <div className={styles.centralgrid}>
                    <p className={styles.subtitle}>Белок</p>
                    <p className={styles.value}>{card.proteins} <span className={styles.unit}>гр</span></p>
                </div>
                <div>
                    <p className={styles.subtitle}>Вес</p>
                    <p className={styles.value}>{card.weight} <span className={styles.unit}>кг</span></p>
                </div>
            </div>

        </main >
    );
}

export default CardsRowItem;