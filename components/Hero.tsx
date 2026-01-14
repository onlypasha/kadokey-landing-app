"use client";

import { motion } from "motion/react";
import { ArrowRight, Gift } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-kadokey-pink/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-kadokey-yellow/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kadokey-blue/10 text-kadokey-navy text-sm font-semibold mb-6">
                            <Gift className="w-4 h-4 text-kadokey-pink" />
                            <span>Toko Souvenir</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold text-kadokey-navy leading-tight mb-6">
                            Aksesoris, Kado, Alat Tulis & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kadokey-pink to-kadokey-maroon">
                                Musik
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Lebih dari sekedar toko souvenir, Kadokey adalah tempat dimana anda dapat mendapatkan pengalaman berbelanja yang unik dan menyenangkan dengan harga yang affordable
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#produk"
                                className="inline-flex items-center justify-center px-8 py-4 text-white bg-kadokey-navy rounded-full font-semibold shadow-lg shadow-kadokey-navy/20 hover:bg-kadokey-maroon hover:scale-105 transition-all duration-300"
                            >
                                Product
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <a
                                href="#testimoni"
                                className="inline-flex items-center justify-center px-8 py-4 text-kadokey-navy bg-white border border-gray-200 rounded-full font-semibold hover:border-kadokey-blue/50 hover:bg-blue-50/50 transition-all duration-300"
                            >
                                Ulasan
                            </a>
                        </div>
                    </motion.div>

                    {/* Visual/Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[3rem] overflow-hidden bg-gray-100 relative shadow-2xl shadow-kadokey-navy/10 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                            <Image
                                src="/images/kadokey.jpg"
                                alt="Kadokey Store"
                                fill
                                className="object-cover"
                            />

                            {/* Decorative floating cards */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute top-8 right-8 bg-white p-4 rounded-2xl shadow-xl z-10 max-w-[150px]"
                            >
                                <div className="h-2 w-12 bg-kadokey-pink/20 rounded mb-2" />
                                <div className="h-2 w-20 bg-gray-100 rounded" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [10, -10, 10] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-12 left-8 bg-white p-4 rounded-2xl shadow-xl z-10 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-kadokey-yellow/20 flex items-center justify-center text-kadokey-yellow font-bold">★</div>
                                <div>
                                    <div className="text-sm font-bold text-kadokey-navy">5.0</div>
                                    <div className="text-xs text-gray-500">on Google Maps</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
