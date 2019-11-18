import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FormComp = (props) => {
    return (
        <Form className = "formComp">
            <FormGroup>
                <Label for="animal">Favorite Animal</Label>
                <Input type="text" name="animal" id="animal" placeholder="Tiger" />
            </FormGroup>
            <FormGroup>
                <Label for="color">Favorite Color</Label>
                <Input type="text" name="color" id="color" placeholder="Blue" />
            </FormGroup>
            <FormGroup>
                <Label for="candy">Favorite Candy</Label>
                <Input type="text" name="candy" id="candy" placeholder="Skittles" />
            </FormGroup>
            <FormGroup>
                <Label for="city">Favorite City</Label>
                <Input type="text" name="city" id="city" placeholder="NYC" />
            </FormGroup>
            <Button href = {props.url}>Submit</Button>
        </Form>
    );
}

export default FormComp;