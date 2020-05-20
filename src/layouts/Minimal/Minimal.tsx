import React from 'react';
import { makeStyles } from '@material-ui/styles';

import { Topbar } from './components';

const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 64,
        height: '100%',
    },
    content: {
        height: '100%',
    },
}));

interface Props {
    children: any;
    className?: string;
}

const Minimal = (props: Props) => {
    const { children } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Topbar />
            <main className={classes.content}>{children}</main>
        </div>
    );
};

export default Minimal;
