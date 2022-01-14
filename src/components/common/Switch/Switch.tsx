import SwitchBase from "@material-ui/core/Switch";
import { useSwitchStyles } from "./Style";

export interface SwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Switch(props: SwitchProps) {
  const classes = useSwitchStyles();

  return (
    <div className={classes.rootSwitch}>
      <SwitchBase
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    </div>
  );
}
