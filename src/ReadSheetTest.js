import React from 'react';
import { Button } from 'antd';
import { SHEET_DATA, SHEET_LOAD } from "./SheetUtil";

class ReadSheetTest extends React.Component {
  state = {
    people: [],
    error: null,
    show: false
  }
  
  initClient = () => {
    window.gapi.client
      .init({
        apiKey: SHEET_DATA.apiKey,
        discoveryDocs: SHEET_DATA.discoveryDocs
      })
      .then(() => {
      SHEET_LOAD(this.onLoad);
    });
  };
  
  onLoad = (data, error) => {
    if (data) {
      const people = data.people;
      this.setState({ people });
    } else {
      this.setState({ error });
    }
  };
    
  componentDidMount() {
    window.gapi.load("client", this.initClient);
  }
    
  handleClick() {
    this.setState({ show: !this.state.show });
  }

  render() {
    if (this.state.error) {
      return <div>{this.state.error}</div>;
    }
    
    var ulist = null;
    var buttonText = "Show Emails";
    if (this.state.show) {
        buttonText = "Hide Emails";
        ulist = (
          <div>
            <hr />
            <small>
              {this.state.people.map((person, i) => (
                <div>{person.email}</div>
              ))}
            </small>
            <hr />
          </div>
        );
    }
    
    return (
      <div>
        <Button type="primary" onClick={() => this.handleClick()}>
            {buttonText}
        </Button>
        {ulist}
      </div>
    );
  }
}

export default ReadSheetTest
