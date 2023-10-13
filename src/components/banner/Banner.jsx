import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Button } from 'react-scroll';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'

const Banner = () => {
  return (
    <div className='min-h-[100vh] flex items-center' name='home'>
      <div className="container">
        <div className='flex justify-between '>

          {/* text */}
          <div className='text-white'>
            <motion.h1 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              className='text-[30px] md:text-[40px] lg:text-[50px] xl:text-[70px] font-bold font-secondary uppercase'
            >
              Hello <span className='text-primary'>There!</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn('up', 0.8)}
              initial='hidden'
              whileInView={'show'}
              className='max-w-md lg:max-w-2xl text-[14px] md:text-[18px] t text-slate-300 font-light font-secondary mb-6'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quo cum, praesentium nulla reiciendis facere ut sunt quas soluta hic! Aut sed voluptatibus delectus, enim repellendus eveniet architecto amet ipsum.
            </motion.p>

            <div className='flex items-center gap-8'>
              <motion.div
                variants={fadeIn('up', 1.2)}
                initial='hidden'
                whileInView={'show'}
                className='flex gap-4'
              >
                <Button 
                  to="contact"
                  smooth={true}
                  delay={500}
                  className='btn btn-sm font-secondary'
                >
                  Contact
                </Button>

              </motion.div>

              <motion.div
                variants={fadeIn('up', 1.2)}
                initial='hidden'
                whileInView={'show'}
              >
                <div className='flex items-center gap-4'>
                  <a
                    href='#'
                    target='_blank'
                  >
                    <BsTelegram size={23} color='#fff' />
                  </a>
                  <a
                    href='#'
                    target='_blank'
                  >
                    <AiFillGithub size={23} color='#fff' />
                  </a>

                  <a 
                    href="#"
                    target='_blank'
                  >
                    <SlSocialVkontakte size={23} color='#fff' />
                </a>
                </div>
              </motion.div>

            </div>
          </div>

          {/* image */}
          <motion.div
            variants={fadeIn('down', 1.2)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex max-w-[380px]'
          >
            <img 
              src="banner.svg" 
              alt="banner-home"
              className='w-full h-full ' 
            />
          </motion.div>
          
          <motion.div
            variants={fadeIn('up', 1.5)}
            initial='hidden'
            whileInView={'show'}
            className='absolute bottom-10'
          >
            <Button 
              to="about"
              smooth={true}
              delay={500}
              
              className=' w-[40px] h-[60px] flex justify-center items-center bg-transparent border rounded-full'
            >
              <MdKeyboardArrowDown size={25} color='#fff' className='animate-bounce' />
            </Button>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

export default Banner