import React from 'react';
import Zoom from 'react-reveal';


class ZoomClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div className='zoom-btn'>
        <Zoom left when={this.state.show}>
          <h1>ROAD TRIP</h1>
        </Zoom>
        
        <button
          className="btn btn-success my-5"
          type="button"
          onClick={this.handleClick}>
        
          { this.state.show } Click here
        </button>
      </div>
    );
  }
}

export default ZoomClass;