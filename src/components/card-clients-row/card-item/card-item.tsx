import React, { useEffect, FC } from 'react'
import styles from './card-item.module.css'
import { ReactComponent as Edit } from '../../../images/edit.svg'
import { NavLink } from 'react-router-dom'


export interface IClient {
    readonly avatar?: any
    readonly name?: any
}

interface IClientsRow {
    card: IClient
}

const ClientItem: FC<IClientsRow> = ({ card }) => {
    return (
        <main className={styles.itembox}>
            <div className={styles.avatarbox}>
                <img className={styles.clientavatar} src={card.avatar} alt="" />
            </div>
            <div className={styles.maininfo}>
                <h2 className={styles.name}>{card.name}</h2>
                <div className={styles.stat}>
                    <p className={styles.totalweigth}>{'-33.4'} <span className={styles.unit}>кг</span></p>
                    <div className={styles.links}>
                        <NavLink to='/profile' className={styles.link}>Профиль</NavLink>
                        <NavLink to='/progress' className={styles.link}>Аналитика</NavLink>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default ClientItem;
