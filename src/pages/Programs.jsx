
import { UserRound, Sprout, GraduationCap, Store, CloudRain, Package, Handshake } from 'lucide-react'

const Programs = () => {

    const programs = [
        {
            title: "Women Farmer Empowerment",
            description: "Building leadership and income opportunities for rural women through training and resources.",
            icon: UserRound
        },
        {
            title: "Sustainable Agriculture Promotion",
            description: "Promoting natural and organic farming practices for a healthier soil and better future.",
            icon: Sprout
        },
        {
            title: "Skill Development Programs",
            description: "Equipping farmers and rural youth with modern agricultural and entrepreneurial skills.",
            icon: GraduationCap
        },
        {
            title: "Market Linkage Initiatives",
            description: "Connecting farmers to reliable markets for fair prices and better income.",
            icon: Store
        },
        {
            title: "Youth in Agriculture Program",
            description: "Inspiring rural youth to take up agriculture as a sustainable and profitable career.",
            icon: Sprout
        },
        {
            title: "Climate Smart Agriculture",
            description: "Promoting climate-resilient practices and technologies for long-term sustainability.",
            icon: CloudRain
        },
        {
            title: "Value Addition & Food Processing",
            description: "Encouraging processing and value addition to increase farm produce income.",
            icon: Package
        },
        {
            title: "Community Development Initiatives",
            description: "Working together for education, health, water conservation and stronger rural communities.",
            icon: Handshake
        }
    ]

    return (
        <section id="programs" className="min-h-screen w-full relative overflow-hidden">

            {/* Background */}

            <img
                className="absolute inset-0 h-full w-full object-cover object-center -z-20"
                src="../images/services_bg.png"
                alt="Programs background"
            />

            {/* Overlay */}

            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] -z-10" />


            {/* Content */}

            <div className="relative z-10 w-full max-w-350 mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20">

                {/* Heading */}

                <div className="text-center max-w-3xl mx-auto">

                    <h3 className="text-sm font-bold tracking-widest text-green-700">
                        OUR PROGRAMS
                    </h3>

                    <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.03em] text-gray-950">
                        Empowering <span className="text-green-800">Farmers,</span>
                        <br />
                        Enriching <span className="text-green-800">Communities</span>
                    </h1>

                    <div className="h-1 w-20 mx-auto mt-6 rounded-full bg-green-600" />

                    <p className="mt-6 text-base sm:text-lg leading-7 text-gray-600">
                        Our programs are designed to support farmers at every step —
                        from knowledge and resources to market and growth.
                    </p>

                </div>


                {/* Program Cards */}

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {programs.map((program, index) => {

                        const Icon = program.icon

                        return (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center bg-white/85  border border-gray-200 rounded-3xl px-6 py-7 shadow-lg shadow-gray-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/15"
                            >

                                {/* Icon */}

                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-50 text-green-800 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white group-hover:scale-105">

                                    <Icon
                                        size={30}
                                        strokeWidth={1.8}
                                    />

                                </div>


                                {/* Title */}

                                <h3 className="mt-5 text-base sm:text-lg font-bold leading-6 text-gray-900">
                                    {program.title}
                                </h3>


                                {/* Divider */}

                                <div className="h-0.5 w-10 mt-4 rounded-full bg-green-600" />


                                {/* Description */}

                                <p className="mt-4 text-sm leading-6 text-gray-600">
                                    {program.description}
                                </p>

                            </div>
                        )
                    })}

                </div>


                {/* CTA */}

                <div className="flex justify-center mt-10">

                    <button className="flex items-center gap-3 px-6 py-3 rounded-[17px] bg-green-700 text-white font-semibold shadow-lg shadow-green-900/20 transition-all duration-200 hover:bg-green-800 hover:-translate-y-px hover:scale-[1.02] active:scale-100 cursor-pointer">
                        Explore All Programs
                        <span>→</span>
                    </button>

                </div>

            </div>

        </section>
    )
}

export default Programs