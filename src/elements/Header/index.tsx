import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styles from './styles.module.css';

class Header extends Component {
    render() {
        return (
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h4" className={styles.title}>
                        cURL to Anything
                    </Typography>
                </Toolbar>
          </AppBar>
        )
    }
}

export default Header;