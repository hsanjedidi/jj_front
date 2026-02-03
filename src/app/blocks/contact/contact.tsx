import HeroInnerBlock from "@/app/components/common/hero-inner/Hero-inner";
import { HeroInnerContactData } from "@/app/hooks/data-contact";
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <HeroInnerBlock
        title={"Contact Us"}
        image={"/hero/gallery-14a.jpg"}
        altText={HeroInnerContactData.altText}
        breadcrumbs={[
          { id: 1, title: "Home", link: "/" },
          { id: 2, title: "Contact", link: "/contact-us" },
        ]}
      />

      <section className="relative bg-[#fdfbf7] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[800px]">
          {/* CÔTÉ GAUCHE : LA MAP */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-auto relative grayscale hover:grayscale-0 transition-all duration-700 border-r border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156743895!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca979a217ef4c!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647525350000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Location Map"
              className="absolute inset-0"
            />
          </div>

          {/* CÔTÉ DROIT : INFOS & FORMULAIRE */}
          <div className="w-full lg:w-1/2 py-16 px-6 md:px-12 lg:px-20 flex flex-col justify-center bg-[#e7d8c3]/30">
            <div className="max-w-2xl mx-auto lg:mx-0 w-full">
              {/* Header section */}
              <div className="mb-12">
                <span className="text-[#c24156] font-bold tracking-widest uppercase text-xs">
                  Get in touch
                </span>
                <h2 className="text-4xl font-serif font-bold text-[#1A3030] mt-3 mb-6">
                  Let’s Start a Conversation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  {[
                    {
                      icon: <MapPin className="w-4 h-4" />,
                      title: "Location",
                      content: "123 Business Street, City",
                    },
                    {
                      icon: <Phone className="w-4 h-4" />,
                      title: "Phone",
                      content: "+1 (555) 123-4567",
                    },
                    {
                      icon: <Mail className="w-4 h-4" />,
                      title: "Email",
                      content: "hello@jjs.com",
                    },
                    {
                      icon: <Clock className="w-4 h-4" />,
                      title: "Hours",
                      content: "Mon-Sun: 10AM-11PM",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#c24156] shadow-sm">
                        {item.icon}
                      </div>
                      <p className="text-sm text-gray-700 font-medium">
                        {item.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Formulaire compact et pro */}
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
                <form className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Full name"
                        className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c24156] outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email address"
                        className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c24156] outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Your message here..."
                      className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#c24156] outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#c24156] hover:bg-[#1A3030] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#c24156]/20">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
