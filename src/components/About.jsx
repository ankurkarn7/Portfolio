import React from 'react'
import Contact from './Socials'

const About = () => {
  return (
    <div className='pt-20 bg-gray-900 text-white'>
        <div className='font-extrabold text-6xl flex justify-center'>ABOUT ME</div>
        <div className='flex justify-center mt-8'>
            <img src='/ankurpic.jpg' className='rounded-lg object-cover w-80' />
        </div>
        <div className='text-5xl mx-auto text-center w-[80%] mt-10'>The only way to do great work is to love what you do.</div>
        <br />
        <div className='text-3xl mx-auto text-left mt-10 w-2/3'>
            I’m Ankur karn, an ECE undergrad at IIIT Trichy (2022 – 2026) and a dedicated MERN‑stack developer. I build full‑stack web apps with React, Node.js, TypeScript, Vite & Tailwind CSS, transforming ideas into efficient, scalable solutions. As a DSA enthusiast and fast learner, I thrive on collaboration—delivering user‑centric software that solves real‑world problems.
        </div>
        <br /> <br />
        <div className='text-4xl mx-auto text-center'>{`{ More About Me }`}</div>
        <div className='mt-10 text-2xl mx-auto text-left w-[90%]'>I’ve channeled my curiosity into full-stack web development. Every day, I dive into React, Node.js, TypeScript, Vite, and Tailwind CSS - building apps that are as performant as they are user‑friendly.</div>
        <div className='mt-10 text-2xl mx-auto text-left w-[90%]'>Beyond MERN, I’m honing my problem‑solving skills through DSA challenges and hands‑on projects in Next.js, TypeScript, and Tailwind CSS. Whether it’s refining an algorithm or architecting a new feature, I thrive on translating complex requirements into clean, maintainable code.</div>
        <div className='mt-10 text-2xl mx-auto text-left w-[90%]'>When I’m not coding, you’ll find me sketching out ideas for side projects or exploring Web3 protocols. I thrive on collaboration—pair‑programming with peers, gathering feedback, and iterating fast to bring concepts to life.</div>
        <div className='mt-10 text-2xl mx-auto text-left w-[90%]'>I’m always open to new opportunities—internships, freelance gigs, or team projects. If you’re looking for a passionate developer who learns quickly and delivers impactful solutions, let’s connect and create something great together!</div>
        
        <div className='text-4xl text-center mt-12'>{`{ Education }`} </div>

        <div className="bg-gray-800 shadow-lg  w-[80%] mx-auto mt-12 ">
            <div className='flex justify-between bg-blue-900 p-3 pt-4 pb-1 rounded-t-lg'>
                <div>
                    <div className="text-3xl font-bold mb-4 ">IIIT Trichy</div>
                    <div className="text-xl mb-4 ">B.Tech in ECE</div>
                </div>
                <div>
                    <div className='text-xl'>2022-2026</div>
                    <div className='text-xl'>CGPA : 8.15</div>
                </div>
            </div>
            
            <ul className="list-disc list-inside text-xl space-y-2 p-4 rounded-b-lg">
                <li> Pursuing core subjects like Digital Electronics, Signal Processing, and Embedded Systems, with additional focus on web development and DSA.</li>
                <li>Participated in multiple tech clubs and student bodies, balancing academics with leadership roles and real-world projects.</li>
            </ul>
        </div>

        <div className="bg-gray-800 shadow-lg w-[80%] mx-auto mt-12">
            <div className='flex justify-between bg-blue-900 rounded-t-lg p-3 pt-4 pb-1'>
                <div>
                    <div className="text-3xl font-bold mb-4 ">Chinmaya Vidyalaya, Bokaro</div>
                    <div className="text-xl mb-4 ">Class-12th (Schince)</div>
                </div>
                <div>
                    <div className='text-xl'>2020-2021</div>
                    <div className='text-xl'>Percentage : 88%</div>
                </div>
            </div>
            
            <ul className="list-disc list-inside text-xl space-y-2 p-4">
                <li>  Studied core science subjects with a focus on Physics, Chemistry, and Mathematics.</li>
                <li> Prepared for competitive exams including JEE.</li>
            </ul>
        </div>

        <div className="bg-gray-800 shadow-lg w-[80%] mx-auto mt-12">
            <div className='flex justify-between p-3 pt-4 pb-1 rounded-t-lg bg-blue-900'>
                <div>
                    <div className="text-3xl font-bold mb-4 ">Sacred Heart School, Dumka</div>
                    <div className="text-xl mb-4 ">Class-10th (Schince)</div>
                </div>
                <div>
                    <div className='text-xl'>2018-2019</div>
                    <div className='text-xl'>Percentage : 93.8%</div>
                </div>
            </div>
            
            <ul className="list-disc list-inside text-xl space-y-2 p-4">
                <li>Consistently performed at the top of the class and maintained academic excellence across all subjects.</li>
                <li>Actively participated in Olympiads and quiz competitions.</li>
            </ul>
        </div>
        
        <br />
        <Contact />
    </div>
  )
}

export default About
