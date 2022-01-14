import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {CommonButton} from "../../../../../common/Button/CommonButton";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";
import clsx from "clsx";
import {useStyles} from "./style";
import {Input} from "../../../../../common/Input";
import {Switch} from "../../../../../common/Switch";

export interface EditOptionMenuProps {
  open: boolean;
  handleSave?: () => void;
  handleCancel: () => void;
  title?: string;
}

export function EditOptionMenu(props: EditOptionMenuProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const {handleSave, open, handleCancel, title} = props;
  const classes = useStyles();
  const listGroups = [
    {
      id: '1',
      name: 'G1',
      status: true
    },
    {
      id: '2',
      name: 'G2',
      status: true
    },
    {
      id: '3',
      name: 'G3',
      status: true
    }
  ]
  return (
  <div className={classes.editOptionMenuWrapper}>
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleCancel}
      aria-labelledby="responsive-dialog-title"
    >
     <div className={classes.titleWrapper}>
       <DialogTitle>
         <div style={{textAlign: 'center', fontSize: '18px', fontWeight: 700}}>{title}</div>
       </DialogTitle>
     </div>
      <div className={classes.contentWrapper}>
        <DialogContent>
          <DialogContentText>
            <div className={clsx(classes.content)}>
              <div className={clsx(classes.filterInput)}>
                <Input
                  width={'316px'}
                  value={'Drink'}
                  onChange={event => {}}/>
              </div>
              <div className={clsx(classes.listItemsWrapper)}>
                {listGroups.map((group: any) => (
                  <div key={group.id} className={clsx(classes.itemRow)}>
                    <div className={clsx('itemFirst')}>
                      <Input value={group.name} onChange={event => {}}/>
                    </div>
                    <div>
                      <Switch checked={group.status} onChange={event => {}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
      </div>
      <div className={classes.actionWrapper}>
        <DialogActions>
          <CommonButton
            border={'1px solid var(--primary-color)'}
            backgroundColor={'var(--color-white)'}
            textColor={'var(--color-black)'}
            width={'104px'}
            title={"CANCEL"}
            height="40px"
            onClick={handleCancel}
          />
          <CommonButton
            width={'104px'}
            title={"SAVE"}
            height="40px"
            onClick={handleSave}
          />
        </DialogActions>
      </div>
    </Dialog>
  </div>
  )
}

