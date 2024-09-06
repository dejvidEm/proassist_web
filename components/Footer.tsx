
const Footer = () => {
  return (
    <div className='bg-[#0C0C0C] py-4 flex flex-row justify-between'>
        <div className='h-full w-full flex justify-center p-6'>
            <ul className="text-slate-200 font-semibold">
                <li>Domov</li>
                <li>O Nás</li>
                <li>Náhradné vozidlá</li>
                <li>Správa o nehode</li>
                <li>Čísla poisťovní</li>
            </ul>
        </div>
        <div className='h-full w-full flex justify-center p-6'>
          <ul className="text-slate-200">
            <li>Telefon: 18 001</li>
            <li>Zo zahraničia: +421 911 456 456</li>
            <li>Dispečing: +421 911 551 556</li>
            <li>Email: info@proassist.sk</li>
            <li>Adresa: Vyšehradská 25</li>
            <li>        851 06 Bratislava</li>
            <li>Kancelárie: Panónska cesta 34</li>
            <li>        Bratislava</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer;
