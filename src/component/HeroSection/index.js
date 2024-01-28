import React from "react";
import styles from "./styles.module.css";
import Table from "../Table/index.js";
import Dropdown from "../DropDown";
function HeroSection(props) {

    return (
        <div className={styles['container']}>
            <div className={styles['left-side']}>
<Dropdown />
            </div>
            <div className={styles['right-side']}>
                <Table />    
            </div>
        </div>
    )
}

export default HeroSection;