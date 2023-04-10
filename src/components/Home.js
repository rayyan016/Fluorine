import React from 'react';
import image from "../img1.jpg"

export default function Home(){
    return(
    <>
        <main>
            <img src={image} alt="Wallpaper" className="absolute object-center w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-cyan-800 font-bold cursive leading-none lg:leading-snug home-name">Ciao. I'm Perseus.</h1>
            </section>
        </main>
    </>
    )
}