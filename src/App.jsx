import { useState, useEffect } from 'react';
import Product from './components/Product';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <Container className="my-4">
      <Row className="gx-1 gy-1 d-flex flex-wrap">
        {products.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
