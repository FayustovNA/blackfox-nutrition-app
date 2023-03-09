import React from 'react';
import styles from './main-profile.module.css';
import UserInfo from '../../components/card-user-info/user-info';
import DailyReport from '../../components/card-send-dailyreport/daily-report';



function MainProfilePage() {

    return (
        <main className={styles.mainpage}>
            <UserInfo />
            <DailyReport />
        </main >
    );
}

export default MainProfilePage;