import React from 'react'
import './TrailList.css'

const TrailList = props => {
  let trails = props.trails
    if (trails.length !== 0) {
      let trailsList = trails.map(trail => {
          return (
            <li className="trail-card" key={trail.id}>
              <h1>{trail.name}</h1>
                <div className="row">
                  <div className="col-sm-4">
                    {trail.length} miles
                  </div>
                  <div className="col-sm-4">
                    Trail status: {trail.conditionStatus}
                  </div>
                  <div className="col-sm-4">
                    Trailhead: {trail.latitude}, {trail.longitude}
                  </div>
                </div>
            </li>
          )
      })
    return ( <ul>{trailsList}</ul>  )
    }
    return <div></div>
  }

  export default TrailList