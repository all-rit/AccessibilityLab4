import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Alert } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolitip from "../helpers/tooltip";

class FormComp extends Component {
    state = {
        animal:"",
        color: "",
        candy: "",
        city: "",
        show:false,
        alert: "Fill Out Form Completely"
    };
    change = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    focusElem = (e) => {
        e.target.blur();
        this.props.parentCallback('error');
    };

    form_sub=e=>{
        if(this.props.rule){
            if (this.state.animal === "" || this.state.city === "" || this.state.candy === "" || this.state.color === "") {
                this.setState({show: true, alert: "Fill Out Form Completely"});}
            else if (this.state.animal === "" || this.state.city === "" || this.state.color !== ("Violet") || this.state.candy === "" || this.state.color === "") {
                console.log(this.state.color);
                this.setState({show:true, alert: "Color is invalid"});

            } else {
                window.location.href = this.props.url;
            }
        }
        else {
            if (this.state.animal === "" || this.state.city === "" || this.state.candy === "" || this.state.color === "") {
                this.setState({show: true})
            } else {
                window.location.href = this.props.url;
            }
        }
    };
    render() {
        return (
            <main>
                <div className='overlap' onClick={e => this.focusElem(e)}>
                </div>
            <Form className="formComp" >
                <FormGroup>
                    <Label for="animal">Favorite Animal</Label>
                    <Input type="text" name="animal" id="main" placeholder="Tiger" onChange={e=>this.change(e)}  />
                </FormGroup>
                <FormGroup>
                    <Label for="color">Favorite Color {this.props.rule && <Toolitip tab={this.props.tab}/>}</Label>
                    <Input type="text" name="color" id="color" placeholder="Blue" onChange={e=>this.change(e)}   />
                </FormGroup>
                <FormGroup>
                    <Label for="candy">Favorite Candy</Label>
                    <Input type="text" name="candy" id="candy" placeholder="Skittles" onChange={e=>this.change(e)} />
                </FormGroup>
                <FormGroup>
                    <Label for="city">Favorite City</Label>
                    <Input type="text" name="city" id="city" placeholder="NYC" onChange={e=>this.change(e)}  />
                </FormGroup>
                { this.state.show
                    ? <Alert color="danger" >
                        {this.state.alert}
                    </Alert>
                    : null
                }
                <Button onClick={(e)=>this.form_sub()}>Submit</Button>
                {this.props.rule &&
                <Button color="danger" style={{marginLeft: "20px"}} href={this.props.url}>Give Up</Button>
                }
            </Form>
            </main>
        );
    }
}

export default FormComp;