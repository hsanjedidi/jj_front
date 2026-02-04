import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { HeroInnerContactData } from "@/app/hooks/data-contact";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-black">
      <HeroInnerBlock
        title={"Contact Us"}
        image={"/hero/gallery-14a.jpg"}
        altText={HeroInnerContactData.altText}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "Contact", link: "/contact-us" },
        ]}
      />
      <section className="py-16 bg-[#112020]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-[#fbfffd] uppercase tracking-[0.3em] mb-10">
            Follow our story
          </p>
          <div className="flex flex-wrap gap-6 justify-center mt-5">
            {[
              { icon: <Instagram size={22} />, link: "#", label: "Instagram" },
              { icon: <Facebook size={22} />, link: "#", label: "Facebook" },
              { icon: <Linkedin size={22} />, link: "#", label: "LinkedIn" },
              { icon: <Twitter size={22} />, link: "#", label: "Twitter" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                aria-label={social.label}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#e7d8c3] hover:border-[#e7d8c3] transition-all duration-300 shadow-xl backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* --- TOP SECTION: INFO CARDS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Call Us",
                detail: "+1 (555) 123-4567",
                sub: "Mon-Fri from 9am to 6pm",
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                detail: "hello@jjs.com",
                sub: "Online support 24/7",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Visit Us",
                detail: "123 Business Street",
                sub: "New York, NY 10001",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-[#e7d8c3] p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 bg-[#c24156]/5 rounded-full flex items-center justify-center text-[#b08243] mx-auto mb-6 group-hover:bg-[#b08243] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1A3030] mb-2">
                  {item.title}
                </h3>
                <p className="text-black font-medium mb-1">{item.detail}</p>
                <p className="text-gray-400 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* --- LEFT: FORM --- */}
            <div className="w-full lg:w-5/12">
              <span className="text-[#348056] font-bold tracking-[0.2em] uppercase text-xs">
                Contact Form
              </span>
              <h2 className="text-5xl font-serif font-bold text-[#e7d8c3] mt-4 mb-8 leading-tight">
                Send message
              </h2>

              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-2 border-gray-200 rounded-xl px-4 py-4 focus:border-[#e7d8c3] text-white outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-2 border-gray-200 rounded-xl px-4 py-4 focus:border-[#b08243] text-white outline-none transition-colors"
                  />
                </div>
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full bg-transparent border-2 border-gray-200 rounded-2xl px-4 py-4 focus:border-[#b08243] text-white outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="group flex items-center gap-3 bg-[#b08243] text-white px-8 py-4 rounded-full hover:bg-[#b08243] transition-all duration-300 transform hover:-translate-y-1">
                  <span className="font-bold">Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* --- RIGHT: MAP SECTION --- */}
            <div className="w-full lg:w-7/12 h-[600px] relative rounded-[2rem] overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.47!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v123456789"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location Map"
                className="grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A3030]">Open Now</p>
                    <p className="text-sm text-gray-500">
                      Closing today at 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW DEDICATED SOCIAL MEDIA SECTION --- */}
      <section className="py-16 bg-[#1A3030]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold text-[#fbfffd] uppercase tracking-[0.3em] mb-10">
            Follow our story
          </p>
          <div className="flex flex-wrap gap-6 justify-center mt-5">
            {[
              { icon: <Instagram size={22} />, link: "#", label: "Instagram" },
              { icon: <Facebook size={22} />, link: "#", label: "Facebook" },
              { icon: <Linkedin size={22} />, link: "#", label: "LinkedIn" },
              { icon: <Twitter size={22} />, link: "#", label: "Twitter" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                aria-label={social.label}
                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#e7d8c3] hover:border-[#e7d8c3] transition-all duration-300 shadow-xl backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
