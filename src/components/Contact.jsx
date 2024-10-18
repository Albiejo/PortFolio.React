import React from 'react'
import {CONTACT} from '../constants'
import {motion} from 'framer-motion'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5}}
        className='text-center text-4xl  my-10'>Get in Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p 
            whileInView={{ opacity: 1, x:0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className='my-4'>{CONTACT.address}</motion.p>

            <motion.p
            className='my-4'
             whileInView={{ opacity: 1, x:0}}
             initial={{ opacity: 0, x: -100 }}
             transition={{ duration: 1 }}
            >{CONTACT.phoneNo}</motion.p>
           <motion.a 
            whileInView={{ opacity: 1, x:0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
           href='#' className='border-b text-white' >{CONTACT.email}</motion.a>
        </div>
    </div>
  )
}

export default Contact