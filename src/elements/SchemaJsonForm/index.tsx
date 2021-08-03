import React, {Component} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyToClipboard from 'react-copy-to-clipboard';
import {Container, Box, FormControl, Button} from '@material-ui/core';
import {FileCopyOutlined} from '@material-ui/icons';
import { Formik, Field, Form, FormikHelpers } from 'formik'
import {TextField} from 'formik-material-ui'
import Schema from '../../rules/schema.core';

export interface IFormState {
    frameworks: string;
    jsonObject: string;
    snippet: string;
    language: string;
}

export interface IFormProps { }

class SchemaJsonForm extends Component<IFormProps, IFormState> {

  handleSubmit({ jsonObject }: IFormState, { setSubmitting }: FormikHelpers<IFormState>) {
    const schema = new Schema(jsonObject);
    this.setState({ snippet: schema.mountSchema(), language: "json" })
    setSubmitting(false);
  }

  constructor(props: IFormProps) {
    super(props);
    this.state = {frameworks: "", jsonObject: "", snippet: "", language: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  jsonObjectFieldValidation(value: string) {
    let error: string = "";
    if (!value) {
      error = "Empty field"
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
                      jsonObject: '',
                      snippet: '',
                      language: ''
                    }}
                    onSubmit={this.handleSubmit}
                  >
                    {({errors, touched, isValidating}) => (
                        <Form>
                          <Box margin={2}>
                            <FormControl fullWidth>
                              <Field
                                component={TextField}
                                type="text"
                                label="JSON Object"
                                variant="outlined"
                                multiline
                                rows={4}
                                placeholder="Insert your json object"
                                name="jsonObject"
                                validate={this.jsonObjectFieldValidation}
                              />
                            </FormControl>
                          </Box>
                          <Box margin={2}>
                            <FormControl fullWidth>
                              <Button variant="contained" type="submit" color="primary">
                                Get JSON Schema
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

export default SchemaJsonForm;