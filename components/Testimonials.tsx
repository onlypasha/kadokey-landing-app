"use client";

import { Star, User } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
    {
        name: "ariansyahn",
        meta: "26 ulasan · 35 foto",
        time: "9 bulan lalu",
        text: "tempat bersih, barang lumayan lengkap dan harga terjangkau ibunya juga ramah dan baik banget",
        avatarColor: "bg-blue-100 text-blue-600",
        maps: "https://maps.app.goo.gl/Wdfwk8HNZA8ykURK9"
    },
    {
        name: "Eny Iksirawaty Anugraeny",
        meta: "3 ulasan",
        time: "setahun lalu",
        text: "Barang2’nya bagus Tempatnya nyaman dan bersih Harga murah … Lainnya",
        avatarColor: "bg-pink-100 text-pink-600",
        maps: "https://maps.app.goo.gl/mbgsBeKDnxMByjGw7"
    },
    {
        name: "Desy Arie",
        meta: "3 ulasan · 2 foto",
        time: "setahun lalu",
        text: "Toko fancy and gift yg harganya terjangkau",
        avatarColor: "bg-yellow-100 text-yellow-700",
        maps: "https://maps.app.goo.gl/9M2mHao16QaMywDE7"
    },
];

export default function Testimonials() {
    return (
        <section id="testimoni" className="py-24 bg-red-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-kadokey-navy mb-4">
                        Apa Kata Mereka
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ulasan jujur dari pelanggan setia kami di Google Maps
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-kadokey-blue/10 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${review.avatarColor}`}>
                                    {review.name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <h3 className="font-bold text-kadokey-navy text-sm">{review.name}</h3>
                                    <p className="text-xs text-gray-500">{review.meta}</p>
                                </div>
                            </div>

                            <div className="flex text-kadokey-yellow mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-current" />
                                ))}
                            </div>

                            <p className="text-gray-600 leading-relaxed flex-grow">
                                "{review.text}"
                            </p>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-400">
                                {review.time}. Lihat di <a href={review.maps} target="_blank" rel="noopener noreferrer">Google Maps</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
