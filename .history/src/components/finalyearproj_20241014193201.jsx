import React from 'react'
import Sidebar from './sidebar'
import Nav from './nav'
import Footer from './footer'

const finalyearproj = () => {
  return (
    <>
    <Sidebar/>
    <Nav/>

    <div className='hidden md:block md:min-h-screen bg-2 bg-fixed p-20'>
          <div className='flex justify-evenly'>
            <div className='flex flex-col justify-between'>
              <div>
                <div className=" z-20 card w-[600px] bg-white border border-[#e6122b] rounded-none absolute">
                  <div className="card-body">
                    <h2 className="card-title">About Me</h2>
                    <p className='text-left'>
                    A software development graduate from Universiti Teknologi Brunei, I am passionate and eager to use my skills in a professional environment. With a strong foundation in programming, software design, and application development, I am proficient in various programming languages including Java, JavaScript, PHP, and Python. My enthusiasm for technology extends to electronics, where I have hands-on experience in soldering. While my primary focus is on software development, I am also open to exploring and contributing to projects outside this domain. Eager to contribute to innovative projects and always up for new challenges, I look forward to bringing my skills and enthusiasm to your team.
                    </p>
                  </div>
                </div>
                <div className=" mt-2 ml-2 card w-[600px] bg-[#000] shadow-xl rounded-none ">
                  <div className="card-body">
                    <h2 className="card-title">About Me</h2>
                    <p className='text-justify'>
                    A software development graduate from Universiti Teknologi Brunei, I am passionate and eager to use my skills in a professional environment. With a strong foundation in programming, software design, and application development, I am proficient in various programming languages including Java, JavaScript, PHP, and Python. My enthusiasm for technology extends to electronics, where I have hands-on experience in soldering. While my primary focus is on software development, I am also open to exploring and contributing to projects outside this domain. Eager to contribute to innovative projects and always up for new challenges, I look forward to bringing my skills and enthusiasm to your team.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex justify-start'>
                <div className=" z-20 card w-[400px] bg-[#000] border border-[#000] rounded-none absolute text-[#fff] ">
                  <div className="card-body">
                    <h2 className="card-title">View Full Resume</h2> 
                  </div>
                </div>
                <div className=" mt-2 ml-2 card w-[400px] bg-[#e6122b] shadow-xl rounded-none ">
                  <div className="card-body">
                  <h2 className="card-title">View Full Resume</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-between'>
            <div className='mb-10'>
                <div className=" z-20 card w-[600px] bg-white border border-[#e6122b] rounded-none absolute">
                  <div className="card-body">
                    <h2 className="card-title">Education</h2>
                    <p className='text-left'>2020 - 2024</p>
                    <p className='text-left'>Bachelor of Science (Hons) in Computing, Major in Software Development | Universiti Teknologi Brunei</p>
                    <p className='text-left'>Upper Second Class Honours</p>

                      
                  </div>
                </div>
                <div className=" mt-2 ml-2 card w-[600px] bg-[#000] shadow-xl rounded-none ">
                  <div className="card-body">
                  <h2 className="card-title">Education</h2>
                    <p className='text-left'>Jan - June 2023</p>
                    <p className='text-left'>Bachelor of Science (Hons) in Computing, Major in Software Development | Universiti Teknologi Brunei</p>
                    <p className='text-left'>Upper Second Class Honours</p>
                      
                  </div>
                </div>
            </div>
            <div>
              <div className=" z-20 card w-[600px] bg-white border border-[#e6122b] rounded-none absolute">
            <div className="card-body">
              <h2 className="card-title">Experience</h2>
              <p className='text-left'>Jan - June 2023</p>
              <p className='text-left'>Web and Software Development Intern | InnovAero Sdn. Bhd.</p>
              <p className='text-left'>
                During my internship, I worked on various Internet of Things (IoT) and web development projects, where I gained proficiency in the Laravel Framework. I was also introduced to drone technology and its applications in Brunei Darussalam, expanding my technical knowledge and practical understanding of emerging technologies.
                </p>
                
            </div>
          </div>
          <div className=" mt-2 ml-2 card w-[600px] bg-[#000] shadow-xl rounded-none ">
            <div className="card-body">
            <h2 className="card-title">Experience</h2>
              <p className='text-left'>Jan - June 2023</p>
              <p className='text-left'>Web and Software Development Intern | InnovAero Sdn. Bhd.</p>
              <p className='text-left'>
              During my internship, I worked on various Internet of Things (IoT) and web development projects, where I gained proficiency in the Laravel Framework. I was also introduced to drone technology and its applications in Brunei Darussalam, expanding my technical knowledge and practical understanding of emerging technologies.
              </p>
                
            </div>
          </div>
              </div>
              
              
              
            </div>
          </div>
        </div>
    <Footer/>
    </>
  )
}

export default finalyearproj