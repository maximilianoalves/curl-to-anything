import React from 'react';
import {Container, Box, FormControl, InputLabel, MenuItem, Button} from '@material-ui/core';
import { Formik, Field, Form, FormikHelpers } from 'formik'
import {Select, TextField} from 'formik-material-ui'
import styles from './styles.module.css';

import CurlConverterCore from '../../rules/curlConverter.core';

export interface IFormState {
    frameworks: string;
    curlCommand: string;
}

export interface IFormProps { }

class MyForm extends React.Component<IFormProps, IFormState> {

  handleSubmit({ frameworks, curlCommand }: IFormState, { setSubmitting }: FormikHelpers<IFormState>) {
    if (frameworks === "restassured") {
    const restConverter = new CurlConverterCore(curlCommand);

    console.log("metodo: ", restConverter.method);
    console.log("url: ", restConverter.url);
    console.log("body: ", restConverter.body);
    console.log("headers: ", restConverter.headers);
    } else if (frameworks === "cypress") {
      alert("cypress da massa")
    } 
    setSubmitting(false);
  }

  render() {
      return (
          <div>
              <Container maxWidth="lg">
                  <Formik
                    initialValues={{
                      frameworks: '',
                      curlCommand: '',
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
              </Container>
          </div>
      )
  }
}

export default MyForm;