
const Footer = () => {
  return (
    <div className='bg-[#0C0C0C] h-[200px] flex flex-row justify-between'>
        <div className='h-full w-full flex justify-center p-6'>
            <ul className="text-slate-200 font-semibold">
                <li>Domov</li>
                <li>Služby</li>
                <li>O Nás</li>
                <li>Kontakt</li>
            </ul>
        </div>
        <div className='h-full w-full flex justify-center p-6'>
          <ul className="text-slate-200">
            <li>Karloveská 416/49</li>
            <li>841 04 <span className="font-semibold">Bratislava</span></li>
            <li>+421 918 722 720</li>
          </ul>
        </div>
    </div>
  )
}

export default Footer;
