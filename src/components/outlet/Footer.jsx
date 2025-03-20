import { faFacebook, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer id='contact' className='bg-[#F8EBE9] px-[6vw]'>
      <div className='flex justify-between border-b border-gray-500 py-[3vw] text-xs'>
        <div className='flex gap-2 lg:gap-14'>
          <div className='w-[35vw] lg:w-[25vw]'>
            <img src='/footer_logo.png' alt='' className='w-[15vw] lg:w-36' />
            <p className='mt-6 text-gray-400'>
              Providing quality content every day, tinn.edu.vn helps you practice English certifications with AI and
              high-quality courses.
            </p>
          </div>
          <div>
            <h3 className='text-sm font-semibold'>Quick Links</h3>
            <ul className='mt-2 space-y-2'>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Services
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-400 hover:text-white'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-semibold'>Connect with Us</h3>
          <div className='mt-3 flex space-x-4'>
            <a href='#' className='text-gray-400 hover:text-white'>
              <FontAwesomeIcon icon={faFacebook} className='h-5' />
            </a>
            <a href='#' className='text-gray-400 hover:text-white'>
              <FontAwesomeIcon icon={faGithub} className='h-5' />
            </a>
            <a href='#' className='text-gray-400 hover:text-white'>
              <FontAwesomeIcon icon={faLinkedin} className='h-5' />
            </a>
            <a href='#' className='text-gray-400 hover:text-white'>
              <FontAwesomeIcon icon={faYoutube} className='h-5' />
            </a>
          </div>
        </div>
      </div>
      <p className='py-3 text-center text-xs text-gray-500'>
        &copy; {new Date().getFullYear()} tin.edu.vn All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
