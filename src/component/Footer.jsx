import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";

export const Footer = () => {
    return(
        <>
          <div id="about" className="bg-amber-400 py-8 lg:flex justify-around"> 
            <div className="flex justify-around sm:justify-evenly lg:gap-32 xl:gap-40">
              <div>
                  <p className="font-medium text-xl">Community</p>    
                  <div>
                      <ul className="flex mt-4 gap-4">
                        <li className="text-3xl"><a href="#"><FaSquareXTwitter /></a></li>
                        <li className="text-3xl"><a href="#"><FaLinkedin /></a></li>
                        <li className="text-3xl"><a href="#"><FaWhatsappSquare /></a></li>
                      </ul>
                  </div>
                  <div>
                      <ul className="flex mt-4 gap-4">
                        <li className="text-3xl"><a href="#"><BsInstagram /></a></li>
                        <li className="text-3xl"><a href="#"><FaDiscord /></a></li>
                        <li className="text-3xl"><a href="#"><BsTelegram /></a></li>
                      </ul>
                  </div>
              </div>
              <div>
                  <p className="font-medium text-xl">About Us</p>
                  <ul className="mt-2">
                      <li>News</li>
                      <li>Terms</li>
                      <li>Privacy</li>
                      <li>Blog</li>
                  </ul>
              </div>
            </div>
            <div className="flex justify-around mt-4 sm:justify-evenly lg:gap-32 lg:mt-0  xl:gap-40">
              <div>
                  <p className="font-medium text-xl">Service</p>
                  <ul className="mt-2">
                      <li>Referral</li>
                      <li>Trading Insight</li>
                      <li>OTC Trading</li>
                      <li>Affiliate</li>
                  </ul>
              </div>
              <div id="contact">
                  <p className="font-medium text-xl">Support</p>
                  <ul className="mt-2">
                      <li>Support Center</li>
                      <li>Trading Rules</li>
                      <li>24/7 Chat Support</li>
                      <li>+91999999999</li>
                  </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="bg-amber-400 flex justify-center py-2">  
            <p>Crypto Tab © 2025. Made By Sonu Kathat</p>
          </div>
        </>
    )
}