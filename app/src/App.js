import React from 'react'
// import Header from './Header'
import Form from './Form'
import TrailList from './TrailList'
// import Footer from './Footer'



class App extends React.Component {
  state = { trails: [] }

  addNewTrail = trailInfo => {
    this.setState({trails: trailInfo.trails})
  }

  render() {
    return (
      <div>
        {/* <Header /> */}
        <Form onSubmit={this.addNewTrail} />
        <TrailList trails={this.state.trails} />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App