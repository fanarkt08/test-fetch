import { Card } from 'react-bootstrap';
import '../assets/Product.scss';

function Product({ product }) {
  return (
    <Card className="mb-3 h-100 mx-2">
      <div className="product-image-wrapper">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
        <Card.Body>
            <Card.Title>{
                product.title}
            </Card.Title>
            <Card.Text>
                {product.description.substring(0, 150)}...
            </Card.Text>
            <Card.Text>
                {product.price} €
            </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default Product;
