import { BsTelegram } from 'react-icons/bs';
import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'

const icons = [
  {
    id: 1,
    url: 'https://t.me/gilmanovdin',
    icon: <BsTelegram size={25} />
  },
  {
    id: 2,
    url: 'https://github.com/1-Ahmed-Salah',
    icon: <AiFillGithub size={25} />
  },
  {
    id: 3,
    url: 'https://api.whatsapp.com/send/?phone=%2B79093529290&text&type=phone_number&app_absent=0',
    icon: <AiOutlineWhatsApp size={25} />
  },
  {
    id: 4,
    url: 'https://vk.com/id635977761',
    icon: <SlSocialVkontakte size={25} />
  }
];

const Footer = () => {

  return (
    <div className="bg-[#18181b] max-w-full py-6">
        <div className="container">
            <div className="flex flex-col text-center gap-y-6 lg:flex-row justify-between text-white">
                <div className='flex items-center justify-center gap-4'>
                {
                  icons.map(icon => (
                    <a
                      key={icon.id}
                      href={icon.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {icon.icon}
                    </a>
                  ))
                } 
                </div>
                <span className="text-[18px] text-slate-300 font-light font-secondary">Made with <span className="text-red-500">&#10084;</span> By <span className=" font-bold">911 team</span> © 2023</span>
            </div>
        </div>
    </div>
  )
}

export default Footer