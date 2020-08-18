import React, {Component} from 'react';
import {Container, Box, FormControl, InputLabel, MenuItem, Button, Paper} from '@material-ui/core';
import { Formik, Field, Form, FormikHelpers } from 'formik'
import {Select, TextField} from 'formik-material-ui'

import RestAssuredRule from '../../rules/restassured.rule';

export interface IFormState {
    frameworks: string;
    curlCommand: string;
    restassuredSnippet: string;
}

export interface IFormProps { }

class MyForm extends Component<IFormProps, IFormState> {

  handleSubmit({ frameworks, curlCommand }: IFormState, { setSubmitting }: FormikHelpers<IFormState>) {
    if (frameworks === "restassured") {
      const restassuredRule = new RestAssuredRule(curlCommand);
      this.setState({ restassuredSnippet: restassuredRule.mountSnippet()})
    } else if (frameworks === "cypress") {
      alert("Work in progress")
    } 
    setSubmitting(false);
  }

  constructor(props: IFormProps) {
    super(props);
    this.state = {frameworks: "", curlCommand: "", restassuredSnippet: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
      return (
          <div>
              <Container maxWidth="lg">
                  <Formik
                    initialValues={{
                      frameworks: '',
                      curlCommand: '',
                      restassuredSnippet: ''
                    }}
                    onSubmit={this.handleSubmit}
                  >
                    <Form>
                      <Box margin={2}>
                        <FormControl fullWidth>
                          <InputLabel shrink={true} htmlFor="framework"> Choose your framework </InputLabel>
                          <Field component={Select} type="text" name="frameworks" inputProps={{name: 'frameworks', id: 'frameworks'}}>
                            <MenuItem value="restassured">RestAssured</MenuItem>
                            <MenuItem value="cypress">Cypress</MenuItem>
                          </Field>
                        </FormControl>
                      </Box>
                      <Box margin={2}>
                        <FormControl fullWidth>
                          <Field
                            component={TextField}
                            type="text"
                            label="cURL"
                            variant="outlined"
                            multiline
                            rows={4}
                            placeholder="Insert your curl command"
                            name="curlCommand"
                          />
                        </FormControl>
                      </Box>
                      <Box margin={2}>
                        <FormControl fullWidth>
                          <Button variant="contained" type="submit" color="primary">
                            CURLVERT
                          </Button>
                        </FormControl>
                      </Box>
                    </Form>
                  </Formik>
                  <Paper>{this.state.restassuredSnippet}</Paper>
              </Container>
          </div>
      )
  }
}

export default MyForm;