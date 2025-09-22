import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill, RiTwitterXLine } from 'react-icons/ri'

const SocialMediaIcons = () => {
    return (
    <div className='w-100 d-flex align-items-center justify-content-around p-3 mb-3 primary-text-color'>
        <FaGithub className='fs-5'/>
        <FaLinkedin className='fs-5 primary-text-color'/>
        <RiInstagramFill className='fs-5 primary-text-color'/>
        <RiTwitterXLine className='fs-5'/>
    </div>
  )
}

export default SocialMediaIcons
