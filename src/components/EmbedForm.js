import React from 'react';
//import { Button } from 'antd';

class ReadSheetTest extends React.Component {
  state = {
    show: false
  }
    
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    var form = null;
    //var buttonText = "Show Form";
    /* if (this.state.show) { */
    if (true) {
        //buttonText = "Hide Form";
        form = (
          <div >
            <br />
              <iframe className='responsive-iframe'  
                  src="https://docs.google.com/forms/d/e/1FAIpQLSccOS8nboRO6R4ARSEuQcq7wcWIpL_xUrcWB95QK2nzPbFDrQ/viewform?embedded=true" 
                  height="5200" frameborder="0" >Loading…</iframe>
          </div>
        );
    }
/*
        <Button type="primary" onClick={() => this.handleClick()}>
            {buttonText}
        </Button>
*/
    return (
      <div>
        {form}
      </div>
    );
  }
}

export default ReadSheetTest
