
const About = () => {
    return (
        <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-between gap-10 px-6 sm:px-8 lg:px-12 xl:px-16 py-20">
            <div className="w-full md:w-2/3 max-w-4xl flex flex-col">

                <div>
                    <h3 className="text-sm font-bold tracking-widest text-green-700">ABOUT US</h3>

                    <h1 className="mt-7 text-5xl sm:text-6xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-wide font-bold text-gray-950">ABOUT <span className='text-green-800'>Krushisetu</span></h1>

                    <div className="h-0.5 w-[35%] mt-5 rounded-2xl bg-green-600" />

                    <p className="mt-7 max-w-2xl text-base sm:text-lg leading-7 text-gray-600">
                        Krushisetu is the Agriculture Development Wing of Be The Change Foundation. We work hand-in-hand with farmers to bring knowledge, technology, resources and opportunities to every farm and farming community.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 ">

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left bg-white/80 border border-gray-200 shadow-xl shadow-gray-900/10 px-8 py-3 rounded-3xl">
                        <h3 className="text-lg font-bold text-green-900">Farmer First</h3>
                        <div className="h-px w-12 mt-3 rounded-2xl bg-green-600" />
                        <p className="mt-3 text-sm leading-6 text-gray-600">Every initiative is designed for farmers.</p>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left border border-gray-200 shadow-xl shadow-gray-900/10 px-8 py-3 rounded-3xl">
                        <h3 className="text-lg font-bold text-green-900">Sustainable Imapact</h3>
                        <div className="h-px w-12 mt-3 rounded-2xl bg-green-600" />
                        <p className="mt-3 text-sm leading-6 text-gray-600">Building long-term value for rural commuties.</p>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left border border-gray-200 shadow-xl shadow-gray-900/10 px-8 py-3 rounded-3xl">
                        <h3 className="text-lg font-bold text-green-900">Trust and Transparency</h3>
                        <div className="h-px w-12 mt-3 rounded-2xl bg-green-600" />
                        <p className="mt-3 text-sm leading-6 text-gray-600">Ethical practices and strong partnerships.</p>
                    </div>
                </div>

            </div>

            <div className="w-full md:w-1/3 max-w-md flex items-center flex-col justify-center bg-white/85 backdrop-blur-xl rounded-[28px] gap-5 mt-8 md:mt-0 p-7 sm:p-9 border border-gray-200 shadow-xl shadow-gray-900/10">
                <img className="w-40 h-40 sm:w-44 sm:h-44 rounded-full object-center object-cover border-4 border-white shadow-lg" src="../images/about_women_pic.png" alt="Rachana Pandit Salunke" />
                <div className="flex flex-col items-center justify-center gap-2 text-center ">
                    <h3 className="text-2xl font-bold text-green-800">Rachana Pandit Salunke</h3>
                    <p className="text-sm text-gray-600">Founder & Managing Director, Krushisetu</p>
                    <div className="h-px w-20 mt-3 rounded-full bg-green-600" />
                </div>

                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <h4 className="text-lg font-bold text-green-900">Qualifications</h4>
                    <p className="text-sm text-gray-700">B.Sc. Agriculture</p>
                    <span className="text-sm text-gray-700">PG in Agribusiness Management</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <div className="h-px w-full bg-gray-300 rounded-full" />
                    <h4 className="text-lg font-bold text-green-900">Additional Role</h4>
                    <p className="text-sm text-gray-700">Secretary, Be The Change Foundation</p>
                </div>
            </div>

        </section>
    )
}

export default About
