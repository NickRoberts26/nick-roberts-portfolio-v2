import React from 'react'
import './App.css'

const App = () => {

    const skillTile = 'bg-blue-950 text-xl font-bold text-white border-2 border-green-400 rounded-md w-fit py-2 px-4 mb-4 mx-3 cursor-default transition-all duration-75 hover:scale-105';

    return (
        <>
            <div className='text-white font-source'>
                <div className='grid grid-cols-2 my-40'>
                    <header>
                        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl pb-2 text-green-400'>Nick Roberts</h1>
                        <h3 className="font-bold text-xl text-white mb-3">Web Developer</h3>
                    </header>
                    <div>
                    <p className="mb-7">I'm a web developer passionate about bringing websites to life. I love the challenge of transforming ideas into user-friendly interfaces, utilizing HTML, CSS, and JavaScript to create beautiful and interactive experiences.  For projects requiring a robust content management system, I leverage my expertise in WordPress to build powerful and scalable websites that empower clients to manage their content with ease.</p>
                    <p className="mb-7">Outside of the coding world, you'll find me hitting the pavement for a run or whichever video game currently has a hold on me. This balance between creative problem-solving and fun keeps me energized and brings a fresh perspective to my development work.</p>
                    </div>
                </div>
                <div id='skills' className='w-[85%] m-auto mb-40'>
                    <h2 className='text-center text-6xl font-bold bg-bl mb-10'>Skills</h2>
                    <div className='grid grid-cols-3'>
                        <div className='mb-10'>
                            <h3 className='text-3xl text-center font-bold mb-6'>Front End</h3>
                            <ul className='flex justify-center flex-wrap w-full'>
                                <li className={skillTile}>HTML</li>
                                <li className={skillTile}>JavaScript</li>
                                <li className={skillTile}>React.Js</li>
                                <li className={skillTile}>PHP</li>
                                <li className={skillTile}>Axios</li>
                            </ul>
                        </div>
                        <div className='mb-10'>
                            <h3 className='text-3xl text-center font-bold mb-6'>Styles</h3>
                            <ul className='flex justify-center flex-wrap w-full'>
                                <li className={skillTile}>CSS</li>
                                <li className={skillTile}>SASS</li>
                                <li className={skillTile}>Tailwind CSS</li>
                                <li className={skillTile}>Figma</li>
                            </ul>
                        </div>
                        <div className='mb-10'>
                            <h3 className='text-3xl text-center font-bold mb-6'>Other</h3>
                            <ul className='flex justify-center flex-wrap w-full'>
                                <li className={skillTile}>Firebase</li>
                                <li className={skillTile}>Wordpress</li>
                                <li className={skillTile}>Git</li>
                                <li className={skillTile}>SourceTree</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="projects" className='w-[85%] m-auto mb-40'>
                    <h2 className='text-center text-6xl font-bold bg-bl mb-12'>Projects</h2>
                    <div className='mb-16'>
                        <div className='grid grid-cols-2 mb-2'>
                            <a href='https://www.ampr.com.au/' target="_blank" className=''>
                                <img src="/ampr-cover.PNG" alt="" className='glow border-2 border-green-400 rounded-xl' />
                            </a>
                            <div className='ml-6 flex flex-col justify-center text-right'>
                                <h3 className='text-4xl font-bold mb-2'>AMPR</h3>
                                <h4 className='text-xl'>PR & Communications Agency</h4>
                            </div>
                        </div>
                    </div>
                    <div className='mb-16'>
                        <div className='grid grid-cols-2 mb-2'>
                            <div className='flex flex-col justify-center'>
                                <h3 className='text-4xl font-bold mb-2'>The Roundtable</h3>
                                <h4 className='text-xl'>Creative Agency</h4>
                            </div>
                            <a href='https://theroundtable.com.au/' target="_blank" className=''>
                                <img src="/trt-cover.PNG" alt="" className='glow border-2 border-green-400 rounded-xl' />
                            </a>
                        </div>
                    </div>
                    <div className='mb-16'>
                        <div className='grid grid-cols-2 mb-2'>
                            <a href='https://www.ampr.com.au/' target="_blank" className=''>
                                <img src="/ss-cover.PNG" alt="" className='glow border-2 border-green-400 rounded-xl' />
                            </a>
                            <div className='ml-6 flex flex-col justify-center text-right'>
                                <h3 className='text-4xl font-bold mb-2'>Sage Space</h3>
                                <h4 className='text-xl'>Dental Practice</h4>
                            </div>
                        </div>
                    </div>
                    <div className='mb-16'>
                        <div className='grid grid-cols-2 mb-2'>
                            <div className='flex flex-col justify-center'>
                                <h3 className='text-4xl font-bold mb-2'>Australian Birth Stories</h3>
                                <h4 className='text-xl'>Podcast/E-Commerce</h4>
                            </div>
                            <a href='https://www.ampr.com.au/' target="_blank" className=''>
                                <img src="/abs-cover.PNG" alt="" className='glow border-2 border-green-400 rounded-xl' />
                            </a>
                        </div>
                    </div>
                </div>
                <div id="personal-projects" className='w-[85%] m-auto'>
                    <h2 className='text-center text-6xl font-bold bg-bl mb-12'>Personal Projects</h2>
                    <div className='mb-16'>
                        <div className='grid grid-cols-2 mb-2'>
                            <a href='https://pit-stop-seven.vercel.app/' target="_blank" className=''>
                                <img src="/pit-stop.PNG" alt="" className='glow border-2 border-green-400 rounded-xl' />
                            </a>
                            <div className='ml-6 flex flex-col justify-center text-right'>
                                <h3 className='text-4xl font-bold mb-2'>PitStop</h3>
                                <h4 className='text-xl'>Formula 1 themed social media/forum app</h4>
                            </div>
                        </div>
                    </div>
                    <div className='mb-16'>
                        <div className='grid grid-cols-2 mb-2'>
                            <div className='flex flex-col justify-center'>
                                <h3 className='text-4xl font-bold mb-2'>Pokemon Pack Opener</h3>
                                <h4 className='text-xl'>Pokemon card collecting game</h4>
                            </div>
                            <a href='https://theroundtable.com.au/' target="_blank" className=''>
                                <img src="/pokemon-pack.PNG" alt="" className='glow border-2 border-green-400 rounded-xl' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
