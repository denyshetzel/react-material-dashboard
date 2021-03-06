import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardActions,
    CardContent,
    Avatar,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
    TablePagination,
    Theme,
} from '@material-ui/core';

import { getInitials } from './../../../../helpers';

const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    content: {
        padding: 0,
    },
    inner: {
        minWidth: 1050,
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: theme.spacing(2),
    },
    actions: {
        justifyContent: 'flex-end',
    },
}));

interface User {
    id: number;
    avatarUrl: string;
    name: string;
    email: string;
    address: {
        state: string;
        city: string;
        country: string;
    };
    phone: string;
    createdAt: any;
}

interface Props {
    className?: string;
    users: Array<any>;
}

const UsersTable = (props: Props) => {
    const { className, users, ...rest } = props;

    const classes: any = useStyles();

    const [selectedUsers, setSelectedUsers] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [page, setPage] = useState(0);

    const handleSelectAll = (event: any) => {
        const { users } = props;

        let selectedUsers: any;

        if (event.target.checked) {
            selectedUsers = users.map((user: any) => user.id);
        } else {
            selectedUsers = [];
        }

        setSelectedUsers(selectedUsers);
    };

    const handleSelectOne = (event: any, id: number) => {
        console.log(event);
        const selectedIndex: number = 0; // selectedUsers.indexOf(id);
        let newSelectedUsers: any = [];

        if (selectedIndex === -1) {
            newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
        } else if (selectedIndex === 0) {
            newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
        } else if (selectedIndex === selectedUsers.length - 1) {
            newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedUsers = newSelectedUsers.concat(
                selectedUsers.slice(0, selectedIndex),
                selectedUsers.slice(selectedIndex + 1),
            );
        }

        setSelectedUsers(newSelectedUsers);
    };

    const handlePageChange = (event: any, page: any) => {
        console.log(event);
        setPage(page);
    };

    const handleRowsPerPageChange = (event: any) => {
        setRowsPerPage(event.target.value);
    };

    return (
        <Card {...rest} className={clsx(classes.root, className)}>
            <CardContent className={classes.content}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={selectedUsers.length === users.length}
                                            color="primary"
                                            indeterminate={
                                                selectedUsers.length > 0 && selectedUsers.length < users.length
                                            }
                                            onChange={handleSelectAll}
                                        />
                                    </TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Location</TableCell>
                                    <TableCell>Phone</TableCell>
                                    <TableCell>Registration date</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.slice(0, rowsPerPage).map((user: User) => (
                                    <TableRow
                                        className={classes.tableRow}
                                        hover
                                        key={user.id}
                                        // selected={selectedUsers.indexOf(user.id) !== -1}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                // checked={selectedUsers.indexOf(user.id) !== -1}
                                                color="primary"
                                                onChange={(event) => handleSelectOne(event, user.id)}
                                                value="true"
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <div className={classes.nameContainer}>
                                                <Avatar className={classes.avatar} src={user.avatarUrl}>
                                                    {getInitials(user.name)}
                                                </Avatar>
                                                <Typography variant="body1">{user.name}</Typography>
                                            </div>
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            {user.address.city}, {user.address.state}, {user.address.country}
                                        </TableCell>
                                        <TableCell>{user.phone}</TableCell>
                                        <TableCell>{moment(user.createdAt).format('DD/MM/YYYY')}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </PerfectScrollbar>
            </CardContent>
            <CardActions className={classes.actions}>
                <TablePagination
                    component="div"
                    count={users.length}
                    onChangePage={handlePageChange}
                    onChangeRowsPerPage={handleRowsPerPageChange}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </CardActions>
        </Card>
    );
};

export default UsersTable;
