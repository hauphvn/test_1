import {FC, useEffect, useState} from "react";
import useStyle from "./style";
import {DatePicker} from "../DatePicker";

type Props = {
  widthStartDate?: string,
  widthEndDate?: string,
  labelStartDate?: string,
  labelEndDate?: string,
  startRequire?: string,
  startDateDefault?: Date,
  endDateDefault?: Date,
  borderRadius?: string,
  border?: string,
  spaceBetween?: string
	containerWidth?: string,
	startEndMargin?: string | number,
  fontWeightTitle?: number,
  minWidth?: string
}
const TimeStartEnd: FC<Props> = (
  {
    labelEndDate,
    labelStartDate,
    startDateDefault,
    endDateDefault,
    startRequire,
    widthEndDate,
    widthStartDate,
    border,
    borderRadius,
    spaceBetween,
    containerWidth,
    startEndMargin,
    fontWeightTitle,
    minWidth
  }
) => {
  const myClasses = useStyle({ containerWidth, startEndMargin, fontWeightTitle });
  const [startDateState, setStartDateState] = useState<Date | null>(null);
  const [endDateState, setEndDateState] = useState<Date | null>(null);
  useEffect(() => {
    setStartDateState((new Date()));
    setEndDateState((new Date()));
  }, [])
  useEffect(() => {
  }, [endDateState])
  return (
    <div className={myClasses.rootTimeStartEnd}>
      <div className={myClasses.dateWrapper}>
        <div className={myClasses.startDateWrapper}>
          {(!!labelStartDate) &&
          <label className={myClasses.title}>{labelStartDate} <span style={{color: 'var(--color-require)'}}>{startRequire}</span></label>
          }
          <DatePicker
            minWidth={minWidth}
            border={border}
            borderRadius={borderRadius}
            width={widthStartDate}
            maxDate={endDateState}
            value={startDateState} onChange={date => setStartDateState(date)}
          />
        </div>
        <div className={myClasses.endDateWrapper}>
          {(!!labelEndDate) &&
          <label className={myClasses.title}>{labelEndDate} <span style={{color: 'var(--color-require)'}}>{startRequire}</span></label>
          }
          <DatePicker
            minWidth={minWidth}
            border={border}
            borderRadius={borderRadius}
            width={widthEndDate}
            value={endDateState}
            onChange={date => setEndDateState(date)}
          />
        </div>
      </div>
    </div>)
}
TimeStartEnd.defaultProps = {
  labelEndDate: '',
  labelStartDate: '',
  startDateDefault: new Date(),
  endDateDefault: new Date(),
  widthEndDate: '157px',
  widthStartDate: '157px',
	containerWidth: '325px',
	startEndMargin: 0,
  border: 'none',
  borderRadius: 'none',
  startRequire: '',
  fontWeightTitle: 400,
  minWidth: '157px'
}
export default TimeStartEnd;
