import React from 'react'
import { BackgroundBeamsWithCollision } from './ui/BackgroundBeans'

const HeroSection = () => {
  return (
    <section className='h-screen w-screen' id='hero'>
        <BackgroundBeamsWithCollision className={"flex flex-col pt-10"}>
            <div className='flex flex-col text-center cursor-pointer hover:scale-105 transform transition duration-500 ease-in-out'>
                <span className='font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-600'>Coode</span>
                <p className='font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 to-purple-600'>&lt;ArTezra&gt;</p>
            </div>

            <h1 className='text-5xl text-center font-bold mt-20 '>Desenvolvedor <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 '>Web</span> <span className='text-transparent bg-clip-text bg-gradient-to-bl from-purple-600 to-pink-600'>FrontEnd</span>.</h1>
            <div className='px-8 mt-4'>
                <p className='text-zinc-300 leading-4 font-semibold text-center text-lg'>Bem-Vindo ao meu portifólio, meu nome é Arthur e aqui você vai conhecer mais sobre mim e o meu trabalho.</p>
            </div>

            <div>
                
            </div>
        </BackgroundBeamsWithCollision>
    </section>
  )
}

export default HeroSection