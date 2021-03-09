import { NavLink } from 'react-router-dom';


const Header=()=>{

    return(
        <div className="header">
        <div className="wrap">
          <div className="wrap_float">
            <div className="header__top">
              <div className="tel">
                <a href="tel:0000000000">+1 1235 6789 10</a>
              </div>
              <div className="email">
                <a href="mailto:zaghouan@gmail.com">zaghouan@gmail.com</a>
              </div>
              <div className="socials">
                <a href="#" className="a facebook"></a>
                <a href="#" className="a instagram"></a>
                <a href="#" className="a pinterest"></a>
                <a href="#" className="a twitter"></a>
              </div>
            </div>
            <div className="header__bottom">
            <div class="logo"><NavLink   to='/home'> Zaghouan</NavLink></div>

            

              <div className="menu" id="js-menu">
                <div className="close"></div>
                <div className="scroll">
                  <a className="current">Home</a>
                  <div className="scroll_wrap">
                    <ul>
                      <li>
                          <NavLink   to='/home'> Home</NavLink>
                      </li>
                      <li className="dropdown_li">
                      <NavLink   to='/about'> About</NavLink>

                      
                      </li>
                      <li className="dropdown_li">
                      <NavLink   to='/services'>Services</NavLink>

                       
                      </li>
                      <li className="dropdown_li">
                      <NavLink   to='/places'>Destination</NavLink>
                      </li>
                      <li className="dropdown_li">
                        <NavLink to="/contact">Contact</NavLink>
                       
                      </li>
                      <li className="dropdown_li">
                        <a href="blog-list.html">
                          <span>Login</span>
                        </a>
                      
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="tel">
                      <a href="tel:+11235678910">+1 1235 6789 10</a>
                    </div>
                    <div className="email">
                      <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                    </div>
                    <div className="socials">
                      <div className="links">
                        <a href="#" className="fb"></a>
                        <a href="#" className="instagram"></a>
                        <a href="#" className="pinterest"></a>
                        <a href="#" className="twitter"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search_link" id="search_link"></div>
              <div className="mobile_btn" id="mobile_btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    );


}

export default Header;