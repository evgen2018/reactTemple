import React, { Component } from 'react';
import Button from  './Button';
import ProgressIndicator from  './ProgressIndicator';

class ProgressBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        };
    }

    addProgress = () => {
        if (this.state.progress !== 100){
            this.setState({progress:this.state.progress+10});
        }
    };

    resetProgress = () => {
        this.setState({progress:0});
    };

    render() {
        return (
            <div className="progress-block">
                <Button className='fa-home' type="button-home" onClick={this.resetProgress}/>
                <ProgressIndicator progress={this.state.progress}/>
                <Button className='fa-fast-forward' type="button-fast-forward" onClick={this.addProgress}/>
            </div>
        );
    }
}

export default ProgressBlock;
