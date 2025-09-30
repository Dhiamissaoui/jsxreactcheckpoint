import product from '../product';

const Image = () => {
    return (
        <img
            src={product.image}
            alt={product.name}
            className="product-image"
            style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '8px'
            }}
        />
    );
};

export default Image;