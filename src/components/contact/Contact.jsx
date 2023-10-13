import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className="section" name='contact'>
        <div className="container">
            <div className='flex flex-col justify-center lg:flex-row lg:justify-between '>

              {/* text */}
              <div className='text-white'>
                <motion.h2 
                  variants={fadeIn('right', 0.3)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: true, amount: 0.7}} 
                  className='mb-3 text-[22px] md:text-[30px] lg:text-[40px] uppercase font-secondary font-semibold'
                >
                  Get In <span className='text-primary'>Touch</span>
                </motion.h2>
                <motion.p 
                  variants={fadeIn('right', 0.5)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once: true, amount: 0.7}} 
                  className='mb-4 text-[17px] md:text-[20px] lg:text-[22px] font-medium font-secondary'
                >
                  Let's Work together!
                </motion.p>
              </div>

              {/* form */}
              <motion.div
                variants={fadeIn('left', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: true, amount: 0.7}} 
              >
                <form 
                  action=""
                  className='flex flex-col gap-6 w-full lg:w-[490px] bg-[#18181b] p-6 rounded-xl'
                >
                  <div className='flex flex-col lg:flex-row lg:justify-between gap-5'>
                    <div className='w-[100%]'>
                      <input 
                        type="text" 
                        placeholder='First Name' 
                        className='bg-transparent border-b border-gray-500 py-4  text-gray-500 font-semibold font-secondary text-[14px] outline-none w-full'
                      />
                    </div>
                    <div className='w-[100%]'>
                      <input 
                        type="text" 
                        placeholder='Last Name' 
                        className='bg-transparent border-b border-gray-500 py-4 text-gray-500 font-semibold font-secondary text-[14px] outline-none w-full'
                      />
                    </div>
                  </div>

                  <input 
                    type="email" 
                    placeholder='Email'
                    className='bg-transparent border-b border-gray-500 py-4  text-gray-500 font-semibold font-secondary text-[14px] outline-none w-full'
                  />

                  <textarea
                   id="" 
                   rows="3"
                   placeholder='Message'
                   className='bg-transparent border-b border-gray-500 py-4  text-gray-500 font-semibold font-secondary text-[14px] outline-none w-full resize-none'
                  >

                  </textarea>

                  <div className='w-full'>
                    <button className='btn btn-lg font-secondary w-full'>Send</button>
                  </div>

                </form>
              </motion.div>

            </div>
        </div>
    </div>
  )
}

export default Contact