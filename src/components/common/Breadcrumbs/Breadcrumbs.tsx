import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { useStyle } from "./style"
import classnames from 'classnames';

type BreadcrumbsProps = {
	title: string,
	text: string,
}

export function Breadcrumbs(props: BreadcrumbsProps) {
	const { title, text } = props;
	const breadcrumbs = useBreadcrumbs();
	const classes = useStyle();
	const breadcrumbsLength = breadcrumbs?.length;
	return (
		<div className={classes.rootBreadcrumb}>
			<div className={classes.title}>{title}</div>
			<div className={classes.text}>{text}</div>
			<div
				className={classnames(classes.breadcrumbItem)}
			>
				{breadcrumbs.map(({match, breadcrumb }, index) => {
					if (index > 0) {
						return <NavLink
							key={index}
							to={match.pathname}
							className={(breadcrumbsLength === 2 || breadcrumbsLength - 1 === index) ? classes.activeBreadcrumb : ''}
						>
							{breadcrumb} {(breadcrumbsLength === 2 || breadcrumbsLength - 1 === index) ? '' : '>'}
						</NavLink>;
					}
				})}
			</div>
		</div>
	)
}
