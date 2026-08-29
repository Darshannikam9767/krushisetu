import {
    UsersRound,
    Landmark,
    GraduationCap,
    Sprout,
    Leaf,
    Factory,
    FileText,
    Handshake
} from 'lucide-react'

const Services = () => {

    const services = [
        {
            title: "Farmer Advisory & Consultancy Center",
            description: "Soil testing, crop planning, pest management and irrigation planning.",
            icon: UsersRound
        },
        {
            title: "Government Scheme Facilitation Center",
            description: "PM Kisan, PM Fasal Bima Yojana, Soil Health Card, Kusum Solar Pump and more.",
            icon: Landmark
        },
        {
            title: "Farmer Training Institute",
            description: "Organic farming, mushroom cultivation, beekeeping, agribusiness and digital marketing.",
            icon: GraduationCap
        },
        {
            title: "FPO Consultancy",
            description: "Consultancy support for Farmer Producer Organizations.",
            icon: Sprout
        },
        {
            title: "Organic Certification Support",
            description: "Support for PGS India, FSSAI and AGMARK.",
            icon: Leaf
        },
        {
            title: "Agriculture Business Incubation Center",
            description: "Nursery, poultry, hydroponics and food processing opportunities.",
            icon: Factory
        },
        {
            title: "Project Report Preparation",
            description: "DPRs for bank loans, NABARD, Mudra and PMEGP.",
            icon: FileText
        },
        {
            title: "CSR Agriculture Projects",
            description: "Agriculture-focused CSR project support.",
            icon: Handshake
        }
    ]

    return (
        <section id="services" className="min-h-screen w-full relative overflow-hidden">

            <img
                className="absolute inset-0 h-full w-full object-cover object-center -z-20"
                src="../images/services_bg.png"
                alt="services background image"
            />

            <div className="absolute inset-0 bg-white/55 backdrop-blur-[2px] -z-10" />

            <div className="relative z-10 w-full max-w-350 mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 mt-10">



                <div className="text-center max-w-3xl mx-auto">

                    <h3 className="text-sm font-bold tracking-widest text-green-700">
                        OUR SERVICES
                    </h3>

                    <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.03em] text-gray-950">
                        What <span className="text-green-800">We Offer</span>
                    </h1>

                    <div className="h-1 w-20 mx-auto mt-5 rounded-full bg-green-600" />

                    <p className="mt-5 text-base sm:text-lg leading-7 text-gray-600">
                        From advisory to training, certification to market
                        linkages, we provide end-to-end support for farmers
                        and rural communities.
                    </p>

                </div>



                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    {services.map((service, index) => {

                        const Icon = service.icon

                        return (
                            <div
                                key={index}
                                className="group flex flex-col items-center text-center bg-white/85 border border-gray-200 rounded-3xl px-6 py-7 shadow-lg shadow-gray-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >


                                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-green-50 text-green-800 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white group-hover:scale-110">

                                    <Icon
                                        size={28}
                                        strokeWidth={2}
                                    />

                                </div>



                                <h3 className="mt-5 text-base sm:text-lg font-bold leading-6 text-gray-900">
                                    {service.title}
                                </h3>



                                <div className="h-0.5 w-10 mt-4 rounded-full bg-green-600" />



                                <p className="mt-4 text-sm leading-6 text-gray-600">
                                    {service.description}
                                </p>

                            </div>
                        )
                    })}

                </div>



                <div className="flex justify-center mt-10">

                    <button className="px-6 py-3 rounded-[17px] bg-green-700 text-white font-semibold shadow-lg shadow-green-900/20 transition-all duration-200 hover:bg-green-800 hover:-translate-y-px hover:scale-[1.02] active:scale-100 cursor-pointer">
                        Explore All Services →
                    </button>

                </div>

            </div>

        </section>
    )
}

export default Services