import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <body>
    <div class="about__text">
            <h1 class="about__title">About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit labore earum aut blanditiis maiores eum, eos iste voluptas corporis. Quasi voluptates sint iste assumenda eligendi praesentium similique aliquid modi rem?</p>
        <Link className="btn btn-primary" to="/">
          back home
        </Link>
        </div>
        </body>
  )
}

export default About