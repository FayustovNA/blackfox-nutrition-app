import React from 'react';
import styles from './main-profile.module.css';
import UserInfo from '../../components/card-user-info/user-info';



function MainProfilePage() {

    return (
        <main className={styles.mainpage}>
            <UserInfo />
        </main >
    );
}

export default MainProfilePage;