import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelectStyles, StyledSelect } from "./Style";
import { SelectOptionModel } from "src/models/Select";

export interface SelectProps {
  options: SelectOptionModel[];
  menuProps?: any;
  defaultSelectedItem?: string[];
  multiple?: boolean;
  id?: string;
  width?: number | string;
  onChangeOptions: (options: string[]) => void;
  border?: string;
  borderRadius?: string
}

export function Select(props: SelectProps) {
  const {
    options,
    onChangeOptions,
    width,
    menuProps,
    defaultSelectedItem,
    border,
    borderRadius,
    ...restProps
  } = props;
  const classes = useSelectStyles({ width });
  const initState = defaultSelectedItem || [];
  const [selectedItems, setSelectedItems] = useState<string[]>(initState);

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
      <FormControl style={{
        border: border,
        borderRadius: borderRadius
      }} className={classes.formControl}>
        <StyledSelect
          multiple
          autoWidth={false}
          {...restProps}
          onClose={handleOnClose}
          value={selectedItems}
          onChange={handleChangeOption}
          renderValue={handleDisplaySelectedItem}
          MenuProps={menuProps}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <ListItemText primary={option.name} />
            </MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    </div>
  );
}
Select.defaultProps = {
  width: 157,
  multiple: false,
  border: 'none',
  borderRadius: 'none',
  menuProps: {
    PaperProps: {
      style: {
        maxHeight: 250,
        width: 250,
				backgroundColor: "var(--color-white)",
				borderRadius: "5px",
				color: "var(--color-black)",
				"& li:hover": {
					backgroundColor: "#303039",
					padding: '5px',
					borderRadius: '5px',
				}
      },
    },
  },
  defaultSelectedItem: [],
};
