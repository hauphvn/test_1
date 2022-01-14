import React from 'react';
import {useStyles} from "./style";
import {Breadcrumbs} from "../../../common/Breadcrumbs";
import {Input} from "../../../common/Input";
import clsx from "clsx";
import CommonRadio from "../../../common/Radio/CommonRadio";
import {CommonButton} from "../../../common/Button/CommonButton";

export interface StoreProps {
}

export function StoreSetting(props: StoreProps) {
  const classes = useStyles();
  return (
    <div className={classes.storeSettingWrapper}>
      <div className={classes.breadcrumbWrapper}>
        <Breadcrumbs title={'Setting'} text={'Change setting store'}/>
      </div>
      <div className={classes.content}>
        <div className={classes.item}>
          <label>Store name</label>
          <Input
            value={''}
            onChange={event => {
            }}/>
        </div>
        <div className={clsx(classes.item, classes.subItem)}>
          <label>Status</label>
          <div className={classes.groupRadios}>
            <CommonRadio
              flexDirection={'row'}
              defaultValue={1}
              listItems={[{value: 1, text: 'Active'}, {value: 2, text: 'Inactive'}]}
              onChecked={(e) => {
                console.log(e)
              }}/>
          </div>
          <div className={classes.item}>
            <label>Limit category</label>
            <Input
              value={''}
              onChange={event => {
              }}/>
          </div>
          <div className={classes.item}>
            <label>Limit table</label>
            <Input
              value={''}
              onChange={event => {
              }}/>
          </div>
          <div className={classes.item}>
            <label>Limit group table</label>
            <Input
              value={''}
              onChange={event => {
              }}/>
          </div>
          <div className={classes.item}>
            <label>Limit type</label>
            <Input
              value={''}
              onChange={event => {
              }}/>
          </div>
          <div className={classes.item}>
            <label>Limit option menu</label>
            <Input
              value={''}
              onChange={event => {
              }}/>
          </div>
          <div className={classes.item}>
            <label>Limit child option menu</label>
            <Input
              value={''}
              onChange={event => {
              }}/>
          </div>
          <div>
            <CommonButton
              minWidth={'100%'}
              title={"SAVE"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
