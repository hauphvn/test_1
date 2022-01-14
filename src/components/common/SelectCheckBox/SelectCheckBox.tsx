import { useState } from "react";
import SelectBase from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelectCheckBoxStyles } from "./Style";
import { SelectOptionModel } from "src/models/Select";

export interface SelectCheckBoxProps {
  id?: string;
  width?: number | string;
  options: SelectOptionModel[];
  menuProps: any;
  defaultSelectedItem: string[];
  onChangeOptions: (options: string[]) => void;
}

export function SelectCheckBox(props: SelectCheckBoxProps) {
  const {
    options,
    onChangeOptions,
    width,
    menuProps,
    defaultSelectedItem,
    ...restProps
  } = props;
  const classes = useSelectCheckBoxStyles({ width });
  const [selectedItems, setSelectedItems] =
    useState<string[]>(defaultSelectedItem);

  const handleChangeOption = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedItems(event.target.value as string[]);
  };

  const handleDisplaySelectedItem = (selected: any) => {
    let listOptionName = options
      .filter((option: SelectOptionModel) => {
        return selectedItems.includes(option.value);
      })
      .map((option: SelectOptionModel) => option.name);
    return listOptionName.join(", ");
  };

  const handleOnClose = () => {
    onChangeOptions(selectedItems);
  };
  return (
    <div className={classes.rootSelect}>
      <FormControl className={classes.formControl} margin='dense'>
        <SelectBase
          multiple
          autoWidth={false}
          {...restProps}
          onClose={handleOnClose}
          value={selectedItems}
          onChange={handleChangeOption}
          renderValue={handleDisplaySelectedItem}
          MenuProps={menuProps}
					variant="outlined"
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox checked={selectedItems.includes(option.value)} />
              <ListItemText primary={option.name} />
            </MenuItem>
          ))}
        </SelectBase>
      </FormControl>
    </div>
  );
}
SelectCheckBox.defaultProps = {
  width: 120,
  menuProps: {
    PaperProps: {
      style: {
        maxHeight: 250,
        width: 250,
      },
    },
  },
  defaultSelectedItem: [],
};
