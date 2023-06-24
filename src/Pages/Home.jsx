import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Nav1 from '../Components/Nav1';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the products from the server
    axios.get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Nav1 />
      <Container>
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={12} md={6} lg={4}>
              <Card>
                <Card.Img variant="top" src={product.plantImage} />
                <Card.Body>
                  <Card.Title>{product.plantName}</Card.Title>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
