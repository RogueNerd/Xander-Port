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
          Hi! I’m Xander. I am a 23 year old who loves to learn and explore new things. I am a big D&D and fantasy nerd, nature lover, and a serial hobbyist. 
          From wood working to building computers to reptile care and farming, I absolutely adore learning and developing my skills with whatever interests me.
          I’ve spent 8 years honing my skills to become a Jack of all Trades employee to best support the businesses I’ve worked for. 
          I’ve managed the kitchen of a multi million dollar restaurant to installing and am currently servicing networking infrastructure
           for a multibillion dollar corporation I have the experience and skills to get the job done well.
            
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
           I have worked building, servicing, and repairing hardware for Best Buy 
           as well as managing server and networking infrastructure in a dozen stores
           across the US. Providing support for multimillion dollar stores to managing
           the infrastructure of a Mom and Pop pet store I can provide support for any size
           project you need.
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
            long form podcast Scripts or infomative essays. I have had a love
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
