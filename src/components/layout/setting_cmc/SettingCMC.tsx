import {useStyles} from "./Style";
import {Breadcrumbs} from "../../common/Breadcrumbs";
import CommonTextArea from "../../common/TextArea/CommonTextArea";
import {CommonButton} from "../../common/Button";

export interface StoreProps {
}

export function SettingCMC(props: StoreProps) {
	const classes = useStyles();
	return (
		<>
			<div className={classes.settingCMCWrapper}>
				<div className={classes.breadcrumbWrapper}>
					<Breadcrumbs title={'Setting CMC'} text={'Change setting store'}/>
				</div>
				<div className={classes.content}>
					<div className={classes.item}>
						<label>Term app customer</label>
						<CommonTextArea
							width={'490px'}
							height={'155px'}
							border={'1px solid var(--color-grey-light)'}
							borderRadius={'3px'}
							onChange={() => console.log()}/>
					</div>
					<div className={classes.item}>
						<label>Term app owner</label>
						<CommonTextArea
							width={'490px'}
							height={'155px'}
							border={'1px solid var(--color-grey-light)'}
							borderRadius={'3px'}
							onChange={() => console.log()}/>
					</div>
					<div>
						<CommonButton
							title={"SAVE"}
							width={"100%"}/>
					</div>
				</div>
			</div>
		</>
	);
}
