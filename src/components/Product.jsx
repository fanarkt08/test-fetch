import { Card } from 'react-bootstrap';
import '../assets/Product.sass'; // Assure-toi que le chemin est bon

function Product({ product }) {
  return (
    <Card className="product-card mb-3">
      <div className="product-image-wrapper d-flex align-items-center justify-content-center">
        <Card.Img
          variant="top"
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>
        <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="product-description" >
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
