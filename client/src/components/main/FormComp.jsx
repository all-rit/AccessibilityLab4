import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class FormComp extends Component {
    focusElem = (e) => {
        this.props.parentCallback('error');
    };
    render() {
        return (
            <Form className="formComp">
                <FormGroup>
                    <Label for="animal">Favorite Animal</Label>
                    <Input type="text" name="animal" id="animal" placeholder="Tiger" onClick={e => this.focusElem(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="color">Favorite Color</Label>
                    <Input type="text" name="color" id="color" placeholder="Blue" onClick={e => this.focusElem(e)} />
                </FormGroup>
                <FormGroup>
                    <Label for="candy">Favorite Candy</Label>
                    <Input type="text" name="candy" id="candy" placeholder="Skittles" onClick={e => this.focusElem(e)}/>
                </FormGroup>
                <FormGroup>
                    <Label for="city">Favorite City</Label>
                    <Input type="text" name="city" id="city" placeholder="NYC" onClick={e => this.focusElem(e)}/>
                </FormGroup>
                <Button href={this.props.url}>Submit</Button>
            </Form>
        );
    }
}

export default FormComp;