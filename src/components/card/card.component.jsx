import { Component } from 'react';
import './card.style.css';

class Card extends Component {
    render() {
        const {title,images,category} = this.props.monster;
            return (
                <div className='card-container'>
                    <img src={images} alt={`monster ${title}`} />
                    <h2>{category.name}</h2>
                </div>
            );
    }
}

export default Card;