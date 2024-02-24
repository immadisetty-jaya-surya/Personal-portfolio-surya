import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Return a cleanup function
    return () => {
      clearTimeout(timerId)
    }
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I am quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          {/* <p>
            If I need to define myself in one sentence that would be a family
            person and tech-obsessed!!!
          </p> */}
        </div>

        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#dd0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#f06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#28a4d9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGitAlt} color="#5ed4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color="#efd81d" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
