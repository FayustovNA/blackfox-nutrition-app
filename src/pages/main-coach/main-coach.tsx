import React from 'react';
import styles from './main-coach.module.css';
import CoachInfo from '../../components/card-coach-info/card-coach-info';
import ClientsCardRow from '../../components/card-clients-row/cards-client-row';
import { ReactComponent as SetIcon } from '../../images/setting.svg';



function MainCoachPage() {

    return (
        <main className={styles.mainpage}>
            <CoachInfo />
            <ClientsCardRow />
        </main >
    );
}

export default MainCoachPage;