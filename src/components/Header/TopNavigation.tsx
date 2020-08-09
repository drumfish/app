import * as React from "react";
import {NavLink} from "react-router-dom";
import routes from "../../constants/routes";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(
    (theme) => ({
        navigation: {
            display: 'flex',
            padding: theme.spacing(1),
        },
        link: {
            fontSize: theme.typography.fontSize,
            '& + $link': {
                marginLeft: theme.spacing(0.5),
            },
        },
        linkActive: {
            color: theme.palette.primary.main,
        },
    }),
    {name: 'TopNavigation'}
);

const TopNavigation = () => {
    const s = useStyles();
    return (
        <div className={s.navigation}>
            <NavLink exact strict to={routes.home} className={s.link} activeClassName={s.linkActive}>Home</NavLink>
            <NavLink exact strict to={routes.contacts} className={s.link} activeClassName={s.linkActive}>Contacts</NavLink>
        </div>
    );
};

export default TopNavigation;