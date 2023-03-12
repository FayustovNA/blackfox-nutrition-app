import React, { useEffect, FC } from 'react';
import styles from './dairy-cards-row.module.css';
import { ReactComponent as Grid } from '../../images/grid.svg';
import CardsRowItem from './cards-row-item/cards-row-item';
import { data } from '../../utils/data/data';
import { ICard } from '../dairy-cards-row/cards-row-item/cards-row-item';


interface Icards {
    cards?: Array<ICard>,
}


const DairyCardRows: FC<Icards> = () => {

    const cards = data;
    const len = cards.length;
    const period = len - 6;
    const cardsforrow = cards.slice(period, len);

    return (
        <main className={styles.cardrow} >
            <h1 className={styles.title}><span className={styles.icon}><Grid /></span>Лента дневников</h1>
            <div className={styles.cardsgrid}>
                {cardsforrow.map((card, index) => {
                    return (
                        <CardsRowItem
                            card={card}
                            key={index}
                        />
                    );
                })}
            </div>
        </main >
    );
}

export default DairyCardRows;