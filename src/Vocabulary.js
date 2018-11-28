import React, { Component } from 'react';
import Button from  './Button';

class Vocabulary extends Component {

    render() {
        return (
          <div className="vocabulary">
              <div className="vocabulary-header">
                  <div className="vocabulary-text">Vocabulary</div>
                  <Button className="fa-play-circle-o" type="button-play"/>
              </div>
              <hr/>
              <div className="vocabulary-text">transition of vocabulary</div>
          </div>
        );
    }
}

export default Vocabulary;
