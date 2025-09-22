import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'
import SocialMediaIcons from './SocialMediaIcons.jsx'
import ProfileImage from '../assets/profile.png'
import ProfileData from '../data/CustomProfile.js'

const CustomCard = () => {

    return (
        <>
            {ProfileData.map((profile, index) => (
                <Card key={index} style={{ width: '22rem' }} className='card d-flex align-items-center justify-content-center'>
                    <Image src={ProfileImage} width={80} className='mt-4' />
                    <Card.Body>
                        <Card.Title>{profile.title}</Card.Title>
                        <Card.Title className='text-muted fs-6'>{profile.subTitle}</Card.Title>
                        <Card.Text className='w-100'>{profile.content}</Card.Text>
                        <Button className='w-100 border-0' style={{ backgroundColor: "#4338CA" }}>{profile.ctaContent}</Button>
                    </Card.Body>
                    <SocialMediaIcons />
                </Card>
            ))}
        </>
    )
}

export default CustomCard