import {
  faFacebook,
  faYoutube,
  faXTwitter,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-[#F8EBE9] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>


          <img src="/footer_logo.png" alt="" className='h-7 mb-5'/>

          <p className="text-sm leading-relaxed mb-4">
            We’re always in search for talented and motivated people. Don’t be shy, introduce yourself. Subscribe to our newsletter.
          </p>
          <h4 className="font-semibold mb-2">Social Media</h4>
          <div className="flex gap-3">
            {[faXTwitter, faYoutube, faFacebook, faDribbble].map((icon, index) => (
              <div key={index} className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:scale-105 transition">
                <FontAwesomeIcon icon={icon} className="text-gray-800" />
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div>
          <h4 className="font-bold mb-4">Company Info</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/instructor" className="hover:underline">Instructor</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/become-instructor" className="hover:underline">Become Instructor</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Top Categories */}
        <div>
          <h4 className="font-bold mb-4">Top Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>Development</li>
            <li>Design</li>
            <li>Marketing</li>
            <li>IT & Software</li>
            <li>Health & Fitness</li>
            <li>Math & Logic</li>
            <li>Personal Development</li>
          </ul>
        </div>

        {/* App & Contact Info */}
        <div>
          <h4 className="font-bold mb-4">Download the LMS App</h4>
          <p className="text-sm mb-4">
            Join us on this journey of discovery as we explore the latest trend.
          </p>
          <div className="flex items-center gap-3 mb-2">
            <FontAwesomeIcon icon={faLocationDot} className="text-orange-500" />
            <span className="text-sm">Danang, Vietnam</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <FontAwesomeIcon icon={faPhone} className="text-orange-500" />
            <span className="text-sm">+84 859141516</span>
          </div>
        </div>
      </div>

      {/* Payment Gateway */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-600">
          © 2025 <strong>tinn.edu.vn</strong> — All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
