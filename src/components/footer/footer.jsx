import React from "react";
import Logo from "../images/icon/V-logo.png";
import vkIcon from "../images/icon/vk.svg";
import facebookIcon from "../images/icon/facebook.svg";
import instagramIcon from "../images/icon/instagram.svg";
import "./footer.scss";

function LogoDescrioption() {
  return (
    <figure className="logo">
      <img src={Logo} alt="logo" />
    </figure>
  );
}

function SameLink() {
  return (
    <article className="footer-table">
      <div className="ft__tr">
        <div onDragS className="ft__th">
          General link
        </div>
        <div className="ft__td">About us</div>
        <div className="ft__td">Catalog</div>
        <div className="ft__td">Delivery</div>
        <div className="ft__td">Payment</div>
      </div>
      <div className="ft__tr">
        <div className="ft__th">Categories</div>
        <div className="ft__td">Man clothes</div>
        <div className="ft__td">Women clothes</div>
        <div className="ft__td">Baby clothes</div>
        {/* <div className='ft-td'>Choes</div> */}
      </div>
      <div className="ft__tr">
        <div className="ft__th">Useful links</div>
        <div className="ft__td">Table size</div>
        <div className="ft__td">Fashion blog</div>
        <div className="ft__td">Our mission</div>
      </div>
      <div className="ft__tr">
        <div className="ft__th">Social network</div>
        <div className="ft__td ft__icon">
          <a href="">
            <img src={vkIcon} title="vk.com" /> VK.com
          </a>
        </div>
        <div className="ft__td ft__icon">
          <a href="">
            <img src={facebookIcon} title="facebook" /> Facebook
          </a>
        </div>
        <div className="ft__td ft__icon">
          <a href="">
            <img src={instagramIcon} />
            Instagram
          </a>
        </div>
      </div>
    </article>
  );
}

function MobileDesign() {
  return (
    <div className="social-network">
      <div className="header">Social network</div>
      <div className="vk">
        <a href="">
          <img src={vkIcon} title="vk.com" /> VK.com
        </a>
      </div>
      <div className="facebook">
        <a href="">
          <img src={facebookIcon} title="facebook" /> Facebook
        </a>
      </div>
      <div className="instagram">
        <a href="">
          <img src={instagramIcon} />
          Instagram
        </a>
      </div>
    </div>
  );
}

function Footer(props) {
  return (
    <footer className="black-style-background">
      <div className="footer-top">
        <LogoDescrioption />
        <SameLink />
      </div>
      <div className="footer-mobile-design">
        <MobileDesign />
      </div>
      <div className="footer-buttom white-style-background">
        <div>All Check...</div>
        <div>Rules</div>
      </div>
    </footer>
  );
}

export default Footer;
