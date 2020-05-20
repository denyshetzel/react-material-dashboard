/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { List, ListItem, Button, colors, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0,
    },
    button: {
        color: colors.blueGrey[800],
        padding: '10px 8px',
        justifyContent: 'flex-start',
        textTransform: 'none',
        letterSpacing: 0,
        width: '100%',
        fontWeight: theme.typography.fontWeightMedium,
    },
    icon: {
        // color: theme.palette.icon,
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        marginRight: theme.spacing(1),
    },
    active: {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        '& $icon': {
            color: theme.palette.primary.main,
        },
    },
}));

const CustomRouterLink = forwardRef((props: any, ref: React.Ref<HTMLDivElement>) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
        <RouterLink {...props} />
    </div>
));

export interface Page {
    href: string;
    icon: any;
    title: string;
}

interface Props {
    className: string;
    pages: Page[];
}

const SidebarNav = (props: Props) => {
    const { pages, className, ...rest } = props;

    const classes: any = useStyles();

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            {pages.map((page: Page) => (
                <ListItem className={classes.item} disableGutters key={page.title}>
                    <Button
                        activeClassName={classes.active}
                        className={classes.button}
                        component={CustomRouterLink}
                        to={page.href}
                    >
                        <div className={classes.icon}>{page.icon}</div>
                        {page.title}
                    </Button>
                </ListItem>
            ))}
        </List>
    );
};

export default SidebarNav;
