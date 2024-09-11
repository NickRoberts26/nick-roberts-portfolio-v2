import React from 'react'
import './App.css'

const App = () => {

    const skillTile = 'bg-blue-950 text-xl font-bold text-white border-2 border-green-400 rounded-md w-fit py-2 px-4 mb-4 mx-3 cursor-default transition-all duration-75 hover:scale-105';

    return (
        <>
            <div className='text-white font-source'>
                <div className='grid grid-cols-2'>
                    <header>
                        <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl pb-2 text-green-400'>Nick Roberts</h1>
                        <h3 className="font-bold text-xl text-white mb-3">Web Developer</h3>
                    </header>
                    <div>
                    <p className="mb-7">I'm a web developer passionate about bringing websites to life. I love the challenge of transforming ideas into user-friendly interfaces, utilizing HTML, CSS, and JavaScript to create beautiful and interactive experiences.  For projects requiring a robust content management system, I leverage my expertise in WordPress to build powerful and scalable websites that empower clients to manage their content with ease.</p>
                    <p className="mb-7">Outside of the coding world, you'll find me hitting the pavement for a run or whichever video game currently has a hold on me. This balance between creative problem-solving and fun keeps me energized and brings a fresh perspective to my development work.</p>
                    </div>
                </div>
                <div className='w-[85%] m-auto'>
                    <h2 className='text-center text-5xl font-bold bg-bl mb-10'>Skills</h2>
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
            </div>
        </>
    )
}

export default App
