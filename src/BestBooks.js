import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  async componentDidMount() {
    let url = `${process.env.SERVER}/books`;
    const response = await axios.get(url);
    this.setState({ books: response.data })
  }

  render() {
    console.log(this.state.books);
    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Carousel>
          {this.state.books.length ? this.state.books.map(value => (
            <Carousel.Item key={value._id}>
              <Carousel.Caption>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )) : (
            <h3>No Books Found :(</h3>
          )
          }
        </Carousel>
      </>
    )
  }
}

export default BestBooks;
