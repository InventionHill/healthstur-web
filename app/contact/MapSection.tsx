'use client';

import { motion } from 'framer-motion';

export default function MapSection() {
    return (
        <section className="py-0 pb-16 md:pb-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.2991879025!2d72.41492686150244!3d23.02015808461759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709637845642!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
