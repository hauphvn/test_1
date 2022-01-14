import {useStyles} from "./style";
import {Input} from "../Input";
import {useState} from "react";
import clsx from "clsx";
import {Switch} from "../Switch";
import {CommonButton} from "../Button";

export interface AddMoreToppingProps {

}

export function AddMoreTopping(props: AddMoreToppingProps) {
  const {} = props;
  const classes = useStyles();
  const [title, setTitle] = useState('');
  return (
    <div className={clsx(classes.addMoreToppingWrapper, 'container-fluid')}>
      <div className={clsx('row', classes.item)}>
        <div className={clsx('col-sm-12')}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className={clsx(classes.lineItem, classes.item)}>
        <div className={clsx(classes.elem, classes.elem1)}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={clsx(classes.elem, classes.elem2)}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={clsx(classes.elem, classes.elem3, classes.switchWrapper)}>
          <Switch
            checked={true}
            onChange={(e) => {
            }}
          />
        </div>

      </div>
      <div className={clsx(classes.lineItem, classes.item)}>
        <div className={clsx(classes.elem, classes.elem1)}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={clsx(classes.elem, classes.elem2)}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={clsx(classes.elem, classes.elem3, classes.switchWrapper)}>
          <Switch
            checked={true}
            onChange={(e) => {
            }}
          />
        </div>

      </div>
      <div className={clsx(classes.lineItem, classes.item)}>
        <div className={clsx(classes.elem, classes.elem1)}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={clsx(classes.elem, classes.elem2)}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={clsx(classes.elem, classes.elem3, classes.switchWrapper)}>
          <Switch
            checked={true}
            onChange={(e) => {
            }}
          />
        </div>

      </div>
      <div className={clsx('row', classes.btnSave, classes.item)}>
        <div className={clsx( 'col-sm-12')}>
          <CommonButton
            minWidth={'100%'}
            title={"SAVE"}
          />
        </div>
      </div>
    </div>
  );
}
