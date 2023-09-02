import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Jyothi Santoshi Karuturi</h3>
        <p>
        I'm a computer science graduate student who is deeply enthusiastic about Full Stack Development.  I possess a strong drive for crafting user-friendly interfaces coupled with a backend that can easily scale. Furthermore, I have a keen interest in delving into the realm of data structures and algorithms. I enjoy taking on intricate problems directly, aiming to provide technically robust solutions that operate with optimal effectiveness.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header