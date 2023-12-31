import { works } from './data.js';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants.js';
import { CiLocationArrow1 } from 'react-icons/ci'

const Work = () => {
  return (
    <div className='section' name='work'>
      <div className="container">
        <div>

          {/* text */}
          <div className='text-white text-center mb-10'>
            <motion.h2 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.3}} 
              className='mb-3 text-[22px] md:text-[30px] lg:text-[40px] uppercase font-secondary font-semibold'
            >
              Our <span className='text-primary'>Work</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: true, amount: 0.5}} 
              className='mb-4 text-[17px] md:text-[20px] lg:text-[22px] font-medium font-secondary'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
          </div>

          {/* work */}
          <motion.div 
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.3}} 
            className='grid grid-cols-1 gap-y-6 lg:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 '
          >
            {
              works.map(work => (
                <div 
                  key={work.id}
                  className='bg-[#18181b] rounded-xl relative group overflow-hidden '
                >
                  

                  <img 
                    src={work.img} 
                    alt="" 
                    className='w-full group-hover:scale-125 duration-300'
                  />

                  {/* overlay */}
                  <div className='group-hover:bg-black/70 h-full w-full absolute top-0 left-0 right-0 z-30 duration-300'></div>
                    
                    <div className='absolute -bottom-full group-hover:bottom-6 w-full flex justify-between gap-6 items-center mt-6 z-40 duration-1000 px-8'>
                    <div className=''>
                      <h3
                        className='text-[25px] font-secondary font-semibold'
                      >
                        {work.title}
                      </h3>
                      <p className='text-[14px] text-slate-300 font-secondary '>
                        {work.teq}
                      </p>
                    </div>
                    <div>
                      <a 
                        href={work.url}
                        target='_blank'
                        rel='noreferrer'
                        className='w-[38px] h-[38px] bg-primary rounded-full flex flex- justify-center items-center'
                      >
                        <CiLocationArrow1 size={23} fontWeight='bold'/>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </motion.div>

        </div>
      </div>
    </div>
  )
}

export default Work