import {
  FiAward,
  FiBookOpen,
  FiUsers,
  FiTrendingUp,
  FiCheck,
  FiStar,
  FiClock,
  FiUser,
  FiTarget,
  FiSettings,
} from "react-icons/fi";

import ServiceCard from "../components/services/ServiceCard";
import Planning from "../components/services/Planning";

import localFont from "next/font/local";
import Image from "next/image";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Link from "next/link";

const bonVivant = localFont({
  src: "../../public/fonts/BonVivantSerifBold.ttf",
  weight: "700",
});

// Main Services Page Component
export default function ServicesPage() {
  const services = [
    {
      icon: <FiAward className="h-10 w-10" />,
      title: "IGNITE",
      description:
        "Explore project management & build a foundation. Perfect for career changers & aspiring PMs.",
      features: [
        "23-hour PMI-aligned CAPM® instruction",
        "2 Executive Coaching Sessions",
        "2 months access to PM learning materials",
        "2 months access to Society+ portal",
      ],
      price: "$999",
      cta: "Enroll Now",
      ctaLink: "enroll",
      featured: false,
    },
    {
      icon: <FiBookOpen className="h-10 w-10" />,
      title: "ELEVATE",
      description:
        "Guide professionals through PMP certification, mentoring & leadership roles. For experienced PMs ready for growth.",
      features: [
        "35 hours of virtual instructor-led PMP® training",
        "PMP application support",
        "3 executive coaching sessions",
        "3 months access to PM learning materials",
        "2 mentorship sessions",
        "2 months access to Society+ portal",
      ],
      price: "$3,500",
      cta: "Enroll Now",
      ctaLink: "enroll",
      featured: true,
    },
    {
      icon: <FiTrendingUp className="h-10 w-10" />,
      title: "ASCEND",
      description:
        "Bridge gap post-certification & build leadership. Ideal for certified PMs, team leads, future executives.",
      features: [
        "PMI-ACP® or PMP® training ",
        "Advanced project management workshops",
        "5 executive coaching sessions",
        "5 project management mentorship sessions",
        "Mastermind group access (peer accountability + strategy)",
        "6 months of Society+ portal access",
      ],
      price: "$4,500",
      cta: "Enroll Now",
      ctaLink: "enroll",
      featured: false,
    },
    {
      icon: <FiUsers className="h-10 w-10" />,
      title: "THE SOCIETY",
      description:
        "Membership designed to keep project professionals connected, resourced, & growing.",
      features: [
        "Growth Partner Matching",
        "Access to PM discussion forums",
        "PMBOK & Learning Library",
        "Blogs & community events",
        "On-demand content",
      ],
      price: "$49/month or $499/year",
      cta: "Join Society",
      ctaLink: "enroll",
      featured: false,
    },
    {
      icon: <FiUser className="h-10 w-10" />,
      title: "THE SOCIETY+",
      description:
        "Enhanced membership with coaching and mentorship. For project professionals wanting monthly mentoring or coaching & deeper community.",
      features: [
        "1 Executive Coaching  or PM Mentorship session per month",
        "Growth Partner Matching",
        "Access to PM discussion forums",
        "PMBOK & Learning Library",
        "Blogs & community events",
        "On-demand content",
      ],
      price: "$89/month or $899/year",
      cta: "Join Society+",
      ctaLink: "enroll",
      featured: true,
    },
    {
      icon: <FiSettings className="h-10 w-10" />,
      title: "BUILD YOUR OWN PATH",
      description:
        "Coaching & PM support on your terms. Choose your focus: executive coaching, mentorship, communication, Agile/Scrum, or open topics.",
      features: [
        "Executive Coaching",
        "Project Management Mentorship",
        "Leadership Communication Coaching",
        "Agile & Scrum Practice Deep Dives",
        "Open-Topic Sessions",
      ],
      price: "3 sessions for $400",
      cta: "Book Now",
      ctaLink: "enroll",
      featured: false,
    },
  ];

  return (
    <>
      <Header />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-44 pb-24 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/image/olivia.jpeg"
              alt="Team collaboration in modern workspace"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40 z-10" />
          </div>

          <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
                <FiStar className="h-4 w-4 text-yellow-400" />
                <span className="tracking-wide">
                  Professional Development & Networking Platform
                </span>
              </div>

              <h1
                className={`text-4xl md:text-6xl text-white font-bold leading-tight tracking-tight ${bonVivant.className}`}
              >
                Elevate Your Career
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed max-w-2xl mx-auto">
                Strategic training, mentorship, and community support designed
                to grow confident project leaders and drive real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Services Cards Section */}
        <section id="services" className="py-20 bg-[#ECE8E1]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className={`${bonVivant.className} text-4xl font-black text-black mb-4`}
              >
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From certification to career elevation, our services are here to
                guide every step of your journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* PMP Certification Feature Section */}
        <section id="pmp" className="py-20 bg-[#f8f9fa]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <FiAward className="h-4 w-4" />
                  98% Pass Rate
                </div>
                <h2
                  className={`${bonVivant.className} text-4xl font-black text-black mb-4`}
                >
                 Certification and Career Growth Programs
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you&apos;re just getting started or ready to certify, our
                  programs provide expert instruction, mentorship, and the
                  support you need to lead with confidence.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <FiClock className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Live Virtual Sessions</p>
                      <p className="text-sm text-gray-600">
                        PMI Required Training
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                      <FiUsers className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Small Classes
                      </p>
                      <p className="text-sm text-gray-600">
                        Personalized Attention
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="enroll"
                  className="group bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Enroll Now
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <FiAward className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Get Certified
                    </h3>
                    <p className="text-gray-600 mb-6">
                     Expert-led training with community support and our commitment to your success.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-black font-semibold">
                      <FiCheck className="h-5 w-5" />
                      Backed by The Society Standard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Coaching Section */}
        <section id="executive-coaching" className="py-20 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform -rotate-3"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center">
                      <FiUser className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      1-on-1 Mentorship
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Career-aligned support from experienced project leaders to
                      help you grow with clarity, connection, and confidence.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-black font-semibold">
                      <FiTarget className="h-5 w-5" />
                      Tailored Approach
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white rounded-full text-sm font-medium mb-6">
                  <FiUsers className="h-4 w-4" />
                  Executive Level
                </div>
                <h2
                  className={`${bonVivant.className} text-4xl font-black text-black mb-4`}
                >
                  Executive Coaching
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Personalized leadership support designed to elevate how you
                  think, lead, and deliver impact.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "One-on-one coaching from certified change and leadership experts",
                    "Tailored development plans aligned with your career goals",
                    "Focused growth in executive presence, communication, and strategic execution",
                    "Built to support bold leadership through change, complexity, and growth",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                        <FiCheck className="h-3 w-3 text-gray-700" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="enroll"
                  className="group bg-gray-900 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Planning />
      </div>
      <Footer />
    </>
  );
}
