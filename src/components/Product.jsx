import { Card } from 'react-bootstrap';
import '../assets/Product.scss';

function Product({ product }) {
  return (
    <Card className="mb-3 h-100 mx-2">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
      />
      <Card.Body>
        <Card.Title>{
            product.title}
        </Card.Title>
        <Card.Text>
            {product.description}
        </Card.Text>
        <Card.Text>
            {product.price} €
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
