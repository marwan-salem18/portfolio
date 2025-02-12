'use client'
import Image from 'next/image'
import pic from './../../public/pic.jpg'
import helwan_pic from './../../public/helwan-slider1.jpg'
import { useEffect, useState } from 'react'
export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      e.forEach((e) => {
        console.log(e)
        if (e.isIntersecting){
          e.target.classList.add('opacity-100','blur-none','translate-x-none')
          e.target.classList.remove('blur-sm','translate-x-full')
        }
      })
    })
    const elements = document.querySelectorAll(".opacity-0");
    elements.forEach((e) => observer.observe(e))
  }, []); 
  return (
    <>
      <Image
        priority={true}
        src={pic}
        alt="pic of me"
        className="aspect-square col-span-12 sm:col-start-2 sm:col-span-4
        md:w-90 w-full rounded-full transition-all duration-2000 opacity-0 border border-solid whitespace-nowrap"
      />
      <div className="mt-20 md:mt-0 sm:col-span-6 sm:col-start-7 col-span-11 col-start-2 ">
        <p className="text-4xl sm:text-5xl typewriter">Hi, I'm Marwan Mohamed</p>
        <p className="text-3xl typewriter line-2 sm:w-0 sm:overflow-hidden">
          An Aspiring Software Engineer from Egypt
        </p>
      </div>
      <div className="mt-20 md:mt-0 sm:col-span-4 sm:col-start-2 col-span-11 col-start-2">
        <p className="text-3xl">I am currently a second-year student</p>
        <p className="text-2xl">
          pursuing a degree in Computer Science at Helwan University.
        </p>
      </div>
      <Image
        priority={true}
        src={helwan_pic}
        alt="helwan university"
        className="aspect-square col-span-12 sm:col-start-8 sm:col-span-4
        md:w-90 w-full rounded-full mt-5 sm:mt-0 transition-all duration-1000 blur-sm translate-x-full opacity-0 relative overflow-hidden"
      />
      <div className="sm:col-span-5 sm:col-start-2 col-span-11 col-start-2">
        <p className="text-2xl">
          I am a skilled frontend web developer with full-stack capabilities.
        </p>
        <p className="text-2xl">
          I am proficient in modern frontend technologies such as React,
          Next.js, and Tailwind CSS.
        </p>
        <p className="text-2xl">
          For backend development, I utilize Node.js or Django to build scalable
          applications.
        </p>
      </div>
      <div
        className="col-span-12 opacity-0 sm:col-start-8 sm:col-span-4 
        md:w-20 w-20 mt-5 sm:mt-0 grid-cols-subgrid grid transition-all duration-1000 blur-sm translate-x-full relative overflow-hidden"
      >
        <img
          className="col-span-4 col-start-2 sm:col-span-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />
        <img
          className="col-span-4  col-start-8 sm:col-span-1 sm:col-start-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg"
        />
        <img
          className="col-span-4 col-start-2 sm:col-span-1  dark:invert sm:col-start-1"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-line.svg"
        />
        <img
          className="col-span-4  col-start-8 sm:col-span-1 sm:col-start-3"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        />
      </div>
    </>
  );
}
