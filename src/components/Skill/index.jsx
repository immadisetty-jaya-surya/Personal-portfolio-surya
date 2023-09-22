import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import resume from '../Skill/Simple_Professional_CV surya resume prof of.pdf'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons'

const Skill = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const handleDownload = () => {
    const resumePath = resume
    const link = document.createElement('a')
    link.href = resumePath
    link.setAttribute('download', 'My_Resume.pdf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
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
      <div className="container skill-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['Skills', ' ', '&', ' ', 'Experience']}
              idx={15}
            />
          </h1>
          <p>
            Expert in front-end development including technologies like-
            <span className="skill-highlight">
              HTML5,CSS3, JavaScript, React, python, github, Bootstrap, Sass,
              Git, Axios,
            </span>
            etc.
          </p>
          <p>
            I'm not a designer but I have a good sense of aesthetics, and
            experience in responsive web design. I put special effort into
            optimizing my code and providing the best user experience.I would
            love to give you any kind of support also after the projects
            completion. I guarantee a commitment during work on your project.
          </p>
          <div className="resume-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['Education', ' ', '&', ' ', 'Resume']}
                idx={18}
              />
            </h1>
            <ul>
              <li>
                I have completed my 10th standard in Dr,kkr's Gowtham school
                from guntur with 9.5 CGPA
              </li>
              <li>
                I have completed my Intermediate standard in Sri chaitanya
                junior college from vijayawada with 9.23 CGPA
              </li>
              <li>
                I have completed my engineering in sathyabama university and
                passed out with 8.77 CGPA
              </li>
            </ul>
            <div className="college-block">
              Sathyabama Institute of science & technology-Chennai, <br />
              B.E in Electronics & communication Engineering.
              <span className="year">2019-Present</span>
            </div>
            <div className="resume-download">
              <button onClick={handleDownload}>Download Resume</button>
              <button className="ghclass">
                <a
                  className="ghlink"
                  href="https://github.com/immadisetty-jaya-surya"
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
                <FontAwesomeIcon icon={faGithub} />
                View all Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skill
