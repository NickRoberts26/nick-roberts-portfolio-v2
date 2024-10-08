import React from 'react'

const NavBar = () => {

    const menuItem = 'p-2 lg:p-6 text-sm lg:text-xl underline-offset-4 hover:underline'

    return (
        <div className='text-white font-source text-center border-2 border-green-400 py-1 lg:py-2 px-2 lg:px-4 mt-2 lg:mt-0 mb-6 lg:mb-0 mx-auto w-fit rounded-full'>
            <a href="#skills" className={menuItem}>Skills</a>
            <a href="#projects" className={menuItem}>Projects</a>
            <a href="#personal-projects" className={menuItem}>Personal</a>
            <a href="" className={menuItem}>Resume</a>
        </div>
    )
}

export default NavBar
