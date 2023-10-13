import Image1 from '../../../public/fast.png';
import Image2 from '../../../public/responsive.png';
import Image3 from '../../../public/idea.png';
import Image4 from '../../../public/rocket.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {


  return (
    <div className='section' name='services'>
      <div className="container">
        <div className='max-w-[99%]'>

          {/* text */}
          <div className='text-white text-center mb-10'>
            <motion.h2 
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              className='mb-3 text-[22px] md:text-[30px] lg:text-[40px] uppercase font-secondary font-semibold'
            >
              Our <span className='text-primary'>Services</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              className='mb-4 text-[17px] md:text-[20px] lg:text-[22px] font-medium font-secondary'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </motion.p>
          </div>

          {/* services */}
          <div className='flex flex-col lg:flex-row lg:justify-center lg:items-center gap-7 text-white py-8'>

            <motion.div 
              variants={fadeIn('right', 1.2)}
              initial='hidden'
              whileInView={'show'}
              className='p-5 py-10 lg:w-[360px] bg-[#18181b] rounded-lg flex gap-6 border-t-2 border-t-red-500'
            >
              <img src={Image1} alt="" className='w-[40px] h-[40px]' />
              <div>
                <h3 className='text-[20px] font-medium mb-2 font-secondary'>Fast</h3>
                <p className='text-[14px] font-secondary text-slate-300'>
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              className='flex flex-col gap-7'
            >

              <div className='p-5 py-10 lg:w-[360px] bg-[#18181b] rounded-lg flex gap-6 border-t-2 border-t-indigo-500'>
                <img src={Image2} alt="" className='w-[40px] h-[40px]' />
                <div>
                  <h3 className='text-[20px] font-medium mb-2 font-secondary'>Responsive</h3>
                  <p className='text-[14px] font-secondary text-slate-300'>
                    My layouts will work on any device, big or small.
                  </p>
                </div>
              </div>

              <div className='p-5 py-10 lg:w-[360px] bg-[#18181b] rounded-lg flex gap-6 border-t-2 border-t-yellow-500'>
                <img src={Image3} alt="" className='w-[40px] h-[40px]' />
                <div>
                  <h3 className='text-[20px] font-medium mb-2 font-secondary'>Intuitive</h3>
                  <p className='text-[14px] font-secondary text-slate-300'>
                    Strong preference for easy to use, intuitive UX/UI.
                  </p>
                </div>
              </div>

            </motion.div>

            <motion.div 
              variants={fadeIn('left', 1.2)}
              initial='hidden'
              whileInView={'show'}
              className='p-5 py-10 lg:w-[360px] bg-[#18181b] rounded-lg flex gap-6 border-t-2 border-t-pink-500'
            >
              <img src={Image4} alt="" className='w-[40px] h-[40px]' />
              <div>
                <h3 className='text-[20px] font-medium mb-2 font-secondary'>Dynamic</h3>
                <p className='text-[14px] font-secondary text-slate-300'>
                  Websites don't have to be static, I love making pages come to life.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Services