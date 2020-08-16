import React, { Component } from 'react';
import {Container, Grid, TextField, Select, InputLabel, MenuItem, FormControl, Button} from '@material-ui/core';
import styles from './styles.module.css';

class Form extends Component {
    render() {
        return (
            <div>
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item className={styles.gridForm} xs={12}>
                           <FormControl variant="outlined" fullWidth>
                                <InputLabel id="label">Select your framework to cURLvert</InputLabel>
                                <Select labelId="label" id="select">
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>RestAssured</MenuItem>
                                    <MenuItem value={20}>Supertest</MenuItem>
                                    <MenuItem value={30}>Cypress</MenuItem>
                                </Select>
                           </FormControl>
                        </Grid>
                        <Grid item className={styles.gridForm} xs={12}>
                            <TextField
                                fullWidth
                                id="outlined-multiline-static"
                                label="cURL"
                                multiline
                                rows={5}
                                placeholder="Insert your curl command"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item className={styles.gridForm} xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={() => { alert('clicado') }}
                            >
                            cURLvert
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    }
}

export default Form;