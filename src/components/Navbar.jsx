import { useState } from "react"

const Navbar = () => {

    const navLinks = [
        "Home",
        "About",
        "Services",
        "Programs",
        "Government Schemes",
        "Training",
        "Contact"
    ]

    const [activeLink, setActiveLink] = useState("Home")

    return (
        <nav className="
            fixed
            top-5
            left-1/2
            -translate-x-1/2
            z-99

            w-[94%]
            max-w-350
            h-19

            px-5
            md:px-7

            flex
            items-center
            justify-between

            rounded-[28px]

            bg-white/30
            backdrop-blur-[9px]

            border
            border-gray-200

            shadow-gray-500 shadow-2xl
        ">

            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">

                <img
                    className="h-11 w-11 object-contain"
                    src="/leaf_img.png"
                    alt="Krushisetu"
                />

                <h1 className="
                    text-xl
                    md:text-2xl
                    font-bold
                    tracking-[-0.03em]
                    text-green-900
                     cursor-default
                ">
                    Krushisetu
                </h1>

            </div>


            {/* Desktop Navigation */}
            <div className="
                hidden
                lg:flex
                items-center
                gap-7
                xl:gap-9
            ">

                {navLinks.map((section, index) => (

                    <a
                        key={section}
                        onClick={()=>{
                            setActiveLink(section)
                        }}
                        className={`
                            relative
                            py-2

                            text-[14px]
                            xl:text-[15px]

                            font-medium

                            transition-all
                            duration-200

                            ${
                                activeLink === section
                                    ? "text-green-700 font-extrabold cursor-pointer"
                                    : "text-gray-400 hover:text-green-900 cursor-pointer"
                            }

                            group
                        `}
                    >

                        {section}

                        {/* Active underline */}
                        {activeLink === section && (
                            <span className="
                                absolute
                                left-0
                                right-0
                                -bottom-1

                                h-0.5

                                rounded-full

                                bg-green-700
                            " />
                        )}

                    </a>

                ))}

            </div>


            {/* CTA */}
            <button className="
                hidden
                md:flex

                items-center
                gap-3

                px-6
                h-12

                rounded-[18px]

                bg-[#277A2D]
                hover:bg-[#1F6625]

                text-white
                font-semibold
                text-sm

                shadow-[0_5px_16px_rgba(39,122,45,0.25)]

                transition-all
                duration-200

                hover:scale-[1.02]
                active:scale-[0.98]
            ">

                Get Started

                <span className="text-lg leading-none">
                    →
                </span>

            </button>


            {/* Mobile Menu */}
            <button
                className="
                    flex
                    lg:hidden

                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-2xl

                    bg-[#F1F7F1]
                    text-[#185C22]

                    text-xl
                "
                aria-label="Open menu"
            >
                ☰
            </button>

        </nav>
    )
}

export default Navbar