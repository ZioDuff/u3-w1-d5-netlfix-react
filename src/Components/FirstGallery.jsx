import { Component } from "react"
import { Col, Row } from "react-bootstrap"

class FirstGallery extends Component {
  state = {
    object: [],
  }

  firstFetch = () => {
    console.log("fetch in corso...")
    fetch("http://www.omdbapi.com/?apikey=10ec8eea&s=" + this.props.film)
      .then((response) => {
        if (response.ok) {
          console.log("fetch conclusa")
          return response.json()
        } else throw new Error("errore nella richesta ")
      })
      .then((response) => {
        // this.setState({ object: response })
        console.log(response.Search)
        this.setState({ object: response.Search })
      })
      .catch((err) => console.log(err))
  }
  componentDidMount() {
    this.firstFetch()
  }

  render() {
    return (
      <>
        <Row xs={1} sm={2} md={3} lg={6} className="mb-4">
          {this.state.object.slice(0, 6).map((obj) => {
            return (
              <Col key={obj.imdbID} className="col mb-2 text-center px-1">
                <img className="img-fluid" src={obj.Poster} alt={obj.Title} />
              </Col>
            )
          })}
        </Row>
      </>
    )
  }
}
export default FirstGallery
