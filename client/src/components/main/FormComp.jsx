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
            [e.target.name]: e.target.value.toLowerCase()
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
        else if (this.state.animal === "" || this.state.city === "" || this.state.color !== ("violet") || this.state.candy === "" || this.state.color === "") {
                console.log(this.state.color);
                this.setState({show:true, alert: "Color doesn't meet 'hint' criteria"});
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
                    <Label for="animal">Favorite Animal e.g. Tiger</Label>
                    <Input type="text" name="animal" id="main" onChange={e=>this.change(e)} value={this.state.animal} />
                </FormGroup>
                <FormGroup>
                    <Label for="color">Favorite Color e.g. Blue {this.props.rule && <Toolitip tab={this.props.tab}/>}</Label>
                    <Input type="text" name="color" id="color" onChange={e=>this.change(e)} value={this.state.color}  />
                </FormGroup>
                <FormGroup>
                    <Label for="candy">Favorite Candy e.g. Skittles</Label>
                    <Input type="text" name="candy" id="candy"  onChange={e=>this.change(e)} value={this.state.candy} />
                </FormGroup>
                <FormGroup>
                    <Label for="city">Favorite City e.g. NYC</Label>
                    <Input type="text" name="city" id="city" onChange={e=>this.change(e)} value={this.state.city} />
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