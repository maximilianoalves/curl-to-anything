import React, { Component } from 'react';
import { AppBar, Button, Link, Toolbar, Typography } from '@material-ui/core';
import styles from './styles.module.css';

class Header extends Component {


    render() {
        return (
            <AppBar position="static">
                <Toolbar >
                    <Typography variant="h4" className={styles.title}>
                        <Link color="inherit" href="/" >cURL to Anything</Link>
                    </Typography>
                    <Button color="inherit" href="/schema-json">Schema JSON</Button>
                </Toolbar>
          </AppBar>
        )
    }
}

export default Header;