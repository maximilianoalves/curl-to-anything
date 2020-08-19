import React, {Component} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Container, Box, FormControl, InputLabel, MenuItem, Button} from '@material-ui/core';
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

  curlFieldValidation(value: string) {
    let error: string = "";
    if (!value) {
      error = "Empty field"
    } else if (!value.includes("curl")) {
      error = "Invalid curl command";
    }
    return error;
  }

  frameworksFieldValidation(value: string) {
    let error: string = "";
    if (!value) {
      error = "First, choose your framework"
    }
    return error;
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
                    {({errors, touched, isValidating}) => (
                        <Form>
                        <Box margin={2}>
                          <FormControl fullWidth>
                            <InputLabel shrink={true} htmlFor="framework">Choose your framework</InputLabel>
                            <Field 
                              component={Select} 
                              type="text"
                              name="frameworks" 
                              inputProps={{name: 'frameworks', id: 'frameworks'}}
                              validate={this.frameworksFieldValidation}
                            >
                              <MenuItem value="restassured">RestAssured</MenuItem>
                              <MenuItem value="cypress">Cypress</MenuItem>
                            </Field>
                            <div className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">{errors.frameworks}</div>
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
                              validate={this.curlFieldValidation}
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
                    )}
                  </Formik>
              </Container>
              <Container maxWidth="md">
                <Box margin={4}>
                  {this.state.restassuredSnippet ? 
                    <SyntaxHighlighter showLineNumbers language="java" style={atomDark}>
                      {this.state.restassuredSnippet}
                    </SyntaxHighlighter> : 
                    null
                  }
                </Box>
              </Container>
          </div>
      )
  }
}

export default MyForm;