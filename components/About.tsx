"use client";

import { motion } from "motion/react";
import { Award, Users, Leaf } from "lucide-react";

const features = [
    {
        icon: <Award className="w-6 h-6 text-kadokey-pink" />,
        title: "Authentic Quality",
        desc: "Sourced directly from master artisans."
    },
    {
        icon: <Users className="w-6 h-6 text-kadokey-blue" />,
        title: "Community First",
        desc: "Supporting local craftsmanship & culture."
    },
    {
        icon: <Leaf className="w-6 h-6 text-green-500" />, // Keeping a bit of natural green logic or stick to palette? Let's stick to palette
        // Changing to kadokey-yellow/navy, wait, green represents nature. Let's use navy for contrast.
        title: "Eco-Friendly",
        desc: "Sustainable materials and packaging."
    }
]

export default function About() {
    return (
        <section id="tentang" className="py-24 bg-blue-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="relative">
                            <div className="aspect-video rounded-3xl bg-gray-200 overflow-hidden relative shadow-2xl skew-y-1">
                                {/* Placeholder */}
                                <div className="absolute inset-0 bg-gradient-to-r from-kadokey-navy to-kadokey-blue opacity-20" />
                                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-kadokey-navy/10">About Us Image</div>
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-kadokey-yellow rounded-full Blur-3xl opacity-20" />
                            <div className="absolute -top-8 -left-8 w-40 h-40 bg-kadokey-pink rounded-full blur-3xl opacity-20" />
                        </div>
                    </motion.div>

                    <div className="order-1 lg:order-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl lg:text-4xl font-bold text-kadokey-navy mb-6">
                                Crafting Memories,<br /> One Souvenir at a Time
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                At Kadokey, we believe that every souvenir holds a story. Born from a passion for Indonesian culture and craftsmanship, we strive to bridge the gap between talented local artisans and travelers seeking authentic mementos.
                            </p>

                            <div className="space-y-6">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="p-3 rounded-xl bg-white shadow-sm">
                                            {feature.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-kadokey-navy">{feature.title}</h4>
                                            <p className="text-sm text-gray-500">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
