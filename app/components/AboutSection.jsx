import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerate'

const AboutSection = () => {
  return (
    <section id='about' className='h-screen w-screen flex flex-col items-center pt-20'>
        <h1 className='text-6xl'>
          <TextGenerateEffect words={"Sobre Mim"} className={"text-6xl"}></TextGenerateEffect>
        </h1>
    </section>
  )
}

export default AboutSection