import React from 'react'
import styles from './SideBar.module.css';
import ArticleIcon from '@mui/icons-material/Article';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SideBar = () => {
  return (
    <div className={styles.sideBar}>
        <div className={styles.sideBarIcon}>
            <ArticleIcon sx={{fontSize:54, marginBottom:2}} />
            <div className={styles.sideBarTopContent}>Resume Screening</div>
        </div>

        <div className='styles.sideBarOptionsBlock'>
            <div className='styles.sideBarOption'>
                <DashboardIcon />
                <div>Dashboard</div>
            </div>
        </div>
    </div>
  )
}

export default SideBar