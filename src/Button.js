import React, { Component } from 'react';
import omit from 'object.omit';

class Button extends Component {

    render() {
        const htmlProps = omit(this.props, 'className', 'type');

        return (
            <button {...htmlProps} className={"button " + this.props.type}>
                <i className={"button-icon fa "+this.props.className} aria-hidden="true"></i>
            </button>
            );
        }
}

export default Button;
