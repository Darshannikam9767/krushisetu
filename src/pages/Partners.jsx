
import {
  Building2,
  Sprout,
  Landmark,
  Handshake,
  Wheat,
  Factory,
  Users,
  BriefcaseBusiness,
} from "lucide-react";

const Partners = () => {
  const partners = [
    {
      name: "Department of Agriculture",
      icon: Landmark,
    },
    {
      name: "ATMA",
      icon: Sprout,
    },
    {
      name: "KVK",
      icon: Wheat,
    },
    {
      name: "NABARD",
      icon: Building2,
    },
    {
      name: "National Horticulture Board",
      icon: Sprout,
    },
    {
      name: "APEDA",
      icon: Sprout,
    },
    {
      name: "SFAC",
      icon: Handshake,
    },
    {
      name: "NAFED",
      icon: Wheat,
    },
    {
      name: "ICAR",
      icon: Sprout,
    },
    {
      name: "MSME",
      icon: Factory,
    },
    {
      name: "NRLM",
      icon: Users,
    },
    {
      name: "PMFME",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <section
      id="partners"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <img
        src="./images/services_bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

    

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 py-12 md:py-16">

        {/* Heading */}
        <div className="flex w-full flex-col items-center text-center">
          <p className="text-lg font-bold tracking-wide text-green-700">
            OUR PARTNERS
          </p>

          <h1 className="mt-2 text-4xl font-bold text-green-950 md:text-5xl lg:text-6xl">
            Government & Institutional Partners
          </h1>

          <div className="mt-4 h-1 w-10 rounded-full bg-green-700" />

          <p className="mt-5 max-w-3xl text-base leading-relaxed tracking-wide text-gray-600 md:text-lg">
            We collaborate with government bodies and institutions to bring
            resources, knowledge and opportunities to farmers and rural
            communities.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 ">
          {partners.map((partner) => {
            const Icon = partner.icon;

            return (
              <div
                key={partner.name}
                className="group flex min-h-37.5 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white/80 p-5 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-800 transition-all duration-300 group-hover:bg-green-700 group-hover:text-white">
                  <Icon size={34} strokeWidth={1.7} />
                </div>

                {/* Name */}
                <h3 className="text-sm font-semibold leading-snug text-gray-800 md:text-base">
                  {partner.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA / Message */}
        <div className=" group mt-12 flex w-full max-w-5xl flex-col items-center gap-5 rounded-3xl border border-gray-200 bg-white/90 px-6 py-7 text-center shadow-md backdrop-blur-sm md:flex-row md:text-left hover:-translate-y-0.5 transition-all duration-200">
          
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-50 text-green-700 group-hover:bg-green-700 group-hover:text-white transition-all duration-200">
            <Handshake size={32} strokeWidth={1.8} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-green-900 md:text-2xl">
              Stronger Partnerships. Greater Impact.
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
              Together with our partners, we are building a sustainable and
              prosperous future for farmers and rural communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;