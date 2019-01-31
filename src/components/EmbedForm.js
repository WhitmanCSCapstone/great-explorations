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
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc1S8bJnqgAhxw4pw0y6O7gK_pJbvkCejaJl3M1JnXBa3r_5w/viewform?embedded=true"
             width="640" height="4357" frameborder="0" marginheight="0" marginwidth="0" title="Embedded Registration Form">
              Loading...
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
