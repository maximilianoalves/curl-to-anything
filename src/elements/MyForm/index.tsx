import React, {Component} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Container, Box, FormControl, InputLabel, MenuItem, Button} from '@material-ui/core';
import {FileCopyOutlined} from '@material-ui/icons';
import { Formik, Field, Form, FormikHelpers } from 'formik'
import {Select, TextField} from 'formik-material-ui'
//rules
import RestAssuredRule from '../../rules/restassured.rule';
import KarateRule from '../../rules/karate.rule'
import HttpartyRule from '../../rules/httparty.rule';

export interface IFormState {
    frameworks: string;
    curlCommand: string;
    snippet: string;
    language: string;
}

export interface IFormProps { }

class MyForm extends Component<IFormProps, IFormState> {

  handleSubmit({ frameworks, curlCommand }: IFormState, { setSubmitting }: FormikHelpers<IFormState>) {
    switch(frameworks) {
      case "restassured": {
        const restassuredRule = new RestAssuredRule(curlCommand);
        this.setState({ snippet: restassuredRule.mountSnippet(), language: "java"})
        break
      }
      case "karate": {
        const karateRule = new KarateRule(curlCommand);
        this.setState({ snippet: karateRule.mountSnippet(), language: "gherkin" })
        break
      }
      case "httparty": {
        const httpartyRule = new HttpartyRule(curlCommand);
        this.setState({ snippet: httpartyRule.mountSnippet(), language: "ruby" })
        break
      }
      default: {
        alert("Work in progress")
      }
    }
    setSubmitting(false);
  }

  constructor(props: IFormProps) {
    super(props);
    this.state = {frameworks: "", curlCommand: "", snippet: "", language: ""};
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
                      snippet: '',
                      language: ''
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
                              <MenuItem value="karate">Karate/DSL</MenuItem>
                              <MenuItem value="httparty">Httparty</MenuItem>
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
                  {this.state.snippet ? 
                    <SyntaxHighlighter 
                      lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                      showLineNumbers 
                      wrapLines={true} 
                      language={this.state.language} 
                      style={atomDark}>
                      {this.state.snippet}
                    </SyntaxHighlighter>
                    : 
                    null
                  }
                  {this.state.snippet ?
                    <CopyToClipboard text={this.state.snippet}>
                      <Button  startIcon={<FileCopyOutlined />} variant="outlined">Copy to clipboard</Button>
                    </CopyToClipboard>
                    : 
                    null
                  }
                </Box>
              </Container>
          </div>
      )
  }
}

export default MyForm;