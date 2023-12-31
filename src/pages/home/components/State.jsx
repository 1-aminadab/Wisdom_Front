import React from 'react'

function State() {
  return (
    <div>
      <section className="section stats" aria-label="stats">
        <div className="container">

          <ul className="grid-list">

            <li>
              <div className="stats-card" 
            //   style="--color: 170, 75%, 41%"
              >
                <h3 className="card-title">4k+</h3>

                <p className="card-text">Spots Ready</p>
              </div>
            </li>

            <li>
              <div className="stats-card"
            //    style="--color: 351, 83%, 61%"
               >
                <h3 className="card-title">1K+</h3>

                <p className="card-text">Tutors Ready</p>
              </div>
            </li>

            <li>
              <div className="stats-card"
            //    style="--color: 260, 100%, 67%"
               >
                <h3 className="card-title">100%</h3>

                <p className="card-text">Satisfaction Rate</p>
              </div>
            </li>

            <li>
              <div className="stats-card"
              // style="--color: 42, 94%, 55%"
               >
                <h3 className="card-title">354+</h3>

                <p className="card-text">Top Instructors</p>
              </div>
            </li>

          </ul>

        </div>
      </section>
    </div>
  )
}

export default State