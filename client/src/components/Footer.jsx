import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa6";
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";

import logo from "../assets/logo.webp";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f7aadf] px-8 py-14 text-[#404040] md:px-10 lg:px-8">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.5fr] lg:gap-12">

        <div>
          {/* Logo */}
          <div className="mb-5">
            <img src={logo} width={180} alt="" srcset="" />
          </div>

          <p className="max-w-[220px] text-[15px] text-[#404040] leading-6">
            Effective and
            <br />
            Affordable skin care
            <br />
            for all
          </p>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="mb-3 text-xl font-semibold">
              Social Links
            </h3>

            <div className="h-[1px] w-[54px] bg-[#3d3d3d]" />

            <div className="mt-5 flex items-center gap-3 text-2xl text-[#991b60]">
              <Link><FaFacebookF /></Link>
              <Link><FaYoutube /></Link>
              <Link><FaInstagram /></Link>
              <Link><FaWhatsapp /></Link>
              <Link><FaTiktok /></Link>
            </div>
          </div>
        </div>


        {/* QUICK LINKS  */}
        <div>
          <h3 className="text-xl font-semibold">
            Quick Links
          </h3>

          <div className="mt-2 h-[1px] w-[54px] bg-[#3d3d3d]" />

          <ul className="mt-4 space-y-4 text-[14px]">
            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Products
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Shop
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Affiliate Program
              </a>
            </li>
          </ul>
        </div>


        {/* collections */}
        <div>
          <h3 className="text-xl font-semibold">
            Collections
          </h3>

          <div className="mt-2 h-[1px] w-[54px] bg-[#3d3d3d]" />

          <ul className="mt-4 space-y-4 text-[14px]">
            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Soap
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Toner
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Sunscreen
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Serum
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Scrub
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Others
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Shampoo
              </a>
            </li>
          </ul>
        </div>


        {/* support */}
        <div>
          <h3 className="text-xl font-semibold">
            Support
          </h3>

          <div className="mt-2 h-[1px] w-[44px] bg-[#3d3d3d]" />

          <ul className="mt-4 space-y-4 text-[14px]">
            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Return Policy
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Terms and Conditions
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#a51c69]">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>


        {/* contact*/}
        <div>
          <h3 className="text-xl font-semibold">
            Contact Information
          </h3>

          <div className="mt-2 h-[1px] w-[84px] bg-[#3d3d3d]" />

          {/* Phone */}
          <div className="mt-4 flex items-start gap-4 text-base">
            <FiPhone className="mt-1 shrink-0 text-base text-[#a51c69]" />

            <a
              href="tel:+9779841329273"
              className="transition hover:text-[#a51c69]"
            >
              +9779841329273
            </a>
          </div>

          {/* Email */}
          <div className="mt-4 text-base flex items-start gap-4 text-base">
            <FiMail className="mt-1 shrink-0 text-base text-[#a51c69]" />
            <a
              href="mailto:suavzuwa@zuwacosmetics.com"
              className="break-all transition hover:text-[#a51c69]"
            >
              suavzuwa@zuwacosmetics.com
            </a>
          </div>

          {/* Address */}
          <div className="mt-4 flex items-start gap-4 text-base leading-8">
            <FiMapPin className="mt-1 shrink-0 text-2xl text-[#a51c69]" />

            <p className="text-base">
              Ward 11, Patan Lalitpur,
              <br />
              Kathmandu, Nepal, 44700
            </p>
          </div>
        </div>

      </div>


      {/* bottom */}
      <div className="mx-auto mt-16 max-w-[1500px] border-t border-[#c984ad] pt-8 text-center">
        <p className="text-sm text-[#404040]">
          © 2026 All Rights Reserved. Zuwa Cosmetics
        </p>
      </div>

    </footer>
  );
};

export default Footer;