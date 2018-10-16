import React from 'react';
import { Popover } from 'antd';
import './Grid.css';

class WorkshopMenu extends React.Component {
    render() {
        const content = (
            <div>
                <p>Julie Lauenburg: Art Educator; Mira Gobel: Principal</p>
                <p>Fuse physics and art with pendulum painting! Warning: could be messy.</p>
            </div>
        );
        const tagline = "Art of the Pendulum";
        const workshopName = "Art in Physics";
        return( 
            <Popover content={content} title={ tagline } trigger="hover" overlayStyle={{ width: "300px" }}>
                        <div className="gutter-box"> { workshopName } </div>
            </Popover>
        )
    }
}

export default WorkshopMenu;