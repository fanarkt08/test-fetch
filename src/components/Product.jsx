import { Card, Button } from 'react-bootstrap';
import callApi from '../utils/api';
import '../assets/Product.scss';

const updatedProduct = async (id) => {
  const data = await callApi('PUT', `https://fakestoreapi.com/products/${id}`, {
    title: "Produit mis à jour",
    price: 49.99,
    description: "Description mise à jour",
    image: "https://via.placeholder.com/150",
    category: "electronics"
  });
  if (data) {
    alert(`Le produit avec l'id ${id} a été modifié`);
  }
};

const patchedProduct = async (id) => {
  const data = await callApi('PATCH', `https://fakestoreapi.com/products/${id}`, {
    price: 5,
  });
  alert(`Le prix du produit avec l'id ${data.id} a été modifié`);
};

const deleteProduct = async (id) => {
  const data = await callApi('DELETE', `https://fakestoreapi.com/products/${id}`);
  alert(`Le produit avec l'id ${id} a été supprimé`);
};

function Product({ product }) {
  return (
    <Card className="mb-3 h-100 mx-2">
      <Card.Img className="h-100 overflow-hidden"
        variant="top"
        src={product.image}
        alt={product.title}
      />
      <Card.Body>
        <Card.Title>
          {product.title}
        </Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          {product.price} €
        </Card.Text>
        <Button onClick={() => updatedProduct(product.id)} className="mb-3">
          Modifier le produit complet
        </Button>
        <Button onClick={() => patchedProduct(product.id)} className="mb-3">
          Modifier le prix du produit
        </Button>
        <Button onClick={() => deleteProduct(product.id)} className="mb-3">
          Supprimer le produit
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
