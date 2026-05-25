"use client"
import React, { useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa'
import Link from 'next/link';
import { LuSend } from 'react-icons/lu';
import toast from 'react-hot-toast';

const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6"/>, 
      title: "Email",
      value: "ngocanhk@uoguelph.ca",
      link: "mailto:ngocanhk@uoguelph.ca",
    },
    {
      icon: <FaLinkedin className="w-6 h-6"/>,
      title: "LinkedIn",
      value: "Khoa Tran",
      link: "https://www.linkedin.com/in/khoanatran70/",
    },
    {
      icon: <FaGithub className="w-6 h-6"/>,
      title: "Github",
      value: "SevenT1123",
      link: "https://github.com/SevenT1123",
    }
];

export default function ContactsView() {
  const InputStyles = "px-4 py-3.5 my-4 bg-[var(--khoa-crimson)] outline-note rounded-md w-full text-gray-200 placeholder-gray-400"
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event:React.FormEvent) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", "da751d9f-ae67-4d8e-bd8c-5b20aa5ee83a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      (event.target as HTMLFormElement).reset();
      toast("Form submitted successfully"), {
        style: {
          background: "#3cf639",
          color: "white"
        }
      }
    } else {
      toast("Form submitted successfully"), {
        style: {
          background: "#f64f39",
          color: "white"
        }
      }
    }

    setLoading(false);
  };

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
        
        <div data-aos="zoom-in">
          <form onSubmit={onSubmit} className="rounded-lg bg-[var(--khoa-dark-crimson)] px-4 py-8">
            <input type="text" placeholder="Name" className={InputStyles} required name="name"/>
            <input type="text" placeholder="Email" className={InputStyles} required name="email"/>
            <input type="text" placeholder="Subject" className={InputStyles} required name="subject"/>
            <textarea placeholder="Message" required className={`${InputStyles} resize-none`} rows={5} name="message"/>
            <button className="w-full bg-linear-to-r from-red-900 to-red-700 hover:from-red-700 hover:to-red-500 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">

              {loading ? (
                <>
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  Sending...
                </>
                ) : (
                <>
                  <LuSend size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
