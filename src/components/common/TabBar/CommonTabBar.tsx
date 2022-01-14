import React, {FC, useEffect, useState} from "react";
import useStyle from "./style";
import {Paper, Tab, Tabs} from "@material-ui/core";

interface TabOriginal {
    id: number,
    title: string
}
type Props = {
    listTabOriginal: TabOriginal[],
    onSelectedTab: (tabId: number) => void
}

function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CommonTabBar: FC<Props> = (
    {
        listTabOriginal,
        onSelectedTab
    }
) => {
    const classes = useStyle();
    const [value, setValue] = useState(0);
    const [listTabState, setListTabState] = useState<any[]>([])

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        onSelectedTab(newValue);
    };
    useEffect(() => {
        setListTabState(listTabOriginal);
    }, []);
    return (
        <div className={classes.rootTabBar}>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    {listTabState.map((tab: any, index: number) => [
                        <Tab label={tab.title}/>
                    ])}
                </Tabs>
            </Paper>
        </div>
    )
}

export default CommonTabBar
