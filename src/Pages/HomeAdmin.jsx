import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Nav1 from '../Components/Nav1';
import axios from 'axios';

export default function HomeAdmin() {
  const [plantName, setPlantName] = useState('');
  const [plantImage, setPlantImage] = useState('');

  const handlePlantNameChange = (e) => {
    setPlantName(e.target.value);
  };

  const handlePlantImageChange = (e) => {
    setPlantImage(e.target.value);
  };

  const handleAddProduct = () => {
    const newProduct = {
      plantName: plantName,
      plantImage: plantImage,
    };

    axios
      .post('http://localhost:3001/api/products', newProduct)
      .then((response) => {
        console.log(response.data);
        // Handle success, e.g., show a success message or update the product list
        alert('Product is added'); // Display alert message
      })
      .catch((error) => {
        console.error(error);
        // Handle error, e.g., show an error message
      });
  };

  return (
    <div>
      <Nav1 />
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Plant Name</Form.Label>
                    <Form.Control type="text" value={plantName} onChange={handlePlantNameChange} />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Plant Image URL</Form.Label>
                    <Form.Control type="text" value={plantImage} onChange={handlePlantImageChange} />
                  </Form.Group>
                  <Button variant="primary" onClick={handleAddProduct}>
                    Add Product
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
