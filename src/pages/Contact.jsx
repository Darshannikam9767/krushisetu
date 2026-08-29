
import {
  Send,
  UserRound,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

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

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background */}
      <img
        src="./images/services_bg.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
      />


      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-6 py-12 md:py-16 mt-20">

        {/* ================= HEADER ================= */}

        <div className="flex flex-col items-center text-center">

          <p className="text-xl font-bold tracking-wide text-green-700">
            GET IN TOUCH
          </p>

          <h1 className="mt-2 text-4xl font-bold text-green-950 md:text-5xl lg:text-6xl">
            We'd Love to Hear from You
          </h1>

          <div className="mt-4 h-1 w-10 rounded-full bg-green-700" />

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
            Have a question, suggestion or partnership idea?
            <br />
            Reach out to us and our team will get back to you soon.
          </p>

        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="mt-10 grid gap-6 lg:grid-cols-2">

          {/* ================= FORM ================= */}

          <div className="rounded-3xl border border-gray-200 bg-white/95 p-6 shadow-lg backdrop-blur-sm md:p-8">

            {/* Form Heading */}

            <div className="flex items-center gap-4">

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-800 text-white">
                <Send size={30} strokeWidth={1.8} />
              </div>

              <div>

                <h2 className="text-2xl font-bold text-green-900 md:text-3xl">
                  Send Us a Message
                </h2>

                <p className="mt-1 text-sm text-gray-600 md:text-base">
                  Fill out the form and we'll get back to you.
                </p>

              </div>

            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col gap-5"
            >

              {/* Name + Phone */}

              <div className="grid gap-5 md:grid-cols-2">

                {/* Name */}

                <div className="relative">

                  <UserRound
                    size={21}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-green-800"
                  />

                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="h-16 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />

                </div>

                {/* Phone */}

                <div className="relative">

                  <Phone
                    size={21}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-green-800"
                  />

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="h-16 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />

                </div>

              </div>

              {/* Email */}

              <div className="relative">

                <Mail
                  size={21}
                  className="absolute left-4 top-5 text-green-800"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="h-16 w-full rounded-xl border border-gray-200 bg-white pl-12 pr-4 text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>

              {/* Message */}

              <div className="relative">

                <MessageSquare
                  size={21}
                  className="absolute left-4 top-5 text-green-800"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white py-4 pl-12 pr-4 text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

              </div>

              {/* Submit */}

              <button
                type="submit"
                className="flex h-16 items-center justify-center gap-3 rounded-xl bg-green-800 px-6 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-green-900 hover:shadow-xl"
              >
                <Send size={22} />

                <span>
                  Send Message
                </span>

              </button>

            </form>

          </div>

          {/* ================= CONTACT INFORMATION ================= */}

          <div className="rounded-3xl border border-gray-200 bg-white/95 p-6 shadow-lg backdrop-blur-sm md:p-8">

            <h2 className="text-2xl font-bold text-green-900 md:text-3xl">
              Contact Information
            </h2>

            <div className="mt-3 h-1 w-10 rounded-full bg-green-600" />

            {/* Address */}

            <div className="mt-6 flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-800">
                <MapPin size={24} />
              </div>

              <div>

                <h3 className="font-bold text-green-900">
                  Address
                </h3>

                <p className="mt-1 text-sm leading-relaxed text-gray-600 md:text-base">
                  Krushisetu, Be The Change Foundation,
                  <br />
                  123 Green Village, Pune,
                  <br />
                  Maharashtra – 411001
                </p>

              </div>

            </div>

            {/* Phone */}

            <div className="mt-5 flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-800">
                <Phone size={23} />
              </div>

              <div>

                <h3 className="font-bold text-green-900">
                  Phone
                </h3>

                <a
                  href="tel:+919112345678"
                  className="mt-1 block text-sm text-gray-600 transition-colors hover:text-green-700 md:text-base"
                >
                  +91 91234 56789
                </a>

              </div>

            </div>

            {/* Email */}

            <div className="mt-5 flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-800">
                <Mail size={23} />
              </div>

              <div>

                <h3 className="font-bold text-green-900">
                  Email
                </h3>

                <a
                  href="mailto:info@krushisetu.org"
                  className="mt-1 block text-sm text-gray-600 transition-colors hover:text-green-700 md:text-base"
                >
                  info@krushisetu.org
                </a>

              </div>

            </div>

            {/* Working Hours */}

            <div className="mt-5 flex gap-4">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-800">
                <Clock size={23} />
              </div>

              <div>

                <h3 className="font-bold text-green-900">
                  Working Hours
                </h3>

                <p className="mt-1 text-sm text-gray-600 md:text-base">
                  Monday – Saturday: 9:00 AM – 6:00 PM
                </p>

              </div>

            </div>

            {/* Map */}

            <div className="mt-7">

              <h2 className="text-xl font-bold text-green-900">
                Find Us
              </h2>

              <div className="mt-2 h-1 w-10 rounded-full bg-green-600" />

              <div className="mt-4 h-44 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100">

                <iframe
                  title="Krushisetu Location"
                  src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
                  className="h-full w-full border-0"
                  loading="lazy"
                  allowFullScreen
                />

              </div>

            </div>

            {/* Social Links */}

            <div className="mt-7">

              <h2 className="text-xl font-bold text-green-900">
                Follow Us
              </h2>

              <div className="mt-2 h-1 w-10 rounded-full bg-green-600" />

              <div className="mt-4 flex gap-3">

                {/* Facebook */}

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaFacebookF size={20} />
                </a>

                {/* Instagram */}

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-600 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaInstagram size={21} />
                </a>

                {/* YouTube */}

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaYoutube size={21} />
                </a>

                {/* LinkedIn */}

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-700 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaLinkedinIn size={21} />
                </a>

                {/* WhatsApp */}

                <button
                  onClick={handleWhatsApp}
                  aria-label="WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-green-600 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-lg"
                >
                  <MessageCircle size={22} />
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;