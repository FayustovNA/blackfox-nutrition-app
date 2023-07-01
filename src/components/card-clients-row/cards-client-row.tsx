import React, { useEffect, FC } from 'react';
import styles from './cards-client-row.module.css';
import { ReactComponent as Grid } from '../../images/grid.svg';
import ClientItem from './card-item/card-item';
import { dataClients } from '../../utils/data/dataClients';
import { ICard } from '../dairy-cards-row/cards-row-item/cards-row-item';


interface Icards {
    cards?: Array<ICard>,
}

const ClientsCardRow: FC<Icards> = () => {
    const cards = dataClients;
    return (
        <main className={styles.cardrow} >
            <h1 className={styles.title}><span className={styles.icon}><Grid /></span>Мои клиенты</h1>
            <div className={styles.cardsgrid}>
                {cards.map((card, index) => {
                    return (
                        <ClientItem
                            card={card}
                            key={index}
                        />
                    );
                })}
            </div>
        </main >
    );
}

export default ClientsCardRow;