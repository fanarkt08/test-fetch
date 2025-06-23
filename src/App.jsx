import { useState, useEffect } from 'react';
import Product from './components/Product';
import callApi from './utils/api';
import endpoint from './utils/endpoint';
import { Container, Row, Col, Button } from 'react-bootstrap';

const newProduct = async () => {
    const data = await callApi('POST', endpoint, {
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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(endpoint);

        if (!response.ok) {
          const message = `Erreur HTTP pour GET ${endpoint}. Détail : ${response.statusText ? response.statusText + ' - ' : ''}${response.status}`;
          throw new Error(message);
        }

        const data = await response.json();
        setProducts(data);

      } catch (err) {
        setError(`Une erreur est survenue lors de votre requête.`);
        console.error(err.message); 

      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (error) return <p className="text-danger">Erreur : {error}</p>;

  if (loading) return <p className="text-center mt-5">Chargement des produits...</p>;

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
