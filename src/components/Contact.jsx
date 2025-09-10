import React from 'react'
import { CONTACT } from '../constants'
import { motion as Motion } from 'framer-motion'
const Contact = () => {
  return (
    <>
      <div className="border-t border-stone-900 pb-20">
        <Motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >
          Get in Touch
        </Motion.h2>
        <div className="text-center tracking-tighter">
          <Motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.address}
          </Motion.p>
          <Motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="my-4"
          >
            {CONTACT.phoneNo}
          </Motion.p>
          <Motion.a
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            href="#"
            className="my-4"
          >
            {CONTACT.email}
          </Motion.a>
        </div>
      </div>
    </>
  );
}

export default Contact