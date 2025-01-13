import React from 'react';
import { Row, Col, Popover } from 'antd';
import './Grid.css';
import { SHEET_LOAD, SHEET_INFO } from './SheetUtil';

class WorkshopGrid extends React.Component {
    state = {
        workshops: [],
        error: null,
        // 2025: added this for language
        currentLanguage: this.props.language, // Track the current language for updates
    }

    componentDidMount() {
        window.gapi.load("client", this.initClient);

        // 2025: Add event listener for resizing
        window.addEventListener("resize", this.updateColumns);

        // 2025: Set initial columns state
        this.setState({ columns: this.getColumnsPerRow() });
    }
    // 2025: added as part of mobile sizing fix
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateColumns);
      }

    // 2025: to recognize language change
    componentDidUpdate(prevProps) {
        if (prevProps.language !== this.props.language) {
            console.log("Language switched. Reloading workshops...");
            this.initClient(); // Reload the grid data
        }
    }
    initClient = () => {
        window.gapi.client
            .init({
                apiKey: SHEET_INFO.apiKey,
                discoveryDocs: SHEET_INFO.discoveryDocs
            })
            // .then(() => {
            //     this.loadWorkshopData();
            .then(() => {
                SHEET_LOAD(this.onLoad);
            })
            .catch(() => {
                console.error("Error initializing Google API.");
        });
    }

    reloadWorkshops = () => {
        SHEET_LOAD(this.onLoad); // Reload workshop data based on the new language
    };
    
    onLoad = (data, error) => {
        if (data) {
            var temp = data.workshops;
            var workshops = [];
            temp.map((ws, i) => {workshops.push(ws); return 0;});
            this.setState({ workshops });
        } else {
            this.setState({ error });
        }
    }

    // 2025: added for mobile readability
    getColumnsPerRow = () => {
        const width = window.innerWidth;
        if (width <= 576) return 1; // Extra small screens
        if (width <= 768) return 2; // Small screens
        if (width <= 992) return 3; // Medium screens
        return 4; // Large screens and above
      };
    
      updateColumns = () => {
        this.setState({ columns: this.getColumnsPerRow() });
      };


    //2025: new createWorkshops that is dynamic to window size
    createWorkshops = () => {
        const { workshops, columns } = this.state;
        let table = [];
        let count = 0;
        let children = [];
    
        workshops.forEach((ws) => {
          const both = (
            <div>
              <p>{ws.description}</p>
              <p>Instructor: {ws.instructor}</p>
            </div>
          );
          children.push(
            <Col 
                className="gutter-row" 
                span={columns === 1 ? 24 : 24 / columns} // Full width for one column 
                key={ws.title}
            >
              <Popover
                content={both}
                title={ws.category}
                trigger="hover"
                overlayStyle={{ width: "300px" }}
              >
                <div className="gutter-box">{ws.title}</div>
              </Popover>
            </Col>
          );
          count++;
          if (count >= columns) {
            count = 0;
            table.push(<Row gutter={16} key={table.length}>{children}</Row>);
            children = [];
          }
        });
    
        // Push any remaining items
        if (children.length > 0) {
          table.push(<Row gutter={16} key={table.length}>{children}</Row>);
        }
    
        return table;
      };
    
      render() {
        const { error } = this.state;
        if (error) {
          return <div>{error}</div>;
        }
    
        return <div className="gutter-example">{this.createWorkshops()}</div>;
      }
    }

    /*.replace(/ /g,'\u00a0')}*/
    /* createWorkshops = () => {
        let table = []

        let count = 0;
        let children = [];
        this.state.workshops.map((ws) => {
            const both = (<div><p>{ws.description}</p><p>Instructor: {ws.instructor}</p></div>);
            children.push(
                 <Col className="gutter-row" span={6}>
                    <Popover content={both} title={ws.category} trigger="hover" overlayStyle={{ width: "300px" }}>

                        <div className="gutter-box"> {ws.title} </div>

                    </Popover>
                 </Col>);
            count = count + 1;
            if (count >= 4) {
                count = 0;
                table.push(<Row gutter={"5vw"}>{children}</Row>);
                children = [];
            }
            return 0;
        });
        if (count !== 0) {
          table.push(<Row gutter={"5vw"}>{children}</Row>);
        }

        return table
    } */
    
    /* render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>;
        }
        
        return (
            <div className="gutter-example">
                {this.createWorkshops()}
            
            </div>
        ) 
    } 
} */

export default WorkshopGrid
