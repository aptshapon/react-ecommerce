const INTIAL_STATE = {
    sections: [{
        title: 'hats', 
        imageUrl: 'https://i.ibb.co/N3YJnGz/hats.png',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets', 
        imageUrl: 'https://i.ibb.co/1M6wG5b/jackets.png',
        id: 2,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'sneakers', 
        imageUrl: 'https://i.ibb.co/x341b2v/sneakers.png',
        id: 3,
        linkUrl: 'shop/sneakers'
    },
    {
        title: 'womens', 
        imageUrl: 'https://i.ibb.co/vQmrgdS/womens.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/womens'
    },
    {
        title: 'mens', 
        imageUrl: 'https://i.ibb.co/xst0G3f/men.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/mens'
    }]
};

const directoryReducer = (state = INTIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;