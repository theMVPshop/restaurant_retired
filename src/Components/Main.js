import classes from '../resources/css/Main.module.css'
import KoreanBi from '../resources/css/img/images/100_1040312_mercer_knives_0391_fweb-400x400.jpg';
import Pizza from '../resources/css/img/images/223_1r140806_eat_spots_sobanndls-400x400.jpg';
import Chicken from '../resources/css/img/images/238E6F3800000578-2851992-image-3_1417106023786-400x400.jpg';
import Soup from '../resources/css/img/images/Orleans-Somerville-2-400x400.jpeg';
import Beef from '../resources/css/img/images/Shakshouka-Tanya-Zouev-400x400.jpg';
import Egg from '../resources/css/img/images/vickerys-bar-atlanta-400x400.jpg';
import Burger from '../resources/css/img/images/untitled-8538-400x400.jpg';
import Dumpling from '../resources/css/img/images/dumpling_new-1024x764-400x400.jpg';
import OurStory from '../resources/css/img/images/OurStory.png';
import Steak from '../resources/css/img/images/steak.jpeg';




const Main = () => {
  return (
    <div>
    <header>
      <div className={classes['hero-text-box']}>
        <h1 className={classes.welcome}>Welcome to</h1>
        <h2 className={classes.grand}>GRAND</h2>
        <h2 className={classes.restaurant}>RESTAURANT</h2>
        <p>Making Delicious food since 1990</p>
      </div>
    </header>
    <section className="section-features js--section-features" id="features">
      <div className={classes['intro-section']}>
        <h2 class={classes.intro}>Until I discovered cooking I was never really interesting in anything.</h2>
        <p className={classes.founder}>
          Our founder John Phillipe
        </p>
        <p className={classes.john}>John Phillipe</p>
      </div>
      <div className={classes['section-steps']}>
        <div><img src={OurStory} alt="our story background"/></div>
      </div>
      <div className={classes.steak}>
        <img src={Steak} alt="steak sizzling on the grill"/>
      </div>     
    </section>
    <section className={classes['section-meals']}>
      <h2>Gallery</h2>
      <ul className={`${classes['meals-showcase']} ${classes.clearfix}`}>
        <li>
          <figure className={classes['meal-photo']}>
            <img src={KoreanBi} alt="Korean bibimbap with egg and vegetables" />
          </figure>
        </li>
        <li>
        <figure className={classes['meal-photo']}>
            <img src={Pizza} alt="Simple italian pizza with cherry tomatoes" />
          </figure>
        </li>
        <li>
        <figure className={classes['meal-photo']}>
            <img src={Chicken} alt="Chicken breast steak with vegetables" />
          </figure>
        </li>
        <li>
        <figure className={classes['meal-photo']}>
            <img src={Soup} alt="Autumn pumpkin soup"/>
          </figure>
        </li>
      </ul>
      <ul className={`${classes['meals-showcase']} ${classes.clearfix}`}>
        <li>
          <figure className={classes['meal-photo']}>
            <img src={Beef} alt="Paleo beef steak with vegetables" />
          </figure>
        </li>
        <li>
          <figure className={classes['meal-photo']}>
            <img src={Egg} alt="Healthy baguette with egg and vegetables" />
          </figure>
        </li>
        <li>
          <figure className={classes['meal-photo']}>
            <img src={Burger} alt="Burger with cheddar and bacon" />
          </figure>
        </li>
        <li>
          <figure className={classes['meal-photo']}>
            <img src={Dumpling} alt="Granola with cherries and strawberries" />
          </figure>
        </li>
      </ul>
    </section>
    <section className={classes['section-form']}>
      <div className={classes.row}>
        <h2>We're happy to hear from you</h2>
      </div>
      <div className={classes.row}>
        <form method="post" action="#" className={classes['contact-form']}>
          <div className={classes.row}>
            <div className={`${classes.col} ${classes['span-1-of-3']}`}>
              <label htmlFor="name">Name</label>
            </div>
            <div className={`${classes.col} ${classes['span-2-of-3']}`}>
              <input type="text" name="name" id="name" placeholder="Your name" required />
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col} ${classes['span-1-of-3']}`}>
              <label htmlFor="email">Email</label>
            </div>
            <div className={`${classes.col} ${classes['span-2-of-3']}`}>
              <input type="email" name="email" id="email" placeholder="Your email" required />
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col} ${classes['span-1-of-3']}`}>
              <label htmlFor="find-us">How did you find us?</label>
            </div>
            <div className={`${classes.col} ${classes['span-2-of-3']}`}>
              <select name="find-us" id="find-us">
                <option value="friends" selected>Friends</option>
                <option value="search">Search engine</option>
                <option value="ad">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col} ${classes['span-1-of-3']}`}>
              <label>Newsletter?</label>
            </div>
            <div className={`${classes.col} ${classes['span-2-of-3']}`}>
              <input type="checkbox" name="news" id="news" defaultChecked /> Yes, please
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col} ${classes['span-1-of-3']}`}>
              <label>Drop us a line</label>
            </div>
            <div className={`${classes.col} ${classes['span-2-of-3']}`}>
              <textarea name="message" placeholder="Your message" defaultValue={""} />
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col} ${classes['span-1-of-3']}`}>
              <label>&nbsp;</label>
            </div>
            <div className={`${classes.col} ${classes['span-2-of-3']}`}>
              <input type="submit" defaultValue="Send it!" />
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>

  );
}

    export default Main;