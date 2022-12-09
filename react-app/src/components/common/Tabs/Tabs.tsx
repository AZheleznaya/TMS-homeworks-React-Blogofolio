import React, {FC} from 'react';

import TabItem, {ITabItem} from "./TabItem/TabItem";

import styles from "./Tabs.module.css";

interface TabsProps {
    config: ITabItem[]
    activeTabItem: number
    onClick: any
}

const Tabs: FC<TabsProps> = (
    {
        config= [],
        activeTabItem= 1,
        onClick = () => {}
    }) => {

    if (!Array.isArray(config)){
        return null
    }

    return (
        <div className={styles.tabs}>
            {config.map(tab => (
                <TabItem
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    activeTabItem={activeTabItem}
                    disabled={tab.disabled}
                    onClick={onClick}
                />
            ))}
        </div>
    );
};

export default Tabs;