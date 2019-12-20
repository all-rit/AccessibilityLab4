import React, {Component} from 'react';
import CodeUpdateHeader from "../components/main/CodeUpdateHeader";
import Prism from "prismjs";
import {navigate} from "@reach/router";
import Button from "@material-ui/core/Button";
import "../assets/stylesheets/prism.css";
import {Paper} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import CheckCircleIcon from "@material-ui/core/SvgIcon/SvgIcon";
import {amber, green, red, yellow} from "@material-ui/core/colors";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};


function MySnackbarContentWrapper(props) {


    const classes = {
        success: {
            backgroundColor: green[600],
        },
        error: {
            backgroundColor: red,
        },
        info: {
            backgroundColor: yellow,
        },
        warning: {
            backgroundColor: amber[700],
        },
        icon: {
            fontSize: 10,
        },
        iconVariant: {
            opacity: 0.9,
        },
        message: {
            display: 'flex',
            alignItems: 'center',
        }
    };
    const {className, message, onClose, variant, ...other} = props;
    const Icon = variantIcon[variant];
    const messageStyle = {marginLeft: '10px'};
    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message} color={amber} aria-label={message}>
                    <Typography variant={"body2"} style={messageStyle} gutterBottom>
                      <Icon className={clsx(classes.icon, classes.iconVariant)}/> {message}
                    </Typography>
        </span>
            }
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon}/>
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.string,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

class CodeChange extends Component {

    constructor(props) {
        super(props);
        this.state = {textValue: '',  textValue2: '', snackBarOpen: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        CodeChange.renderButton = CodeChange.renderButton.bind(this);
        if (window.location.state === undefined) {
            window.location.state = {endButtonEnabled: false}
        } else {
            window.location.state = {
                endButtonEnabled: true,
                role: window.location.state.role,
                burgerAltValue: window.location.state.burgerAltValue,
            };
        }
    }

    componentDidMount() {
        Prism.highlightAll();
        if (window.location.state.role !== undefined ) {
            const el0 = document.getElementById("first");
            el0.value = window.location.state.role;
            CodeChange.doEvent(el0, 'input');


        }
    }

    handleChange(event) {
        this.setState({textValue: event.target.value}, () => {
            console.log('handled change value: ' + this.state.textValue);
            Prism.highlightAll();
        });

    }




    handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({snackBarOpen: false}, () => {
            console.log('SnackBar Closed')
        })
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log('Role updated as: ' + this.state.textValue);
        if (window.location.state.role != null &&
            window.location.state.endButtonEnabled != null) {
            window.location.state = {
                role: this.state.textValue,
                endButtonEnabled: true
            };
            navigate(process.env.PUBLIC_URL+'/FormUpdated');
        } else if (this.state.textValue === '' ) {
            this.setState({snackBarOpen: true});
        } else {
            window.location.state = {
                role: this.state.textValue,
                burgerAltValue: this.state.textValue2,
                endButtonEnabled: true
            };
            navigate(process.env.PUBLIC_URL+'/FormUpdated');
        }
        Prism.highlightAll();
    }

    static renderButton() {
        const buttonEnabled = window.location.state.endButtonEnabled;
        const buttonStyle = {marginLeft: '10px'};
        if (buttonEnabled) {
            return (<Button href={process.env.PUBLIC_URL+"/FormUpdated"} aria-label={"End Activity"}
                            variant={"contained"} color={"secondary"} style={buttonStyle}>
                End Activity
            </Button>);
        }
    }

    static doEvent(obj, event) {
        const eventInit = new Event(event, {target: obj, bubbles: true});
        return obj ? obj.dispatchEvent(eventInit) : false;
    }

    render() {
        const paperStyle = {marginLeft: "10px", marginRight: "10px", marginTop: "20px"};
        return (
            <div>
                <CodeUpdateHeader heading={"Make Code Changes"} justifyAlignment={"space-between"}
                                  helpMessage={"#Placeholder"}/>
                <form onSubmit={this.handleSubmit} noValidate autoComplete={"off"}>
                    <Paper style={paperStyle}>
				<pre>
                      <code className="language-html">
					  {`/* add the following in the input: <a class="skip-main" href="#main">Skip to main content</a>*/
`}
                     </code>
                    <input type={"text"} id="first" style={{width: "600px"}} value={this.state.textValue} placeholder=""
                           onChange={this.handleChange}
                           aria-label={"add the following: <a class=\"skip-main\" href=\"#main\">Skip to main content</a>"}/>

                    <code className="language-html">
					  {`
<div>
    <header>...</header>
</div>
<div>
    <nav>...</nav>
</div>
    <form id="main">...</form>
</div>
                        `}
                    </code>
				</pre>
                    </Paper>
                    <br/>
                    <br/>
                    <Button type={"submit"} aria-label={"Update Code"} variant={"contained"}
                            color={"primary"}>
                        Update Code
                    </Button>
                    {CodeChange.renderButton()}
                </form>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.snackBarOpen}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <MySnackbarContentWrapper
                        onClose={this.handleClose}
                        variant="warning"
                        message="Please type code before updating code!"
                    />
                </Snackbar>
            </div>
        );
    };

}

export default CodeChange;