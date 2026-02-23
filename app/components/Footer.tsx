"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Twitter, Youtube, Facebook } from 'lucide-react';

import { motion } from 'framer-motion';
import BookConsultationDialog from './BookConsultationDialog';

const Footer = () => {
    const [isConsultationOpen, setIsConsultationOpen] = useState(false);

    return (
        <footer className="bg-[#023051] text-white pt-16 pb-6">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">

                    {/* Column 1: Brand & Contact */}
                    <div className="space-y-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <div className="bg-white p-1.5 rounded-xl">
                                <Image src="/Logo.svg" alt="Healthstur Logo" width={40} height={40} className="object-contain" />
                            </div>
                            <span className="text-2xl font-black tracking-tight uppercase">HEALTHSTUR</span>
                        </Link>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering you to live a healthier, stronger, and more mindful life. Science-backed plans for every body.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:care.healthstur@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-[#00284D] flex items-center justify-center group-hover:bg-[#00355E] transition-colors">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold">care.healthstur@gmail.com</span>
                            </a>
                            <a href="tel:+91 9998117873" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group">
                                <div className="w-10 h-10 rounded-full bg-[#00284D] flex items-center justify-center group-hover:bg-[#00355E] transition-colors">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold">+91 9998117873</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-[#00284D] flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-bold">123 Wellness Blvd, CA 90210</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Programs */}
                    <div className="lg:pl-8">
                        <div className="flex items-center gap-4 mb-8">
                            <h4 className="text-lg font-bold">Programs</h4>
                            <div className="h-[1px] bg-gray-700 flex-grow max-w-[100px]"></div>
                        </div>
                        <ul className="space-y-4 text-sm text-gray-400 font-medium">
                            <li><Link href="#" className="hover:text-white transition-colors">Nutrition & Diet Plan</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Age-Group Specific</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Gym & Exercises</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Corporate Wellness</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Woman’s Health</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Health Specific Programs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Lifestyle Habits</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Ayurveda</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support & Resources */}
                    <div className="lg:pl-4">
                        {/* Support */}
                        <div className="mb-10">
                            <div className="flex items-center gap-4 mb-8">
                                <h4 className="text-lg font-bold">Support</h4>
                                <div className="h-[1px] bg-gray-700 flex-grow max-w-[100px]"></div>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-400 font-medium">
                                <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                                <li>
                                    <button
                                        onClick={() => setIsConsultationOpen(true)}
                                        className="hover:text-white transition-colors text-left"
                                    >
                                        Book Consultation
                                    </button>
                                </li>
                                <li><Link href="/sucess" className="hover:text-white transition-colors">Success Stories</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <h4 className="text-lg font-bold">Resources</h4>
                                <div className="h-[1px] bg-gray-700 flex-grow max-w-[100px]"></div>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-400 font-medium">
                                <li><Link href="/wellness" className="hover:text-white transition-colors">Wellness Guides</Link></li>
                                <li><Link href="/articals" className="hover:text-white transition-colors">Expert Articles</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div>
                        <h4 className="text-lg font-bold mb-8">Follow Us</h4>
                        <div className="flex flex-col gap-4">
                            <Link href="#" className="flex items-center gap-3 bg-[#00284D] hover:bg-[#00355E] p-3 rounded-lg transition-colors group">
                                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                <span className="text-sm font-semibold text-gray-300 group-hover:text-white">Instagram</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-3 bg-[#00284D] hover:bg-[#00355E] p-3 rounded-lg transition-colors group">
                                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                <span className="text-sm font-semibold text-gray-300 group-hover:text-white">Twitter</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-3 bg-[#00284D] hover:bg-[#00355E] p-3 rounded-lg transition-colors group">
                                <Youtube className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                <span className="text-sm font-semibold text-gray-300 group-hover:text-white">Youtube</span>
                            </Link>
                            <Link href="#" className="flex items-center gap-3 bg-[#00284D] hover:bg-[#00355E] p-3 rounded-lg transition-colors group">
                                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white" />
                                <span className="text-sm font-semibold text-gray-300 group-hover:text-white">Facebook</span>
                            </Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t-2 border-white-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300 font-medium">
                    <p>© 2026 HEALTHSTUR. All rights reserved.</p>
                    <div className="flex items-center gap-8">
                        <Link href="/refund" className="hover:text-white  transition-colors">Refund Policy</Link>
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </motion.div>
            <BookConsultationDialog isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
        </footer>
    );
};

export default Footer;
