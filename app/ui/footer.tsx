import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <p>Rey Hernández 2025</p>
            </div>
          </div>
          <div>
            <Link href="https://www.instagram.com/reylosophy?igsh=MWd6Y2Q1bnV3ODA5MQ==" target="_blank" rel="noopener noreferrer" >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}