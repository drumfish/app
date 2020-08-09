import * as React from "react";
import NYImage from '../../statics/images/NY.jpg'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(
    (theme) => ({
        header: {
            color: theme.palette.primary.main,
        },
        image: {
            width: '100%',
            height: '100%',
        },
    }),
    {name: 'HomePage'}
);

const Home = () => {
    const s = useStyles();
    return (
        <div>
            <div className={s.header}>Home page</div>
            <img className={s.image} src={NYImage} alt="new york"/>
        </div>

    );
};

export default Home;