import React, { Component } from 'react';
import './App.css';
var PHOTODATA = [{
    id: 1,
    category: 'Cats',
    imageUrl: '8.jpg'
}, {
    id: 2,
    category: 'Nature',
    imageUrl: '1.jpg'
}, {
    id: 3,
    category: 'Cars',
    imageUrl: '3.jpg'
}, {
    id: 4,
    category: 'Cats',
    imageUrl: '7.jpg'
}, {
    id: 5,
    category: 'Cars',
    imageUrl: '4.jpg'
}, {
    id: 6,
    category: 'Dogs',
    imageUrl: '6.jpg'
}, {
    id: 7,
    category: 'Nature',
    imageUrl: '2.jpg'
}, {
    id: 8,
    category: 'Dogs',
    imageUrl: '5.jpg'
}
];


class CategorySection extends Component {
    constructor(props) {
        super(props);
        this.state = { category: PHOTODATA }
        this.getValonClick = this.getValonClick.bind(this)
        this.imageRender = this.imageRender.bind(this)
        this.buttonRender = this.buttonRender.bind(this)
        this.resetFilter = this.resetFilter.bind(this)
    }
    resetFilter() {
        this.setState({ category: PHOTODATA })
    }

    getValonClick(e) {
        var val = e.target.innerHTML
        var array_filtered = [];
        array_filtered = PHOTODATA.filter(function (value) {
            return value.category === val
        })
        this.setState({ category: array_filtered })

    }

    imageRender(element, key) {
        return <Images imgsources={element.imageUrl} key={key}></Images>
    }

    buttonRender(element, key) {

        return <button key={key} onClick={this.getValonClick} className="ui brown inverted button">{element}</button>
    }

    render() {
        let categories = []
        PHOTODATA.forEach(function (el) {
            if (categories.indexOf(el.category) === -1) {
                categories.push(el.category);
            }
        })

       
        return (
            <div>
                <div className='imageWrapper'>
                    <div className='filterButtons'>
                        <button onClick={this.resetFilter.bind(this)} className="button">Reset Filter</button>
                        {categories.map(this.buttonRender)}
                    </div>
                    <div className='fadedImages'>
                        {this.state.category.map(this.imageRender)}
                    </div>
                </div>
            </div>
        )
    }
}
export { CategorySection }

class Images extends Component {
    render() {
        const { imgsources } = this.props;
        const source = require(`../images/${imgsources}`)
        return (
            <img className='imagesAll' alt = '' src={source} />
        )
    }
}
export { Images }

class Application extends Component {
    render() {
        return (
            <div>
                <CategorySection />
            </div>
        )
    }
}
export { Application }


