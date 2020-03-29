import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Introduction</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Hi! I'm Xander. Im a half Swedish half American, 19 year old,
            computer science and journalism student. I have a variety of experience
            Programming, Writing, and Computer Hardware Work. As well as having worked
            as a Kitchen Manager. From running a kitchen during rush hour to designing,
            creating, and implementing cloud servers I always utilize my heritage with
            the minimalism and efficiency of the Scandinavian style and the work ethic
            and persistence of the American way. I'll let my work speak for itself and
            I hope that we can connect and get started working together.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Coding and Hardware</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            I'm currently a Computer Science Student at Utah Valley University.
            I have been programming as an interest or working towards a profession
            for 5 years now. I worked as an intern for 6 months with <a href= "https://www.offersync.com">OfferSync</a> to develop webpages and transfer
            user data from an inhouse data base to a cloud based service. I am currently
            focusing on React.js Developing for websites and working on several AWS certificates
            as well as other Dev-Ops certifications.
          </p>
          <p>
            I have worked building and servicing hardware as a small business for local
            people and neighbours and I'm well versed in software managment and installation
            and general IT work. I have built serveral PCs, and maintained systems in a 
            resturaunt setting. I have also worked with all types of mobile devices and gaming devices.
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Writing</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            I have been a writer for almost a decade. Writing for personal stories,
            long form podcast style histories or infomative essays. I have had a love
            of the RPG games Dungeons and Dragons and PathFinder and have written campaigns
            and world building lore for a variety of settings and games. I am currently
            working on a journalism degree in order to find work and boost my resume. I work
            on <a href="https://www.writers.work/xanderk">Writers Work</a> as a way 
            to demonstrate my portfolio.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>If you are interested in working with me and want to get in contact you can
            fill out the form or find me on a social media below, and I trust that we can
            work together to create the best product for your needs!
          </p>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/RogueXander"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/roguenerd/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RogueNerd"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
