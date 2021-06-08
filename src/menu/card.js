import React, {useState} from 'react';
import {Container, Grid} from "@material-ui/core";
import {Link} from "react-router-dom";
import './card.css';

const Card = ({array}) => {

    const [basket, setBasket] = useState([]);
    const addToCard = (pro) => {
        setBasket([...basket, pro])
    };

    return (
        <Container>
            <div className="basket">
                <button>Basket {basket.length}</button>
            </div>
            <Grid container spacing={12}>
                {
                    array.map((el, idx) => (
                        <Grid className='card' key={idx} item lg={4}>
                            <Link to={`/cards/${el.name}`}>
                                <img src={el.image} alt=""/>
                                <h1>{el.name}</h1>
                                <p>{el.description}</p>
                                <div className='span'>
                                    <span>{el.price} сомов</span>
                                </div>
                            </Link>
                            <div className="btn">
                                <button onClick={addToCard}>Add to card</button>
                            </div>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Card;