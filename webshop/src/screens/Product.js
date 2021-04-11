import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Rating from "./Rating";

export default class Product extends Component {
    render() {
        return (
            <Card className='my-3 p-3 rounded'>
                <Link to={`/product/${this.props.product._id}`}>
                <Card.Img src={this.props.product.image}/>
                <Card.Body >
                    <Card.Title as='div'>
                    <strong>{this.props.product.name}</strong>
                    </Card.Title>
                </Card.Body>
                
                <Card.Text as='div'>
                    <div className="my-3">
                        

                        <Rating value={this.props.product.rating} text={`${this.props.product.numReviews} reviews`} colour={'#f8e25'}/>

                    </div>
                   
                </Card.Text>
            
            <Card.Text as='h4'>
                ${this.props.product.price}
            </Card.Text>
            </Link>
            </Card>
            
        )
    }
}
