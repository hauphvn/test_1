import { useLoginStyles } from "./Style";
import { Input } from "src/components/common/Input";
import Button from "src/components/common/Button/CommonButton";
import { useState } from "react";
import { Avatar , Box, Typography} from "@material-ui/core";
import { useAppDispatch } from "src/app/hooks";
import { handleLogin } from "src/redux_management/auth/authSlice";
import { UserAuth } from "src/models";
import { useNavigate } from "react-router-dom";
import { CheckBox } from "src/components/common/CheckBox";

export interface LoginProps {}

const initUserInfoState: UserAuth = {
	userName: "",
	password: "",
};

export function Login(props: LoginProps) {
	const classes = useLoginStyles();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState(initUserInfoState);

	const handleUserNameChange = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setUserInfo({
			...userInfo,
			userName: event.target.value,
		});
	};
	const handlePasswordChange = (
		event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setUserInfo({
			...userInfo,
			password: event.target.value,
		});
	};
	const userNameProp = {
		onChange: handleUserNameChange,
		placeholder: "Username",
		width: "100%",
	};
	const passwordProp = {
		onChange: handlePasswordChange,
		placeholder: "Password",
		type: "password",
		width: "100%",
	};

	const loginButtonProp = {
		onClick: () => {
			dispatch(handleLogin(userInfo)).then((response: any) => {
				if (response) {
					localStorage.setItem("access_token", "abcde123543sss");
					navigate("/store");
				}
			});
		},
		title: "Login",
	};
	const [isRemember, setRemember] = useState(false);
	return (
		<div className={classes.rootLogin}>
			<div className={classes.loginContainer}>
				<Avatar
					variant="square"
					alt="Logo"
					src={process.env.PUBLIC_URL + "/assets/images/logo.svg"}
				/>
				<div className={classes.title}>
					<span>Hello get started Sign in to continue</span>
				</div>
				<form className={classes.loginForm} noValidate autoComplete="off">
					<Input value={userInfo.userName} {...userNameProp} />
					<Input value={userInfo.password} {...passwordProp} />
					<Button {...loginButtonProp} width="100%" title="SIGN IN" />
				</form>
				<CheckBox
					width={18}
					checked={isRemember}
					label="Keep me to sign in"
					onChange={(event: any) => setRemember(event.target.checked)}
				/>
			</div>
		</div>
	);
}
