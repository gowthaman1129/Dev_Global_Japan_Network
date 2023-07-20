import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/global_japan_network_limited.png'
import Button from './button'


export default function Header() {
  return (
    // <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
    //   <Link href="/" className="hover:underline">
    //     Blog
    //   </Link>
    //   .
    // </h2>
    <div className='relative top-0 z-10 w-full'>
      <div className='xl:container absolute top-0 left-0'>
        <div className='flex justify-between items-center	'>
         <a href=''>
            <Image src={Logo} alt="global japan network limited" width="300" height="250"/>
          </a>
          <div className=''>
            <ul className='flex items-center'>
              <li className='px-6 hover:text-accent'><Link href=''>About Us</Link></li>
              <li className='px-6 hover:text-accent'><Link href=''>Product</Link></li>
              <li className='px-6 hover:text-accent'><Link href=''>Services</Link></li>
              <li className='px-6 hover:text-accent'><Link href=''>Works</Link></li>
              <li className='px-6 hover:text-accent'><Link href=''>Blog</Link></li>
              <li className='px-6 hover:text-accent'>
                <Button text="Contact Us"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
