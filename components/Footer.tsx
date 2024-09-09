import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-around items-start md:items-center'>
          {/* Navigation Links */}
          <div className='flex flex-col mb-6 md:mb-0'>
            <h2 className='text-xl font-bold mb-4'>Kategorie</h2>
            <ul className='space-y-2 font-semibold'>
              <li>
                <a href="#" className='hover:underline'>Domov</a>
              </li>
              <li>
                <a href="#" className='hover:underline'>O Nás</a>
              </li>
              <li>
                <a href="#" className='hover:underline'>Náhradné vozidlá</a>
              </li>
              <li>
                <a href="#" className='hover:underline'>Správa o nehode</a>
              </li>
              <li>
                <a href="#" className='hover:underline'>Čísla poisťovní</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='flex flex-col mb-6 md:mb-0'>
            <h2 className='text-xl font-bold mb-4'>Kontaktné údaje</h2>
            <ul className='space-y-2 text-sm'>
              <li>
                Telefon: <span className='font-semibold'>18 001</span>
              </li>
              <li>
                Zo zahraničia: <span className='font-semibold'>+421 911 456 456</span>
              </li>
              <li>
                Dispečing: <span className='font-semibold'>+421 911 551 556</span>
              </li>
              <li>
                Email: <span className='font-semibold'>info@proassist.sk</span>
              </li>
              <li>
                Adresa: <span className='font-semibold'>Vyšehradská 25</span>
              </li>
              <li>
                <span className='font-semibold'>851 06 Bratislava</span>
              </li>
              <li>
                Kancelárie: <span className='font-semibold'>Panónska cesta 34</span>
              </li>
              <li>
                <span className='font-semibold'>Bratislava</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='flex justify-center space-x-6 mt-6'>
          <a href="https://www.facebook.com/yourprofile" className='text-white hover:text-blue-500'>
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.instagram.com/yourprofile" className='text-white hover:text-pink-500'>
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-700 mt-6 pt-4 text-center'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} <span className='text-blue-600'>ProAssist</span>. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;