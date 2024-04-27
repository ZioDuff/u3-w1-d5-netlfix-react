import { Component } from "react"
import { Col, Row, Spinner } from "react-bootstrap"
// qua creiamo il nostro componente questa volta a classe perchè doovremmo gestire la fetch e poi il suo "state"
class FirstGallery extends Component {
  // questo è lo state che comprende due valori, uno per gestire l'array in arrivo dalla fetch e l'altro per gesire lo spinner in fase di caricamento
  state = {
    object: [],
    isLoading: false,
  }
  // creiamo una funzione a parte per stabilire la nostra fetch senza doverla creare nel nostro "ComponentDidMount"
  firstFetch = () => {
    // qui cambimao lo stato del nostro spinner per poterlo visualizzare in fase di caricamento della fetch
    this.setState({ isLoading: true })
    console.log("fetch in corso...")
    // qui rendiamo l'ultima parte della nostra API dinamica tramite le props in modo cambiarla a nostro piacimento
    fetch("http://www.omdbapi.com/?apikey=10ec8eea&s=" + this.props.film)
      .then((response) => {
        if (response.ok) {
          // console.log("fetch conclusa")
          return response.json()
        } else throw new Error("errore nella richesta ")
      })
      .then((response) => {
        // console.log(response.Search)
        // qui andiamo a cambiare il valore di object (presente nel nostro stato) con l'array in arrivo
        this.setState({ object: response.Search })
      })
      .catch((err) => console.log(err))
      // con il finally gli andiamo a dire che in qualsiasi caso finisca la nostra fetch lo stato dello spinnere deve ritornare false
      .finally(() => this.setState({ isLoading: false }))
  }
  componentDidMount() {
    // qui è dove viene richiata effetivamente la fetch che partira una volta sola
    this.firstFetch()
  }

  render() {
    return (
      <>
        {/* qui andiamo ad inserire lo spinner e lo facciamo con un "short circuit" */}
        {this.state.isLoading && <Spinner animation="border" variant="light" />}
        {/* andiamo a controllare la lunghezza dell'arraye è lo stato di del nostro spinner e solo una volta fatto cio andiamo a fare il map del nostor array */}
        {this.state.object.length > 0 && !this.state.isLoading && (
          <Row xs={1} sm={2} md={3} lg={6} className="mb-4">
            {this.state.object.slice(0, 6).map((obj) => {
              return (
                // con il map il primo figlio deve avere sempre la key di identificazione in questo caso la colonna che ospita la nostra img
                <Col key={obj.imdbID} className="col mb-2 text-center px-1">
                  <img className="img-fluid" src={obj.Poster} alt={obj.Title} />
                </Col>
              )
            })}
          </Row>
        )}
      </>
    )
  }
}
export default FirstGallery
