import React from 'react'

const Hero = () => {
  return (
    <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
            <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              A software development graduate from Universiti Teknologi Brunei, I am passionate and eager to use my skills in a professional environment. With a strong foundation in programming, software design, and application development, I am proficient in various programming languages including Java, JavaScript, PHP, and Python. My enthusiasm for technology extends to electronics, where I have hands-on experience in soldering. While my primary focus is on software development, I am also open to exploring and contributing to projects outside this domain. Eager to contribute to innovative projects and always up for new challenges, I look forward to bringing my skills and enthusiasm to your team.
            </p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Hero