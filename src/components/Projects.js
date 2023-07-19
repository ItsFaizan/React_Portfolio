import React from 'react'
import Working from '../assets/projects/workImg.jpeg'
import Real from '../assets/projects/realestate.jpg'

export const Projects = () => {
  return (
    <div name='project' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
           <div className='pb-1'>
           <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
          <p className='py-2'>Check out some of my recent work</p>
           </div>

           <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
              <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div >
                    <span className='text-2xl font-bold text-white tracking-wide'>
                      Online Food Delivery System
                    </span>
                    <div className='pt-8 text-center'>
                
                        <a href='https://github.com/ItsFaizan/Mern_Project-Online-Food-Delivery-System.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div>
              </div>

              <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div >
                    <span className='text-2xl font-bold text-white tracking-wide'>
                        Freelance Management System
                    </span>
                    <div className='pt-8 text-center'>
                        
                        <a href='https://github.com/ItsFaizan/SkillServe_Mern_Project.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div>
              </div>

              <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div >
                    <span className='text-2xl font-bold text-white tracking-wide'>
                        Expense Tracker App
                    </span>
                    <div className='pt-8 text-center'>
                       
                        <a href='https://github.com/ItsFaizan/React-ExpenseTrackerApp.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div>
              </div>

              <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div >
                    <span className='text-2xl font-bold text-white tracking-wide'>
                       React Pokedex App
                    </span>
                    <div className='pt-8 text-center'>
                       
                        <a href='https://github.com/ItsFaizan/Pokedex_React.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div>
              </div>

              <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div >
                    <span className='text-2xl font-bold text-white tracking-wide'>
                       Bank ManagementSystem
                    </span>
                    <div className='pt-8 text-center'>
                        
                        <a href='https://github.com/ItsFaizan/Bank_Management_System.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div>
              </div>

              <div  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                  <div >
                    <span className='text-2xl font-bold text-white tracking-wide'>
                      Society Management System
                    </span>
                    <div className='pt-8 text-center'>
                       
                        <a href='https://github.com/ItsFaizan/Society_Management_System.git'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                  </div>
              </div>



           </div>
       </div>
    </div>
  )
}
