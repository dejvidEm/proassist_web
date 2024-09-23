import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-6'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-around items-start md:items-start pb-8'>
          {/* Navigation Links */}
          <div className='flex flex-col mb-6 md:mb-0'>
            <h2 className='text-xl font-bold mb-4 underline underline-offset-2'>Kategorie</h2>
            <ul className='space-y-2 font-semibold'>
              <li>
                <a href="/" className='hover:underline'>Domov</a>
              </li>
              <li>
                <a href="/About" className='hover:underline'>O Nás</a>
              </li>
              <li>
                <a href="/Vehicles" className='hover:underline'>Náhradné vozidlá</a>
              </li>
              <li>
                <a href="/Report" className='hover:underline'>Správa o nehode</a>
              </li>
              <li>
                <a href="/Numbers" className='hover:underline'>Čísla poisťovní</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className='flex flex-col mb-6 md:mb-0'>
            <h2 className='text-xl font-bold mb-4 underline underline-offset-2'>Kontaktné údaje</h2>
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

          {/* Legal Information */}
          <div className='flex flex-col mb-6 md:mb-0'>
            <h2 className='text-xl font-bold mb-4 underline underline-offset-2'>Právne Informácie</h2>
            <ul className='space-y-2 font-semibold'>
              <li>
                <a
                  href="/documents/zasady_spracovania_ou.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:underline'
                >
                  Zásady spracovania os. údajov
                </a>
              </li>
              <li>
                <a
                  href="/documents/namietanie_spracovania_ou.pdf"
                  download
                  className='hover:underline'
                >
                  Namietanie spracovania os. údajov
                </a>
              </li>
              <li>
                <a
                  href="/documents/odvolanie_suhlasu.pdf"
                  download
                  className='hover:underline'
                >
                  Odvolanie súhlasu
                </a>
              </li>
              <li>
                <a
                  href="/documents/cookies.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='hover:underline'
                >
                  Používanie cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className='flex justify-center space-x-14 mt-6'>
          <a href="https://www.facebook.com/profile.php?id=61559304638830" className='text-white hover:text-blue-500 flex flex-row gap-2 items-center justify-center'>
            <FaFacebookF size={30} />Facebook
          </a>
          <a href="https://www.instagram.com/proassist_s.r.o/" className='text-white hover:text-pink-500 flex flex-row gap-2 items-center justify-center'>
            <FaInstagram size={30} />Instagram
          </a>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-700 mt-6 pt-4 text-center'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} <span className='text-blue-600'>ProAssist</span>. Všetky práva vyhradené. Chránené ochrannou známkou.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;