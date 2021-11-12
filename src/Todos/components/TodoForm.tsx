import React, { FC } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FormValues } from '../interfaces';

interface Props {
    changeHandler: any;
    values: FormValues;
    clickHandler: any;
    errors: {
        title: string,
        description: string,
    }
}
const TodoForm: FC<Props> = ({ changeHandler, values, clickHandler, errors }) => {
    return (
        <Row>
            <Col sm="6">
                <Form inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="title" className="mr-sm-2">Title</Label>
                        <Input required onChange={changeHandler} value={values.title} type="text" name="title" id="title" placeholder="" />
                    </FormGroup>
                    {errors && errors.title && <div className="form-error">{errors.title}</div>}
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="description" className="mr-sm-2">Description</Label>
                        <Input required onChange={changeHandler} value={values.description} type="textarea" name="description" id="description" />
                    </FormGroup>
                    {errors && errors.description && <div className="form-error">{errors.description}</div>}
                    <FormGroup className="mt-2 mr-sm-2 mb-sm-0">
                        <Button onClick={clickHandler}>Submit</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    );
};

export default TodoForm;