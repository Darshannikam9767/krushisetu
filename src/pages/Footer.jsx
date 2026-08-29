import {
  Sprout,
  MapPin,
  Phone,
  Mail,
  ArrowUp,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "919112345678";

    const message = encodeURIComponent(
      "Hello Krushisetu, I would like to know more about your services."
    );

    window.open(
      `https://wa.me/${phoneNumber}?text=${message}`,
      "_blank"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-green-950 text-white">

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="./images/services_bg.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 md:py-16">

        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div className="lg:col-span-1">

            <div className="flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-700">
                <Sprout size={30} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-wide">
                  KRUSHISETU
                </h2>

                <p className="text-xs tracking-wider text-green-200">
                  Agriculture Development Wing
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-green-100">
              Empowering Farmers • Transforming Agriculture
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-green-200">
              An Initiative of Be The Change Foundation, working towards
              sustainable opportunities and a stronger farmer-centric
              ecosystem.
            </p>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <div className="mt-2 h-1 w-8 rounded-full bg-green-500" />

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#home"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  Our Services
                </a>
              </li>

              <li>
                <a
                  href="#schemes"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  Government Schemes
                </a>
              </li>

              <li>
                <a
                  href="#training"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  Training
                </a>
              </li>

              <li>
                <a
                  href="#partners"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  Partners
                </a>
              </li>

              <li>
                <a
                  href="#leadership"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  Leadership
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  FAQ
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-green-100 transition-all duration-300 hover:ml-1 hover:text-white"
                >
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="text-lg font-bold">
              Contact Us
            </h3>

            <div className="mt-2 h-1 w-8 rounded-full bg-green-500" />

            <div className="mt-5 space-y-5">

              {/* Address */}

              <div className="flex gap-3">

                <MapPin
                  size={20}
                  className="mt-0.5 shrink-0 text-green-400"
                />

                <p className="text-sm leading-relaxed text-green-100">
                  Krushisetu, Be The Change Foundation,
                  <br />
                  123 Green Village, Pune,
                  <br />
                  Maharashtra – 411001
                </p>

              </div>

              {/* Phone */}

              <a
                href="tel:+919112345678"
                className="flex items-center gap-3 text-sm text-green-100 transition-colors duration-300 hover:text-white"
              >
                <Phone
                  size={20}
                  className="shrink-0 text-green-400"
                />

                <span>
                  +91 91234 56789
                </span>
              </a>

              {/* Email */}

              <a
                href="mailto:info@krushisetu.org"
                className="flex items-center gap-3 text-sm text-green-100 transition-colors duration-300 hover:text-white"
              >
                <Mail
                  size={20}
                  className="shrink-0 text-green-400"
                />

                <span>
                  info@krushisetu.org
                </span>
              </a>

            </div>

          </div>

          {/* ================= SOCIAL ================= */}

          <div>

            <h3 className="text-lg font-bold">
              Connect With Us
            </h3>

            <div className="mt-2 h-1 w-8 rounded-full bg-green-500" />

            <p className="mt-5 text-sm leading-relaxed text-green-200">
              Follow Krushisetu and stay connected with our latest
              agriculture initiatives and programs.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-600 hover:shadow-lg"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-pink-600 hover:shadow-lg"
              >
                <FaInstagram size={19} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-red-600 hover:shadow-lg"
              >
                <FaYoutube size={19} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-500 hover:shadow-lg"
              >
                <FaLinkedinIn size={19} />
              </a>

              <button
                onClick={handleWhatsApp}
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-green-600 hover:shadow-lg"
              >
                <MessageCircle size={21} />
              </button>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px w-full bg-white/15" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

          <p className="text-sm text-green-200">
            © 2026 Krushisetu — An Initiative of Be The Change Foundation.
            All rights reserved.
          </p>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-green-100 transition-all duration-300 hover:bg-white hover:text-green-900"
          >
            <span>
              Back to top
            </span>

            <ArrowUp
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;