import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";



const styledLink = {
	textDecoration: "none",
}

const ReusableBreadcrumbs = ({breadCrumbsItem}) => {
	return (
		<div role="presentation" >
			<Breadcrumbs separator=">" maxItems={2} aria-label="breadcrumb">
				{
					breadCrumbsItem.items.map((el, i) => (
						<Link to={el.link} style={styledLink} key={i}>
							<Typography variant="subtitle2" color="primary">
								{el.label}
							</Typography>
						</Link>
					))
				}
				<Typography variant="subtitle2" color="text.primary">
					{breadCrumbsItem.last.label}
				</Typography>
			</Breadcrumbs>
		</div>
	)
}

export default ReusableBreadcrumbs