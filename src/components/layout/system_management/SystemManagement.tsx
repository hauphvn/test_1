import useStyle from "./Style";
import {Box, Typography} from "@material-ui/core";
import CommonTabBar from "../../common/TabBar/CommonTabBar";
import React, {useState} from "react";
import {SystemDefault} from "./system_default/SystemDefault";
import {AccountBeta} from "./account_beta/AccountBeta";
import {Account} from "./account/Account";

export interface SystemDefaultProps {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`my-tabpanel-${index}`}
      aria-labelledby={`my-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

export function SystemManagement(props: SystemDefaultProps) {
  const classes = useStyle();
  const [selectedTab, setSelectedTab] = useState(0);
  const listTabsOriginal = [
    {
      id: 1,
      title: 'System Default',
    },
    {
      id:2,
      title: 'Account Beta',
    },
    {
      id: 3,
      title: 'Account',
    }
  ]
  const handleSelectedTab = (tabId: number) => {
    setSelectedTab(tabId);
  }
  return(
    <div className={classes.rootSystemManagement}>
      <Typography variant={"h4"}>System Management</Typography>
      <CommonTabBar
        onSelectedTab={(tabId:number) => handleSelectedTab(tabId)}
        listTabOriginal={listTabsOriginal}/>
      <div>
        <TabPanel value={selectedTab} index={0}>
         <SystemDefault/>
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
         <AccountBeta/>
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <Account/>
        </TabPanel>
      </div>
    </div>
  )
}
