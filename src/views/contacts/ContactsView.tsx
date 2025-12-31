import React from 'react'
import Header from '@/components/Header';
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import Link from 'next/link';
import { LuSend } from 'react-icons/lu';

const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6"/>, 
      title: "Email",
      value: "tnakhoa2311@gmail.com",
      link: "mailto:tnakhoa2311@gmail.com",
    },
    {
      icon: <FaPhone className="w-6 h-6"/>,
      title: "Phone",
      value: "+1 (519)-276-12006",
      link: "tel:+15192761206",
    },
];

export default function ContactsView() {
  const InputStyles = "px-4 py-3.5 my-4 bg-[var(--khoa-crimson)] outline-note rounded-md w-full text-gray-200 placeholder-gray-400"
  
  return (
    <section id="contact" className="py-16 lg:py-30">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 ga-6 lg:gap-12">
        <div>
          <h2 className="py-3 text-3xl md:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-red-700 to-white text-center mx-auto">Feel Free to Reach Out</h2>

          <div className="space-y-5 mb-12">
            {contactInfo.map((item, index) => {
              return (
                <Link href={item.link} key={index} className="group flex items-center gap-4 px-2 py-3 transition-colors hover:bg-white/5 rounded-lg">
                  <div className="h-15 w-15 rounded-full bg-white/5 text-white transition-transform group-hover:scale-105 grid place-items-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-md font-medium text-white">{item.title}</h4>
                    <p className="text-md text-gray-400">{item.value}</p>
                  </div>
                </Link>
                )
            })}        
          </div>
        </div>
        
        <div>
          <form className="rounded-lg bg-[var(--khoa-dark-crimson)] px-4 py-8">
            <input type="text" placeholder="Name" className={InputStyles}/>
            <input type="text" placeholder="Email" className={InputStyles} required/>
            <input type="text" placeholder="Subject of Message" className={InputStyles} required/>
            <textarea placeholder="Message" required className={`${InputStyles} resize-none`} rows={5}/>
            <button className="w-full bg-linear-to-r from-red-900 to-red-700 hover:from-red-700 hover:to-red-500 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">
              <LuSend size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
