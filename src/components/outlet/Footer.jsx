import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-[#F8EBE9] text-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {/* Logo & Intro */}
          <div>
            <img
              src="/footer_logo.png"
              className="h-10 mb-4 "
            />
            <p className="text-sm">
            Providing quality content every day, tinn.edu.vn helps you practice English certifications with AI and
            high-quality courses.
            </p>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-semibold mb-3">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/chinh-sach-bao-mat" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/chinh-sach-thanh-toan" className="hover:underline">Payment Policy</a></li>
              <li><a href="/chinh-sach-doi-tra" className="hover:underline">Return Policy</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/shop" className="hover:underline">Shop on our system</a></li>
              <li><a href="/blog/huong-dan-mo-shop-ban-acc-mien-phi" className="hover:underline">Shop Setup Guide</a></li>
              <li><a href="/mo-shop" className="hover:underline">Open Free Shop</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:support@phuthang.net" className="hover:underline"><FontAwesomeIcon icon={faEnvelope}/> Email</a></li>
              <li><a href="tel:+84123456789" className="hover:underline"><FontAwesomeIcon icon={faPhone}/> Hotline</a></li>
              <li><a href="https://facebook.com/phuthangnet" target="_blank" rel="noopener noreferrer" className="hover:underline"><FontAwesomeIcon icon={faFacebook}/> Fanpage</a></li>
              <li><a href="https://m.me/phuthangnet" target="_blank" rel="noopener noreferrer" className="hover:underline"><FontAwesomeIcon icon={faMessage}/> Messenger</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-600">
          © 2025 <strong>tinn.edu.vn</strong> - All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
