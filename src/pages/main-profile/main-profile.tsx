import React from 'react';
import styles from './main-profile.module.css';
import UserInfo from '../../components/card-user-info/user-info';
import DailyReport from '../../components/card-send-dailyreport/daily-report';
import WeekTasks from '../../components/card-week-tasks/week-tasks';
import DailyComment from '../../components/card-daily-comment/daily-comment';
import DairyCardRows from '../../components/dairy-cards-row/dairy-cards-row';



function MainProfilePage() {

    return (
        <main className={styles.mainpage}>
            <UserInfo />
            <DailyReport />
            <WeekTasks />
            <DailyComment />
            <DairyCardRows />
        </main >
    );
}

export default MainProfilePage;