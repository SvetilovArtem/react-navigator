import React from "react";
import {Spin} from "antd";
import styles from './Preloader.module.scss'

interface IPreloaderProps {
    isLoading: boolean
}
export const Preloader: React.FC<IPreloaderProps> = ({ isLoading }) => {
    return (
        <>
            <div className={styles.preloader}>
                <Spin spinning={isLoading} size={"large"} />
            </div>
            <div className={styles.overlay}></div>
        </>

    )
}