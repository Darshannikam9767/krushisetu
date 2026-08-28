import React from 'react'

const Home = () => {
    return (
        <section className='min-h-screen  w-full relative'>
            <img
                className=' absolute object-cover object-center h-full w-full -z-20'
                src="../images/home-page-image.png"
                alt="home_page_img" />

            <div className=' w-[70%] absolute bg-linear-to-r from-white to-transparent inset-0 z-0' />

            <div className='z-10 relative w-full max-w-350 pt-20 p-10 flex flex-col gap-3'>

                <div className='flex flex-col gap-2'>
                    <h1 
                    className="mt-7 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-wide font-bold
                            text-gray-950">Empowering Farmers <br />
                        <span className='text-green-800'>Transforming Agriculture</span></h1>

                    <h3 className='font-semibold text-[23px]'>An Initiative of Be The Change Foundation</h3>

                    <p className=' text-[17px]'>Empowering farmers through knowledge, technology, market <br />
                        access, and goverment schemes while creating sustainable <br />
                        income for the Foundation</p>

                    <div className='flex gap-5 pt-6'>
                        <button  className='bg-green-700 px-4 py-3 rounded-2xl text-white font-semibold transition-all duration-200 hover:scale-102 hover:-translate-y-px active:scale-100 cursor-pointer shadow-2xl shadow-gray-700'>Join as a Farmer</button>

                        <button className='bg-white/70 backdrop-blur-xs px-4 py-3 rounded-2xl font-semibold text-gray-800 transition-all duration-200 hover:scale-102 hover:-translate-y-px active:scale-100 cursor-pointer shadow-2xl shadow-gray-700 border border-gray-300'>Partner with Us</button>

                        <button className='bg-yellow-400 px-4 py-3 rounded-2xl text-green-950 font-semibold transition-all duration-200 hover:scale-102 hover:-translate-y-px active:scale-100 cursor-pointer shadow-2xl shadow-gray-700 '>Apply for Scheme Help</button>
                    </div>
                </div>

                <div className='bg-white/10 backdrop-blur-xs flex items-center justify-around w-full gap-10 px-10 py-10 rounded-3xl border border-gray-200 mt-5 text-shadow-xs text-shadow-gray-400'>
                    <div>
                        <h4>1000+</h4>
                        <h5>Farmer Members</h5>    
                    </div>
                    <div>
                        <h4>10000+</h4>
                        <h5>Long-term Reach</h5>
                    </div>
                    <div>
                        <h4>15+</h4>
                        <h5>Programs</h5>
                    </div>
                    <div>
                        <h4>40L+</h4>
                        <h5>Potential Amount Impact</h5>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home
