import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <a href='/' className='logo'></a>
        <input id='menu-toggle' type='checkbox' />
        <label className='menu-button-container' for='menu-toggle'>
         </label>
        <ul className='menu'>
          <li>Home</li>
          <li>Products</li> 
          <li className='basket'></li> 
        </ul> 
      </header>
      <section className='section__discover'>
        <div className='content'>
          <div>
            <h1>Discover the vast expanses of <span>space</span></h1>
            <span>Where the possibilities are <span>endless!</span></span>
            <button className='learn-more'>Learn more</button>
          </div>
          <div className='earth'></div>
        </div>
      </section>
      <section className='section__offers'> 
        <div className='content'>
          <h2>Offers</h2>
          <article className='full-width article-1'>
            <h3>Move the borders of reality!</h3>
            <span>Go on a space adventure - it's possible with us!</span>
            <button className='learn-more'>Learn more</button>
          </article>
          <article className='half-width article-2'>
            <h3>Space is not just stars and planets</h3>
            <span>Go on a space adventure</span>
            <button className='learn-more'>Learn more</button>
          </article>
          <article className='half-width article-3'>
            <h3>For those who dream of stars </h3>
            <span>Our offer: make your dream come true</span>
            <button className='learn-more'>Learn more</button>
          </article>
          <article className='full-width article-4'>
            <h3>Fulfill your fantastic dreams</h3>
            <span>Space has never been so close</span>
            <button className='learn-more'>Learn more</button>
          </article>
          <article className='post-article'>
  <input type="checkbox" class="read-more-state" id="post-1" />
            <h4>Embark on a space journey</h4>
            <p className="read-more-wrap">Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. <span class="read-more-target">We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</span></p>
  <label for="post-1" class="read-more-trigger"></label>
          </article>
        </div>
      </section>

      <footer>
        <div className='footer-content'>
          <span>Exciting space adventure!</span>
        </div> 
      </footer>
    </div>
  );
}

export default App;
