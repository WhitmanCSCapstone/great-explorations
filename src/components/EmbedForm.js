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
          <div>
            <br />
              <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfaS_8XD8Sru6o56KNEh9Bkuwa6ntL50XRgi2OOf0_NGzbuYQ/viewform?embedded=true"
                  width="640" height="4374" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
              </iframe>
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
