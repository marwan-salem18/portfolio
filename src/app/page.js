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
        md:w-90 w-full rounded-full"
      />
      <div className="mt-20 md:mt-0 sm:col-span-4 sm:col-start-8 col-span-11 col-start-2">
        <p className="text-3xl">Hi, I'm Marwan Mohamed</p>
        <p className="text-xl">An Aspiring Software Engineer from egypt</p>
      </div>
      <div className="mt-20 md:mt-0 sm:col-span-4 sm:col-start-2 col-span-11 col-start-2">
        <p className="text-3xl">I'm a second year student</p>
        <p className="text-2xl">
          studying computer sience at helwan university
        </p>
      </div>
      <Image
        priority={true}
        src={helwan_pic}
        alt="helwan university"
        className="aspect-square col-span-12 sm:col-start-8 sm:col-span-4
        md:w-90 w-full rounded-full mt-5 sm:mt-0"
      />
      <div className="mt-30 md:mt-20 sm:col-span-5 sm:col-start-2 col-span-11 col-start-2">
        <p className="text-2xl">
          i'm a frontend web developer who can work fullstack
        </p>
        <p className="text-2xl">i'm proficent in react,Next,Tailwind</p>
        <p className="text-2xl">for backend i use Node or Django</p>
      </div>
      <div
        className="col-span-12 opacity-0 sm:col-start-8 sm:col-span-4 
        md:w-20 w-20 mt-5 sm:mt-30 grid-cols-subgrid grid transition-all duration-1000 blur-sm translate-x-full"
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
