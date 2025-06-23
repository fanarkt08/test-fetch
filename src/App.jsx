import { useState, useEffect } from 'react';
import Product from './components/Product';
import callApi from './utils/api';
import { Container, Row, Col, Button } from 'react-bootstrap';

const newProduct = async () => {
    const data = await callApi('POST', 'https://fakestoreapi.com/products', {
      title: "Nouveau produit",
      price: 29.99,
      description: "Un super produit ajouté via API",
      image: "https://via.placeholder.com/150",
      category: "electronics",
    });
    alert(`Le produit avec l'id ${data.id} a été créé`);
};

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
    <Container className="my-4 d-flex flex-column">
      <Button onClick={newProduct} className="mb-3">
        Ajouter un produit
      </Button>
      <Row className="gx-1 gy-1">
        {products.map(product => (
          <Col key={product.id} sm={6} md={4} lg={3} className="my-2">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;
