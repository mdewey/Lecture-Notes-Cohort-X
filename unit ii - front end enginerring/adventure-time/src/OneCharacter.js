import React, { Component } from 'react';

class OneCharacter extends Component {
    render() {
        return (
            <div>
               {this.props.match.params.name}
            </div>
        );
    }
}

export default OneCharacter;
