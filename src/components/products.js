import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './name';
import Price from './Price';
import Description from './description';
import Image from './Image';

const ProductsCard = () => {
    return (
        <Card className="product-card" style={{
            maxWidth: '400px',
            margin: '0 auto',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            borderRadius: '15px',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white'
        }}>
            <Image />
            <Card.Body style={{ padding: '1.5rem' }}>
                <Name />
                <Price />
                <Description />
                <Button
                    variant="light"
                    className="mt-3 w-100"
                    style={{
                        background: 'rgba(255,255,255,0.2)',
                        border: 'none',
                        borderRadius: '25px',
                        fontWeight: 'bold',
                        color: 'white',
                        backdropFilter: 'blur(10px)'
                    }}
                >
                    Add to Cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductsCard;