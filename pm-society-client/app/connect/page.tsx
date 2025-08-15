"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  CheckCircle,
  User,
  MessageCircle,
  Sparkles,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";

// shadcn/ui components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-white/20 rounded-full"
        initial={{
          x:
            Math.random() *
            (typeof window !== "undefined" ? window.innerWidth : 1200),
          y:
            Math.random() *
            (typeof window !== "undefined" ? window.innerHeight : 800),
        }}
        animate={{
          x:
            Math.random() *
            (typeof window !== "undefined" ? window.innerWidth : 1200),
          y:
            Math.random() *
            (typeof window !== "undefined" ? window.innerHeight : 800),
        }}
        transition={{
          duration: 20 + Math.random() * 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    ))}
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    e?: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    if (e) e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitted(true);
    setIsLoading(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen relative overflow-hidden"
        style={{ backgroundColor: "#333333" }}
      >
        <FloatingParticles />

        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: `url('/image/connect.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
        </motion.div>

        {/* Hero Section */}
        <section className="relative pt-20 pb-16 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto text-center"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeInUp}>
                <Badge
                  variant="outline"
                  className="mb-6 bg-white/20 backdrop-blur-sm border-black/20 text-black hover:bg-white/30 transition-all duration-300"
                >
                  <Sparkles className="h-4 w-4 mr-2" />
                  Get in Touch
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight"
                variants={fadeInUp}
              >
                Let&apos;s Create Something Amazing Together
              </motion.h1>

              <motion.p
                className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Ready to transform your project management journey? Our expert
                team is here to guide you every step of the way.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-16 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Contact Form */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/70 backdrop-blur-xl border-white/30 shadow-2xl h-full">
                  <CardContent className="p-8">
                    <AnimatePresence mode="wait">
                      {isSubmitted ? (
                        <motion.div
                          className="text-center py-16"
                          variants={scaleIn}
                          initial="initial"
                          animate="animate"
                          exit={{ opacity: 0, scale: 0.8 }}
                        >
                          <motion.div
                            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500 mb-8"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              repeatDelay: 2,
                            }}
                          >
                            <CheckCircle className="h-10 w-10 text-white" />
                          </motion.div>
                          <h3 className="text-3xl font-bold text-black mb-4">
                            Message Sent! 🚀
                          </h3>
                          <p className="text-gray-600 mb-8 text-lg">
                            Thanks for reaching out! We&apos;ll get back to you
                            within 24 hours.
                          </p>
                          <Button
                            onClick={() => setIsSubmitted(false)}
                            className="bg-black hover:bg-gray-800 text-white"
                            size="lg"
                          >
                            Send Another Message
                          </Button>
                        </motion.div>
                      ) : (
                        <motion.div
                          variants={fadeInUp}
                          initial="initial"
                          animate="animate"
                          exit={{ opacity: 0, y: -20 }}
                        >
                          <CardHeader className="px-0 pt-0">
                            <CardTitle className="text-3xl font-bold text-black flex items-center py-5">
                              <MessageCircle className="h-8 w-8 text-black mr-3" />
                              Drop Us a Line
                            </CardTitle>
                          </CardHeader>

                          <div className="space-y-6 ">
                           
                              <div className="space-y-2">
                                <Label className="text-black flex items-center font-medium ">
                                  <User className="h-4 w-4 mr-2" />
                                  Full Name *
                                </Label>
                                <Input
                                  type="text"
                                  name="name"
                                  value={formData.name}
                                  onChange={handleChange}
                                  className={`bg-white/50 py-5 backdrop-blur-sm border-white/30 focus:border-black focus:ring-black/20 focus:bg-white/70 transition-all ${
                                    errors.name ? "border-red-500" : ""
                                  }`}
                                  placeholder="John Doe"
                                />
                                {errors.name && (
                                  <Alert variant="destructive" className="py-2">
                                    <AlertDescription className="text-sm">
                                      {errors.name}
                                    </AlertDescription>
                                  </Alert>
                                )}
                              </div>

                              <div className="space-y-2">
                                <Label className="text-black flex items-center font-medium ">
                                  <Mail className="h-4 w-4 mr-2" />
                                  Email Address *
                                </Label>
                                <Input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleChange}
                                  className={`bg-white/50 py-5 backdrop-blur-sm border-white/30 focus:border-black focus:ring-black/20 focus:bg-white/70 transition-all ${
                                    errors.email ? "border-red-500" : ""
                                  }`}
                                  placeholder="john@example.com"
                                />
                                {errors.email && (
                                  <Alert variant="destructive" className="py-2">
                                    <AlertDescription className="text-sm">
                                      {errors.email}
                                    </AlertDescription>
                                  </Alert>
                                )}
                              </div>
                       

                            <div className="space-y-2">
                              <Label className="text-black flex items-center font-medium ">
                                <Phone className="h-4 w-4 mr-2" />
                                Phone Number
                              </Label>
                              <Input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="bg-white/50 py-5 backdrop-blur-sm border-white/30 focus:border-black focus:ring-black/20 focus:bg-white/70 transition-all"
                                placeholder="+1 (555) 123-4567"
                              />
                            </div>

                            <div className="space-y-2">
                              <Label className="text-black flex items-center font-medium ">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Message *
                              </Label>
                              <Textarea
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                className={`resize-none bg-white/50 py-5 backdrop-blur-sm border-white/30 focus:border-black focus:ring-black/20 focus:bg-white/70 transition-all ${
                                  errors.message ? "border-red-500" : ""
                                }`}
                                placeholder="Tell us about your project or how we can help you..."
                              />
                              {errors.message && (
                                <Alert variant="destructive" className="py-2">
                                  <AlertDescription className="text-sm">
                                    {errors.message}
                                  </AlertDescription>
                                </Alert>
                              )}
                            </div>

                            <Button
                              onClick={() => handleSubmit()}
                              disabled={isLoading}
                              className="w-full bg-black hover:bg-gray-800 text-white"
                              size="lg"
                            >
                              {isLoading ? (
                                <>
                                  <motion.div
                                    className="h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                      duration: 1,
                                      repeat: Infinity,
                                      ease: "linear",
                                    }}
                                  />
                                  Sending...
                                </>
                              ) : (
                                <>
                                  <Send className="h-5 w-5 mr-2" />
                                  Send Message
                                </>
                              )}
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div variants={fadeInUp}>
                <Card className="bg-white/70 backdrop-blur-xl border-white/30 shadow-2xl h-full">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-black mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      Ready to elevate your project management skills?
                      Let&apos;s connect and discuss how we can help you achieve
                      your goals.
                    </p>

                    <div className="space-y-6">
                      {[
                        {
                          icon: Mail,
                          title: "Email Us",
                          content: "contact@thepmsociety.com",
                          href: "mailto:contact@thepmsociety.com",
                          hover: "hover:bg-blue-600",
                        },
                        {
                          icon: Phone,
                          title: "Call Us",
                          content: "832-535-5064",
                          href: "tel:8325355064",
                          hover: "hover:bg-green-600",
                        },
                        {
                          icon: Instagram,
                          title: "Instagram",
                          content: "@thepmsociety",
                          href: "https://www.instagram.com/thepmsociety",
                          hover: "hover:bg-purple-600",
                        },
                        {
                          icon: Facebook,
                          title: "Facebook",
                          content: "@thepmsociety",
                          href: "https://www.facebook.com/thepmsociety",
                          hover: "hover:bg-blue-600",
                        },
                        {
                          icon: Linkedin,
                          title: "LinkedIn",
                          content: "@thepmsociety",
                          href: "https://www.linkedin.com/company/thepmsociety",
                          hover: "hover:bg-blue-800",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start group cursor-pointer"
                          whileHover={{ x: 10 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          <div className="flex-shrink-0 mt-1">
                            <motion.div
                              className={`w-12 h-12 bg-black ${item.hover} rounded-xl flex items-center justify-center transition-colors`}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 10,
                              }}
                            >
                              <item.icon className="h-6 w-6 text-white" />
                            </motion.div>
                          </div>
                          <div className="ml-6">
                            <h3 className="text-xl font-semibold text-black mb-2">
                              {item.title}
                            </h3>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-gray-600 hover:text-black transition-colors whitespace-pre-line"
                            >
                              {item.content}
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}