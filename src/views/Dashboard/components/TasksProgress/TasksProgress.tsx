import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar, LinearProgress, Theme } from '@material-ui/core';
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        height: '100%',
    },
    content: {
        alignItems: 'center',
        display: 'flex',
    },
    title: {
        fontWeight: 700,
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: 56,
        width: 56,
    },
    icon: {
        height: 32,
        width: 32,
    },
    progress: {
        marginTop: theme.spacing(3),
    },
}));

interface Props {
    className?: string;
}

const TasksProgress = (props: Props) => {
    const { className, ...rest } = props;

    const classes = useStyles();

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography className={classes.title} color="textSecondary" gutterBottom variant="body2">
                            TASKS PROGRESS
                        </Typography>
                        <Typography variant="h3">75.5%</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <InsertChartIcon className={classes.icon} />
                        </Avatar>
                    </Grid>
                </Grid>
                <LinearProgress className={classes.progress} value={75.5} variant="determinate" />
            </CardContent>
        </Card>
    );
};

export default TasksProgress;
