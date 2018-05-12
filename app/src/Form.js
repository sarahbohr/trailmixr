import React from 'react'
import Geocode from 'react-geocode'
import axios from 'axios'
import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        address: '',
        maxDistance: '',
        maxResults: ''
      }

    this.geoCode = this.geoCode.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  geoCode = props => {
    Geocode.setApiKey('AIzaSyCkMvvTFeM7uqK9CcqeavnXnLky7NYym3o')
    Geocode.enableDebug()
    console.log('Props:', props)
    return Geocode.fromAddress(props.address)
      .then(res => {
        const { lat, lng } = res.results[0].geometry.location
        const coords = {
          lat: lat,
          lng: lng,
          maxDistance: this.state.maxDistance,
          maxResults: this.state.maxResults
        }
      this.setState(coords)
      console.log('Coords:', coords)
      return coords
      })
    }

  handleChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    
    this.geoCode(this.state)
    .then(res => {
      console.log('handleSubmit:', this.state)
      this.setState({
        lat: res.lat,
        lng: res.lng,
        maxDistance: res.maxDistance,
        maxResults: res.maxResults
      })
      const apiKey = '200240757-32116253e69ba7842c59fc6768d54577'
      const apiUrl = `https://www.hikingproject.com/data/get-trails?lat=${res.lat}&lon=${res.lng}&maxDistance=${res.maxDistance}&maxResults=${res.maxResults}&key=${apiKey}`
      return apiUrl
    }
  )
  .then(this.getTrails)
  }

getTrails = apiUrl => { 
  return axios
  .get(apiUrl)
  .then(res => {
    this.props.onSubmit(res.data)
  })
  .then(
    this.setState({ 
      value: ''
    })
  )
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="address">Address or landmark</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="ex: 80205, Denver, City Park"
              />
          </div>
        </div>
        <div className="form-row">
        <div className="form-group col-md-3">
            <label htmlFor="maxDistance">Search radius in miles</label>
              <input 
                type="text" 
                name="maxDistance"
                className="form-control"
                value={this.state.maxDistance}
                onChange={this.handleChange} 
              />
            <small id="returnNum" className="form-text">Default is 30, max is 200</small>
          </div>
          <div className="form-group col-md-3">
            <label htmlFor="maxResults">No. of results</label>
              <input 
                type="text" 
                name="maxResults"
                className="form-control"
                value={this.state.maxResults}
                onChange={this.handleChange} 
              />
            <small id="returnNum" className="form-text">Default is 10, max is 500</small>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <button className="btn btn-primary" type="submit">Submit</button>
          </div>
        </div>
      </form>
    )
  }
}
export default Form
