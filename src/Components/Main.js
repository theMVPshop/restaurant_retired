import classes from '../resources/css/Main.module.css'
import KoreanBi from '../resources/css/img/images/100_1040312_mercer_knives_0391_fweb-400x400.jpg';
import Pizza from '../resources/css/img/images/223_1r140806_eat_spots_sobanndls-400x400.jpg';
import Chicken from '../resources/css/img/images/238E6F3800000578-2851992-image-3_1417106023786-400x400.jpg';
import Soup from '../resources/css/img/images/Orleans-Somerville-2-400x400.jpeg';
import Beef from '../resources/css/img/images/Shakshouka-Tanya-Zouev-400x400.jpg';
import Egg from '../resources/css/img/images/vickerys-bar-atlanta-400x400.jpg';
import Burger from '../resources/css/img/images/untitled-8538-400x400.jpg';
import Dumpling from '../resources/css/img/images/dumpling_new-1024x764-400x400.jpg';




const Main = () => {
  return (
    <div>
    <header>
      <div className={classes['hero-text-box']}>
        <h1>Welcome to Grand Avenue</h1>
        <h3>Making Delicious food since 1990</h3>
      </div>
    </header>
    <section className="section-features js--section-features" id="features">
      <div className={classes.row}>
        <h2>Until I discovered cooking I was never really interesting in anything.</h2>
        <p className={classes['long-copy']}>
          Our founder John Phillipe
        </p>
      </div>
      <div className={classes['section-steps']}>
        <h2>Discover Our Story</h2>
        <h3>Ultimate Dining Experience like no other</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla aliquam lacinia eros, sit amet blandit ligula dictum sed. 
          Phasellus blandit tortor vitae diam sollicitudin aliquam. Nullam non 
          tortor volutpat, malesuada leo eu, tincidunt tellus. Maecenas luctus purus enim, 
          nec semper eros porta non. Sed semper tincidunt lectus vitae blandit. Quisque et 
          venenatis magna. Sed nec erat tortor. In interdum nisi massa, non sagittis lectus 
          lacinia eget. Vestibulum mollis ipsum luctus dui convallis egestas. Aenean est est, 
          porttitor a tincidunt feugiat, interdum sit amet odio. In convallis felis sit amet 
          porta dapibus. Mauris at lectus urna. Etiam id lacus at ipsum placerat rhoncus. 
          Sed in tempor dolor. Phasellus pretium eleifend diam, quis maximus dolor sodales et. 
          Pellentesque auctor id risus vitae malesuada.</p>
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