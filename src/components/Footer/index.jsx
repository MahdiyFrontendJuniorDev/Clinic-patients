import React from 'react'
import {
  FaFacebookF,
  FaTelegramPlane,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'
function Footer() {
  return (
    <footer className="border-t">
      <div>
        <div className="top-footer flex items-center justify-between p-20">
          <div className="left flex flex-col space-y-12">
            <a className="font-light text-xl" href="tel:(888)6668135">
              (888) 666-8135
            </a>
            <div className="social-icons flex items-center space-x-3 ">
              <FaFacebookF className="h-6 w-6" />
              <FaTelegramPlane className="h-6 w-6" />
              <FaLinkedinIn className="h-6 w-6" />
              <FaTwitter className="h-6 w-6" />
            </div>
          </div>
          <div className="right flex space-x-20">
            <ul>
              <h1 className="font-semibold">CAREERS</h1>
              <li className="text-gray-400">Job Listing</li>
            </ul>
            <ul>
              <h1 className="font-semibold">ABOUT</h1>
              <li className="text-gray-400">Our Solutions</li>
              <li className="text-gray-400">Company</li>
              <li className="text-gray-400">Press</li>
              <li className="text-gray-400">Contact</li>
            </ul>
            <ul>
              <h1 className="font-semibold">RESOURCES</h1>
              <li className="text-gray-400">eBooks</li>
              <li className="text-gray-400">Videos</li>
              <li className="text-gray-400">Blog</li>
            </ul>
            <ul>
              <h1 className="font-semibold">FIND A DOCTOR</h1>
              <li className="text-gray-400">... by Insurance</li>
              <li className="text-gray-400">... by Speciality</li>
              <li className="text-gray-400">... by Location</li>
            </ul>
          </div>
        </div>
        <div className="bottom-footer border-t flex justify-between px-14 py-12">
          <div>
            <p className='text-gray-400'> &copy; 2022 Doctor.com</p>
          </div>

          <ul className="flex space-x-12">
            <li className="text-gray-400">Privacy</li>
            <li className="text-gray-400">Terms of Service </li>
            <li className="text-gray-400">Accessibility Statement</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
