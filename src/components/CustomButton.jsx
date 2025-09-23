import React from 'react'
import { Button } from 'react-bootstrap'
import { CiStar } from "react-icons/ci";

import CustomButtonContent from '../data/CustomButtonContent';

const CustomButton = () => {
    return (
        <div className='position-relative vh-100'>
            <div className='w-75 position-absolute top-50 start-50 translate-middle'>
                {CustomButtonContent.map(btn => (
                    btn.rows.map((row, rowIndex) => (
                        <Button key={rowIndex} variant={row.varient} size={row.size} style={{ backgroundColor: row.colorCode }} className={`text-${row.text} border-0 rounded-1 mx-5 my-1 p-2`}>
                            <span className='d-flex align-items-center'>
                                {row.isFirstIcon && <CiStar className='me-2 p-0'/>}
                                {row.content}
                                {row.isLastIcon && <CiStar style={{ marginLeft: '5px'}}/>}
                                {row.icon && <CiStar className='p-0 m-0'/>}
                            </span>
                        </Button>
                    ))
                ))}
            </div>
        </div>
    )
}

export default CustomButton