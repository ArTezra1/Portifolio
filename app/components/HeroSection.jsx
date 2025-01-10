import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeans'
import { Icons } from '@/data/data'
import { Button } from './ui/MovingBorder'
import { ArrowBigDown } from 'lucide-react'
import { FlipWords } from './ui/FlipWords'

const HeroSection = () => {
  return (
    <section className='h-screen w-screen' id='hero'>
        <BackgroundBeamsWithCollision className={"flex flex-col pt-10"}>
            <div className='flex flex-col text-center cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out'>
                <span className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-600'>Coode</span>
                <p className='font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 to-purple-600'>&lt;ArTezra&gt;</p>
            </div>

            <h1 className='text-5xl md:text-7xl text-center font-bold mt-20'>Desenvolvedor <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 '>Web</span> <span className='text-transparent bg-clip-text bg-gradient-to-bl from-purple-600 to-pink-600 relative'>FrontEnd</span>.
            </h1>
            <div className='px-8 mt-6 md:w-[70vw]'>
                <p className='text-zinc-300 leading-4 font-medium text-center text-lg md:text-xl md:leading-6'>Bem-Vindo ao meu portifólio, meu nome é Arthur Desenvolvedor Web FrontEnd, e aqui você vai conhecer mais sobre mim e o meu trabalho.</p>
            </div>

            <div className='mt-10'>
              <Button className={"gap-4"}>
                {Icons.map((e)=>(
                  <a href={e.link} key={e.id} target='_blank'>
                    <img src={e.src} alt={e.alt} className='hover:scale-110 transition'/>
                  </a>
                ))}
              </Button>
            </div>
            <div className='flex flex-col justify-center items-center mt-8 gap-2'>
              <p>Saiba Mais</p>
              <a href="#about">
                <ArrowBigDown className='animate-bounce'></ArrowBigDown>
              </a>
            </div>
          
            <div className='flex'>
              <h1 className='text-3xl'>
                <FlipWords words={["muito", "foda"]} duration={1000}></FlipWords>
              </h1>
              
            </div>
          
        </BackgroundBeamsWithCollision>
        
    </section>
  )
}

export default HeroSection