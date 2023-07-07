import React from 'react'

export const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-justify'> 
                <div className='sm:text-right text-4xl font-bold' >
                    <p>Hi, I am Faizan, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>Success is all about trying, you keep trying and ultimately you will achieve success one day. The day you stopped trying will be your actual failure. Being a software engineering student I could associate myself with the above lines. In these years, I have gone through many times where I thought that I wouldn't be able to do this task or project but with continuous efforts Alhumduliah I was able to do most of my tasks. Being a student of Fast I have learned how to deal with pressure and how to complete my work on time. Fast has provided me the best opportunities to polish my skills, be it coding or communication with others. But in all these things one thing was constant, the continuous efforts I put in to gain these skills. While coding I was stuck in errors but I kept on trying and eventually getting a solution most of the times. Even in my free time I try to learn different skills so that they can help me in my future.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
