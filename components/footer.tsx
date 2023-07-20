import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/global_japan_network_limited.png'
import product from '../public/assets/global_subsidiary_management_system.jpg'

export default function Footer() {
  return (
    <footer className=" bg-light_grey">
      <Container>
        <div>
          <div className='container'>
            <div className='flex justify-between py-14 border-b border-solid border-gray-200'>
              <div className=''>
                <Link href=''>
                  <Image src={Logo} alt="global japan network limited" width="300" height="250"/>
                </Link>
              </div>
              <div className=''>
                <h4 className='text-accent text-xl py-5 font-medium'>Product</h4>
                <Link className="pb-4 block font-medium hover:text-accent" href=''>Global Subsidiary Management System</Link>
                <Link className='' href=''><Image src={product} alt="Global Subsidiary Management System" /></Link>
              </div>
              <div className=''>
                <h4 className='text-accent text-xl py-5 font-medium'>Services</h4>
                <ul className=''>
                  <li className='mb-2 font-medium'><Link className='hover:text-accent' href=''>Off-Shore Development</Link></li>
                  <li className='mb-2 font-medium'><Link className='hover:text-accent' href=''>Recruitment Services</Link></li>
                  <li className='mb-2 font-medium'><Link className='hover:text-accent' href=''>Staffing Services</Link></li>
                </ul>
              </div>
              <div className='flex column'>
                <ul className='py-5'>
                  <li><Link className='text-accent mb-4 block font-medium text-xl hover:text-black' href=''>Works</Link></li>
                  <li><Link className='text-accent mb-4 block font-medium text-xl hover:text-black' href=''>About Us</Link></li>
                  <li><Link className='text-accent mb-4 block font-medium text-xl hover:text-black' href=''>Contact US</Link></li>
                  <li><Link className='text-accent mb-4 block font-medium text-xl hover:text-black' href=''>Blog</Link></li>
                </ul>
              </div>
            </div>
            <div className='flex justify-between py-14 items-center border-b border-solid border-gray-200'>
              <div className=''>
                <h2 className='text-3xl font-semibold leading-normal'>Stay Connect <br /> With Us</h2>
              </div>
              <div className=''>
                <ul className='flex gap-x-20 items-center'>
                  <li>
                    <Link className='hover:bg-accent' href=''>
                      <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 2.40469C24.0703 2.8125 23.0797 3.08281 22.0469 3.21406C23.1094 2.57969 23.9203 1.58281 24.3016 0.38125C23.3109 0.971875 22.2172 1.38906 21.0516 1.62188C20.1109 0.620313 18.7703 0 17.3078 0C14.4703 0 12.1859 2.30313 12.1859 5.12656C12.1859 5.53281 12.2203 5.92344 12.3047 6.29531C8.04375 6.0875 4.27344 4.04531 1.74062 0.934375C1.29844 1.70156 1.03906 2.57969 1.03906 3.525C1.03906 5.3 1.95312 6.87344 3.31562 7.78437C2.49219 7.76875 1.68437 7.52969 1 7.15313V7.20937C1 9.7 2.77656 11.7688 5.10625 12.2453C4.68906 12.3594 4.23438 12.4141 3.7625 12.4141C3.43438 12.4141 3.10312 12.3953 2.79219 12.3266C3.45625 14.3562 5.34063 15.8484 7.58125 15.8969C5.8375 17.2609 3.62344 18.0828 1.22656 18.0828C0.80625 18.0828 0.403125 18.0641 0 18.0125C2.27031 19.4766 4.96094 20.3125 7.8625 20.3125C17.2937 20.3125 22.45 12.5 22.45 5.72812C22.45 5.50156 22.4422 5.28281 22.4312 5.06563C23.4484 4.34375 24.3031 3.44219 25 2.40469Z" fill="#727070"/>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link className='' href=''>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0996 4.88246e-05C14.3531 0.025765 16.389 0.579639 18.2073 1.66167C20.0038 2.72207 21.4982 4.22563 22.5476 6.02856C23.623 7.8577 24.1736 9.90592 24.1992 12.1732C24.1354 15.2755 23.1569 17.925 21.2638 20.122C19.3708 22.319 16.9462 23.6781 14.4363 24.1992V15.5016H16.8092L17.3458 12.0836H13.7527V9.84497C13.7328 9.38088 13.8796 8.92497 14.1665 8.55967C14.4538 8.19336 14.9599 8.00083 15.6846 7.98208H17.8543V4.98804C17.8231 4.97801 17.5277 4.9384 16.9681 4.86919C16.3333 4.79492 15.695 4.75524 15.056 4.75034C13.6096 4.75702 12.4657 5.16502 11.6243 5.97437C10.7828 6.78345 10.353 7.95402 10.3348 9.48608V12.0836H7.60039V15.5016H10.3348V24.1992C7.25298 23.6782 4.82842 22.319 2.93535 20.1221C1.04229 17.9251 0.0638672 15.2754 0 12.1732C0.0255534 9.90583 0.576074 7.8576 1.65156 6.02856C2.701 4.22562 4.19543 2.72204 5.99194 1.66162C7.81011 0.579818 9.84598 0.0259928 12.0996 4.88246e-05Z" fill="#727070"/>
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link className='' href=''>
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7671 4.62598C19.4325 4.62598 19.1602 4.89829 19.1602 5.23291C19.1602 5.56753 19.4325 5.83984 19.7671 5.83984C20.1018 5.83984 20.3741 5.56758 20.3741 5.23291C20.3741 4.89824 20.1018 4.62598 19.7671 4.62598ZM12.5 7.11938C9.53309 7.11938 7.11932 9.53315 7.11932 12.5C7.11932 15.4669 9.53309 17.8808 12.5 17.8808C15.4669 17.8808 17.8807 15.467 17.8807 12.5001C17.8807 9.5332 15.4669 7.11938 12.5 7.11938Z" fill="#727070"/>
                        <path d="M18.1466 0H6.85337C3.07441 0 0 3.07441 0 6.85342V18.1466C0 21.9256 3.07441 25 6.85337 25H18.1466C21.9256 25 25 21.9256 25 18.1466V6.85342C25 3.07441 21.9256 0 18.1466 0ZM12.5 19.357C8.71899 19.357 5.64302 16.281 5.64302 12.5C5.64302 8.71899 8.71904 5.64307 12.5 5.64307C16.281 5.64307 19.357 8.71904 19.357 12.5C19.357 16.281 16.281 19.357 12.5 19.357ZM19.7671 7.31621C18.6184 7.31621 17.6838 6.38164 17.6838 5.23291C17.6838 4.08418 18.6184 3.14956 19.7671 3.14956C20.9159 3.14956 21.8504 4.08413 21.8504 5.23286C21.8504 6.38159 20.9159 7.31621 19.7671 7.31621Z" fill="#727070"/>
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className='py-14 flex items-center justify-between'>
              <div className=''>
                <p className='font-medium text-lg'>&#169; 2023 Global Japan Networks</p>
              </div>
              <div className="">
                <ul className='flex items-center gap-x-10'>
                  <li><Link className='font-medium hover:text-accent text-lg' href=''>Terms & Conditions</Link></li>
                  <li><h4 className='font-medium text-lg'>&</h4></li>
                  <li><Link className='font-medium hover:text-accent text-lg' href=''>Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
