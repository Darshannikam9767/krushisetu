
import {
    Sprout,
    ShieldCheck,
    CreditCard,
    Sun,
    Droplets,
    Warehouse,
    UsersRound,
    Tractor,
    Beef,
    ClipboardList
} from 'lucide-react'

const GovernmentSchemes = () => {

    const schemes = [
        {
            title: "PM KISAN",
            description: "Financial support of ₹6,000 per year to small and marginal farmers.",
            icon: Sprout
        },
        {
            title: "PM FASAL BIMA YOJANA",
            description: "Crop insurance scheme to protect farmers from crop loss and natural calamities.",
            icon: ShieldCheck
        },
        {
            title: "SOIL HEALTH CARD SCHEME",
            description: "Promotes balanced use of fertilizers and improves soil health.",
            icon: CreditCard
        },
        {
            title: "KUSUM SOLAR PUMP SCHEME",
            description: "Financial assistance for solar pumps and grid-connected solar power.",
            icon: Sun
        },
        {
            title: "PMKSY – PER DROP MORE CROP",
            description: "Promotes water use efficiency through micro-irrigation and water conservation.",
            icon: Droplets
        },
        {
            title: "AGRICULTURE INFRASTRUCTURE FUND",
            description: "Loans for post-harvest management and agriculture infrastructure.",
            icon: Warehouse
        },
        {
            title: "FARMER PRODUCER ORGANIZATION (FPO) SCHEME",
            description: "Encourages formation and promotion of FPOs for better market access.",
            icon: UsersRound
        },
        {
            title: "NATIONAL AGRICULTURE MARKET (e-NAM)",
            description: "Online trading platform connecting farmers to mandis across India.",
            icon: Tractor
        },
        {
            title: "LIVESTOCK HEALTH AND INSURANCE",
            description: "Health services and insurance support for livestock and dairy farmers.",
            icon: Beef
        },
        {
            title: "INTEREST SUBVENTION SCHEME",
            description: "Lower interest rates on crop loans to promote timely and affordable credit.",
            icon: ClipboardList
        }
    ]

    return (
        <section id="government-schemes" className="min-h-screen w-full relative overflow-hidden">

            <img
                className="absolute inset-0 w-full h-full object-cover object-center -z-20"
                src="../images/services_bg.png"
                alt="Government schemes background"
            />

            <div className="relative z-10 w-full max-w-350 mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 py-20 mt-10">

                <div className="text-center max-w-4xl mx-auto">

                    <h3 className="flex items-center justify-center gap-3 text-sm sm:text-base font-bold tracking-widest text-green-700">
                        <span>‹</span>
                        GOVERNMENT SCHEMES
                        <span>›</span>
                    </h3>

                    <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-[-0.04em] font-bold text-gray-950">
                        Schemes for Farmers,
                        <br />
                        Support for <span className="text-green-800">Growth</span>
                    </h1>

                    <div className="flex items-center justify-center gap-3 mt-6">
                        <div className="h-0.5 w-12 rounded-full bg-green-600" />
                        <Sprout className="text-green-700" size={22} strokeWidth={2} />
                        <div className="h-0.5 w-12 rounded-full bg-green-600" />
                    </div>

                    <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-7 text-gray-600">
                        Explore government schemes and benefits designed to strengthen agriculture,
                        empower farmers and build a prosperous future.
                    </p>

                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

                    {schemes.map((scheme, index) => {

                        const Icon = scheme.icon

                        return (
                            <div
                                key={index}
                                className="group min-h-62 flex flex-col items-center text-center bg-white/80  border border-gray-200 rounded-3xl px-5 py-6 shadow-lg shadow-gray-900/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-900/15"
                            >

                                <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-green-50 text-green-800 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white group-hover:scale-105">
                                    <Icon size={30} strokeWidth={1.9} />
                                </div>

                                <h3 className="mt-5 min-h-12 flex items-center justify-center text-sm sm:text-base font-bold leading-5 text-gray-900">
                                    {scheme.title}
                                </h3>

                                <div className="h-0.5 w-9 mt-3 rounded-full bg-green-600" />

                                <p className="mt-4 text-sm leading-6 text-gray-600">
                                    {scheme.description}
                                </p>

                            </div>
                        )
                    })}

                </div>

                <div className=" group mt-10 mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6 px-7 sm:px-10 py-7 rounded-[26px] bg-white/70 backdrop-blur-sm border border-gray-200 shadow-lg shadow-gray-900/5 transition-all duration-300 hover:-translate-y-0.5">

                    <div className="flex items-center gap-5 text-center md:text-left">

                        <div className="hidden sm:flex w-16 h-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700 duration-300 group-hover:bg-green-700 group-hover:text-white group-hover:scale-105 transition-all">
                            <Sprout size={34} strokeWidth={1.8} />
                        </div>

                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-950">
                                Get the benefits you deserve.
                            </h2>

                            <p className="mt-1 text-sm sm:text-base text-gray-600">
                                We help you apply, track and avail maximum benefits
                                from government schemes.
                            </p>
                        </div>

                    </div>

                    <button className="shrink-0 flex items-center gap-3 px-6 py-3.5 rounded-[17px] bg-green-700 text-white font-semibold shadow-lg shadow-green-900/20 transition-all duration-200 hover:bg-green-800 hover:-translate-y-px hover:scale-[1.02] active:scale-100 cursor-pointer">
                        Check Your Eligibility
                        <span className="text-lg">→</span>
                    </button>

                </div>

            </div>

        </section>
    )
}

export default GovernmentSchemes