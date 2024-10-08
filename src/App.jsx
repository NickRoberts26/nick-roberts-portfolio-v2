import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import NavBar from './NavBar';

const App = () => {

    const skillTile = 'bg-blue-950 text-md lg:text-xl font-bold text-white border-2 border-green-400 rounded-md w-fit py-2 px-4 mb-4 mx-3 cursor-default transition-all duration-75 hover:scale-105';

    return (
        <>
        <NavBar />
            <div className='text-white font-source'>
                <div className='lg:grid grid-cols-2 h-[90vh] relative'>
                    <header className='flex flex-col justify-center text-center lg:text-left'>
                        <h1 className='font-bold text-3xl md:text-4xl lg:text-7xl pb-2 text-green-400'>Nick Roberts</h1>
                        <h3 className="font-bold text-xl lg:text-2xl text-white mb-6 lg:mb-3">Web Developer</h3>
                    </header>
                    <div className='flex flex-col justify-center text-center lg:text-left'>
                        <p className="mb-7 text-sm lg:text-lg">I am a <span className='text-green-400'>web developer</span> passionate about bringing websites to life. I love the challenge of transforming ideas into <span className='text-green-400'>user-friendly interfaces</span> and am always looking towards exploring new opprtunities to grow and enhance my skills.</p>
                        <p className="mb-0 text-sm lg:text-lg">Outside of the coding world, you'll find me hitting the pavement for a run <i class="fa-solid fa-person-running text-green-400"></i> or playing whichever video game <i class="fa-solid fa-gamepad text-green-400"></i> currently has a hold on me. The balance between <span className='text-green-400'>creative problem-solving</span> and exploring my hobbies keeps me energized and brings a fresh perspective to my development work.</p>
                    </div>
                    <a href='#skills' className='absolute bottom-12 left-[47%] lg:left-[49%] animate-bounce'>
                        <i class="fa-solid fa-arrow-down text-3xl transform transition duration-500 hover:scale-125"></i>
                    </a>
                </div>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                    <div id='skills' className='w-[85%] m-auto mb-10 lg:mb-40'>
                        <h2 className='text-center text-3xl lg:text-6xl font-bold bg-bl mb-6 lg:mb-10 pt-10'>Skills</h2>
                        <div className='grid grid-cols-1 lg:grid-cols-3'>
                            <div className='mb-10'>
                                <h3 className='text-xl lg:text-3xl text-center font-bold mb-6'>Front End</h3>
                                <ul className='flex justify-center flex-wrap w-full'>
                                    <li className={skillTile}>HTML</li>
                                    <li className={skillTile}>JavaScript</li>
                                    <li className={skillTile}>React.JS</li>
                                    <li className={skillTile}>PHP</li>
                                    <li className={skillTile}>Axios</li>
                                </ul>
                            </div>
                            <div className='mb-10'>
                                <h3 className='text-xl lg:text-3xl text-center font-bold mb-6'>Styles</h3>
                                <ul className='flex justify-center flex-wrap w-full'>
                                    <li className={skillTile}>CSS</li>
                                    <li className={skillTile}>SASS</li>
                                    <li className={skillTile}>Tailwind CSS</li>
                                    <li className={skillTile}>Figma</li>
                                </ul>
                            </div>
                            <div className='mb-10'>
                                <h3 className='text-xl lg:text-3xl text-center font-bold mb-6'>Other</h3>
                                <ul className='flex justify-center flex-wrap w-full'>
                                    <li className={skillTile}>Firebase</li>
                                    <li className={skillTile}>Wordpress</li>
                                    <li className={skillTile}>Git</li>
                                    <li className={skillTile}>SourceTree</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                    <div id="projects" className='w-[85%] m-auto mb-20 lg:mb-40'>
                        <h2 className='text-center text-3xl lg:text-6xl font-bold bg-bl mb-12 pt-10'>Projects</h2>
                        <div className='mb-16'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 mb-2'>
                                <a href='https://www.ampr.com.au/' target="_blank" className=''>
                                    <img src="/ampr-cover.PNG" alt="" className='glow border-2 border-green-400 rounded-xl mb-6 lg:mb-0' />
                                </a>
                                <div className='lg:ml-6 flex flex-col justify-center lg:text-right'>
                                    <h3 className='text-2xl lg:text-4xl font-bold mb-2'>AMPR</h3>
                                    <h4 className='text-lg lg:text-xl'>PR & Communications Agency</h4>
                                </div>
                            </div>
                        </div>
                        <div className='mb-16'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 mb-2'>
                                <a href='https://theroundtable.com.au/' target="_blank" className='lg:order-2'>
                                    <img src="/trt-cover.PNG" alt="" className='glow border-2 border-green-400 rounded-xl mb-6 lg:mb-0' />
                                </a>
                                <div className='flex flex-col justify-center'>
                                    <h3 className='text-2xl lg:text-4xl font-bold mb-2'>The Roundtable</h3>
                                    <h4 className='text-lg lg:text-xl'>Creative Agency</h4>
                                </div>
                            </div>
                        </div>
                        <div className='mb-16'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 mb-2'>
                                <a href='https://www.ampr.com.au/' target="_blank" className=''>
                                    <img src="/ss-cover.PNG" alt="" className='glow border-2 border-green-400 rounded-xl mb-6 lg:mb-0' />
                                </a>
                                <div className='lg:ml-6 flex flex-col justify-center lg:text-right'>
                                    <h3 className='text-2xl lg:text-4xl font-bold mb-2'>Sage Space</h3>
                                    <h4 className='text-lg lg:text-xl'>Dental Practice</h4>
                                </div>
                            </div>
                        </div>
                        <div className='mb-16'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 mb-2'>
                                <a href='https://www.ampr.com.au/' target="_blank" className='lg:order-2'>
                                    <img src="/abs-cover.PNG" alt="" className='glow border-2 border-green-400 rounded-xl mb-6 lg:mb-0' />
                                </a>
                                <div className='flex flex-col justify-center'>
                                    <h3 className='text-2xl lg:text-4xl font-bold mb-2'>Australian Birth Stories</h3>
                                    <h4 className='text-lg lg:text-xl'>Podcast/E-Commerce</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                    <div id="personal-projects" className='w-[85%] m-auto'>
                        <h2 className='text-center text-3xl lg:text-6xl font-bold bg-bl mb-12'>Personal Projects</h2>
                        <div className='mb-16'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 mb-2'>
                                <a href='https://pit-stop-seven.vercel.app/' target="_blank" className=''>
                                    <img src="/pit-stop.PNG" alt="" className='glow border-2 border-green-400 rounded-xl mb-6 lg:mb-0' />
                                </a>
                                <div className='lg:ml-6 flex flex-col justify-center lg:text-right'>
                                    <h3 className='text-2xl lg:text-4xl font-bold mb-2'>PitStop</h3>
                                    <h4 className='text-lg lg:text-xl'>Formula 1 themed social media/forum app</h4>
                                    <p>Built with: React.js - Google Fireabase - Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-16'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 mb-2'>
                                <a href='https://pokemon-pack-opener.vercel.app/' target="_blank" className='lg:order-2'>
                                    <img src="/pokemon-pack.PNG" alt="" className='glow border-2 border-green-400 rounded-xl mb-6 lg:mb-0' />
                                </a>
                                <div className='flex flex-col justify-center'>
                                    <h3 className='text-2xl lg:text-4xl font-bold mb-2'>Pokemon Pack Opener</h3>
                                    <h4 className='text-lg lg:text-xl'>Pokemon card collecting game</h4>
                                    <p>Built with: React.js - API <a href="https://pokeapi.co/" target="_blank" className='text-green-400 hover:underline'>(pokeapi)</a> - Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <div className='fixed bottom-10 left-10 text-4xl hidden lg:flex flex-col'>
                    <a href="mailto: web@nickdev.co" target="_blank"><i class="fa-regular fa-envelope mb-2 wiggly-icon"></i></a>
                    <a href="https://github.com/NickRoberts26" target='_blank'><i className="fa-brands fa-github mb-3 wiggly-icon"></i></a>
                    <a href="https://www.linkedin.com/in/nick-roberts-b473191b6/" target='_blank'><i class="fa-brands fa-linkedin wiggly-icon"></i></a>
                </div>
            </div>
        </>
    )
}

export default App
