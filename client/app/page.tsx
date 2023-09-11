'use client'

import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion, AnimatePresence } from 'framer-motion'
import {  FaWater } from 'react-icons/fa'
import { PiBowlFood } from 'react-icons/pi'
import Space from '@/components/Space/Space'

interface Access {
  accessCode: string
}

export default function Page() {

  const { register, handleSubmit, watch, reset } = useForm<Access>();
  const onSubmit: SubmitHandler<Access> = data => console.log(data);



  return (
    <div className="w-screen h-screen grid grid-rows-4 grid-cols-4 text-center z-10 px-20">
         <div className="relative min-w-full min-h-full max-w-none-z-10">

            <video src="/img/landingbg-6.mp4"
              className="min-h-full min-w-full object-cover object-bottom fixed top-0 left-0 "
              autoPlay
              muted
              loop
              ></video>
         </div>
          <div className="header-intro self-center col-start-1 col-end-3 row-start-1 row-end-5 text-black my-36 py-10 px-24  flex z-10">
            <div className="intro my-10 w-full text-left">
              <h2 className="text-5xl font-bold tracking-tight text-black md:text-[90px] md:leading-[86px]">Control your <span className="">fitness life.</span><br></br> All in one place.</h2>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input {...register('accessCode')} type='text' className="" placeholder='Enter Early Access Code' /> */}
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                     className="my-10 bg-indigo-400/50 text-white font-medium px-5 py-5 rounded">Get Started</motion.button>
                </form> 
             </div>
            </div>
            
          </div>

          <div className="col-start-4 col-end-4 row-start-2 row-end-2 justify-center self-center z-20">
              
              <h1 className="text-5xl font-bold tracking-tight text-black md:text-[55px] md:leading-[86px]">You've never tracked like this</h1>
              <p className="font-medium py-5 text-xl tracking-wider">Easily filter macros and track things like workouts, fats, calories, carbs, water intake and more! Just add them to your <span className="font-semibold">Space.</span></p>
            
            </div>
            <div className="col-start-4 col-end-4 row-start-3 row-end-3 self-start">
                <div className="grid grid-cols-4 gap-2 justify-around">
                  <Space title="Water" bgColor='bg-sky-800/60' color='text-white' percentage={78} percentLabel="Cups">
                  </Space>

                  <Space title="Calories" bgColor='bg-blue-950/50' color='text-white' percentage={54} percentLabel='1502 / 3000'>
                  </Space>

                  <Space title="Fats" bgColor='bg-yellow-600/50' color='text-white' percentage={43} percentLabel='Low'>
                  </Space>

                  <Space title="Carbs" bgColor='bg-teal-950/60'  color='text-white' percentage={50} percentLabel='Low'>
                  </Space>
                </div>
            </div>
            <div className="col start-5 col-end-5 row-start-4 row-end-4 self-start ">
              <Space title="Today's Pull Workout" bgColor='bg-rose-800/60'  width='w-1/2' color='text-white' percentage={28} percentLabel="Progress">
                    </Space>
            </div>      
    </div>
  )
}