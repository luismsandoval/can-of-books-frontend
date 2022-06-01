import { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <Container>
        <Card bg={'light'} border={'primary'} className='text-center mb-2' style={{ width: '18rem'}}>
          <Card.Img src='img/headshot.jpg'/>
          <Card.Body>
            <Card.Header>Luis Sandoval</Card.Header>
            <Card.Text>I am software dev hello there</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    )
  }
};

export default Profile;
