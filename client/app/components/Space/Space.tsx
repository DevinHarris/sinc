"use client"

import { useState, useEffect, ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { FaWater } from 'react-icons/fa'

import 'react-circular-progressbar/dist/styles.css'


interface Space {
    title: string,
    bgColor: string,
    color: string 
    children?: ReactNode,
    percentage: number,
    percentLabel: string
}

export default function Space({ children, title, bgColor, color, percentage, percentLabel}: Space) {

    const [ space, setSpace ] = useState<Space>({ title, color, bgColor, percentage, percentLabel });
  

    return (
        <motion.div
        initial={{ opacity: 0, translateY: "20%" }}
        animate={{ opacity: 1, translateY: "0" }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: "-20%" }}
        className={`space w-48 h-48 rounded-3xl shadow-lg relative text-center p-7 backdrop-blur-lg ${space.bgColor} ${space.color}`}
        >
            <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
             className="text-white text-medium uppercase font-medium tracking-wider">{ space.title }</motion.span>
            <motion.div className="my-5">
                
                <CircularProgressbar 
                    value={space.percentage}
                    strokeWidth={5}
                    text={space.percentLabel}
                    styles={{
                        root: {
                            width: "60%",
                            margin: "0 auto"
                        },

                        path: {
                            stroke: `rgba(0, 160, 255, ${space.percentage / 100})`,
                            strokeLinecap: 'butt',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transformOrigin: 'center center'
                        },

                        trail: {
                            stroke: '#fff',
                            strokeLinecap: 'butt'
                        },

                        text: {
                            fill: "#fff",
                            fontSize: "14px"
                        }
                    }} 
                />
                { children }
            </motion.div>
        </motion.div>
    )
}