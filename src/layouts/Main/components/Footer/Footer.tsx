import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Typography, Link, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(4),
    },
}));

interface Props {
    className?: string;
}

const Footer = (props: Props) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <div {...rest} className={clsx(classes.root, className)}>
            <Typography variant="body1">
                &copy;{' '}
                <Link component="a" href="https://devias.io/" target="_blank">
                    Devias IO
                </Link>
                . 2019
            </Typography>
            <Typography variant="caption">
                Created with love for the environment. By designers and developers who love to work together in offices!
            </Typography>
        </div>
    );
};

export default Footer;
