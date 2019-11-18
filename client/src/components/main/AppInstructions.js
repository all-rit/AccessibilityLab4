import React, {Component} from 'react';

class AppInstructions extends Component {

    render() {
        return <p className="app__instructions">{this.props.instructions}</p>;
    }
}

export default AppInstructions;
