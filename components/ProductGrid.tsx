"use client";

import { motion } from "motion/react";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

const products = [
    {
        id: 1,
        name: "Gitar Akustik",
        price: "Rp. 25.000",
        rating: 4.8,
        image: "/images/produk/gitar.png",
        tag: "Best Seller",
        color: "bg-kadokey-navy",
    },
    {
        id: 2,
        name: "Aneka Boneka",
        price: "Rp. 25.000",
        rating: 4.9,
        image: "/images/produk/aneka-boneka.png",
        tag: "New Arrival",
        color: "bg-kadokey-maroon",
    },
    {
        id: 3,
        name: "Buket Snack",
        price: "Rp. 25.000",
        rating: 4.7,
        image: "/images/produk/buket-snack.png",
        tag: "Handmade",
        color: "bg-kadokey-pink",
    },
    {
        id: 4,
        name: "Hiasan Bunga",
        price: "Rp. 25.000",
        rating: 4.6,
        image: "/images/produk/hiasan-bunga-di-pot.png",
        tag: "Limited",
        color: "bg-kadokey-yellow text-kadokey-navy", // contrasting text for yellow
    },
];

export default function ProductGrid() {
    return (
        <section id="produk" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 visible">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-kadokey-navy mb-4">
                        Koleksi Terpilih
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Jelajahi koleksi souvenir asli pilihan kami
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-gray-50 rounded-3xl p-4 transition-all duration-300 hover:shadow-xl hover:shadow-kadokey-blue/10 hover:-translate-y-2"
                        >
                            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white mb-4">
                                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-300 font-bold text-xl">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold text-white ${product.color}`}>
                                    {product.tag}
                                </div>

                                <button className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-400 hover:text-kadokey-pink transition-colors">
                                    <Heart className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="px-2 pb-2">
                                <div className="flex items-center gap-1 mb-2">
                                    <Star className="w-4 h-4 fill-kadokey-yellow text-kadokey-yellow" />
                                    <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                                </div>

                                <h3 className="font-bold text-kadokey-navy text-lg mb-1 group-hover:text-kadokey-pink transition-colors">
                                    {product.name}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#produk" className="inline-block border-b-2 border-kadokey-navy text-kadokey-navy font-semibold hover:text-kadokey-pink hover:border-kadokey-pink transition-colors pb-1">
                        Datang ke toko untuk melihat semua koleksi
                    </a>
                </div>
            </div>
        </section>
    );
}
