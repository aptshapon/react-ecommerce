import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';



class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats', 
                imageUrl: 'https://i.ibb.co/Xk5S0Qy/hats-fedora-hat-manufacture-stack.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets', 
                imageUrl: 'https://i.ibb.co/zb35b18/pexels-photo-996329.png',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'sneakers', 
                imageUrl: 'https://i.ibb.co/0Md5JKz/pexels-photo-322207.png',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'womens', 
                imageUrl: 'https://i.ibb.co/kJQtGN2/pexels-photo-934070.png',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'mens', 
                imageUrl: 'https://i.ibb.co/StnLwxy/pexels-photo-325876.png',
                size: 'large',
                id: 5,
                linkUrl: ''
            }]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))}
            </div>
        )
    }
}

export default Directory;