import React from 'react'

const About = () => {
  return (
    <div name='about' className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-16">
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-10 sm:mt-20'>
         I am a front-end developer with 2.4 years of experience in the industry. Recently, I was working as a UI Developer at Infinite Learn (formerly Wizklub Learning Pvt. Ltd.), where I have significantly contributed to enhancing user experiences through responsive web design and cross-platform mobile applications. My journey began as a web developer intern at Veave Technology, where I honed my skills in web development.
        </p>
        <br />
        <p className='text-xl'>
        My expertise includes developing user interface screens with React Native, creating responsive web pages using React.js, and building custom applications with HTML5, CSS3, JavaScript, and Flask. I am passionate about leveraging my skills to deliver high-quality user experiences and continuously seek opportunities to learn and grow in the field of web development.
        </p>
      </div>
    </div>
  )
}

export default About
