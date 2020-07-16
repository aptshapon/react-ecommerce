import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';



class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [{
                title: 'hats', 
                imageUrl: 'https://i.ibb.co/N3YJnGz/hats.png',
                id: 1,
                linkUrl: 'hats'
            },
            {
                title: 'jackets', 
                imageUrl: 'https://i.ibb.co/1M6wG5b/jackets.png',
                id: 2,
                linkUrl: ''
            },
            {
                title: 'sneakers', 
                imageUrl: 'https://i.ibb.co/x341b2v/sneakers.png',
                id: 3,
                linkUrl: ''
            },
            {
                title: 'womens', 
                imageUrl: 'https://i.ibb.co/vQmrgdS/womens.png',
                size: 'large',
                id: 4,
                linkUrl: ''
            },
            {
                title: 'mens', 
                imageUrl: 'https://i.ibb.co/xst0G3f/men.png',
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