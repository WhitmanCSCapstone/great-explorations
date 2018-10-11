import React from 'react';
import { Button } from 'antd';

class ReadSheetTest extends React.Component {
  state = {
    show: false
  }
    
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    var form = null;
    var buttonText = "Show Form";
    if (this.state.show) {
        buttonText = "Hide Form";
        form = (
          <div>
            <br />
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd1sLdB-sNR0X2F5C6lMEPU_tagEjNvMIaq3Ar-1Krs9mtl8A/viewform?embedded=true"
             width="600" height="1055" frameborder="0" marginheight="0" marginwidth="0">
              Loading...
            </iframe>
          </div>
        );
    }
    
    return (
      <div>
        <Button type="primary" onClick={() => this.handleClick()}>
            {buttonText}
        </Button>
        {form}
      </div>
    );
  }
}

export default ReadSheetTest
