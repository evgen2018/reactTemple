import React, { Component } from 'react';

class ProgressIndicator extends Component {

    render() {
        return (
            <div className="indicator-progress-wrap">
                <span className="indicator-text">
                    Dein heutiges Trainings-Pensum
                </span>
                <div className="out-indicator-progress" >
                    <div className="indicator-progress" style={{width:this.props.progress+'%'}}></div>
                </div>
            </div>
    );
    }
}

export default ProgressIndicator;
