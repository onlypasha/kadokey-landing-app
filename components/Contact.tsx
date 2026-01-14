"use client";

import { MapPin, Clock, Navigation } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [statusText, setStatusText] = useState("Memuat...");
    const [statusColor, setStatusColor] = useState("bg-gray-400"); // default

    useEffect(() => {
        const checkStatus = () => {
            const now = new Date();
            const day = now.getDay();
            const hour = now.getHours();


            const isWeekday = day >= 1 && day <= 5;
            const isOpenHours = hour >= 9 && hour < 21;

            if (isWeekday && isOpenHours) {
                setIsOpen(true);
                setStatusText("Buka Sekarang");
                setStatusColor("bg-green-500");
            } else {
                setIsOpen(false);
                setStatusText("Saat ini tutup");
                setStatusColor("bg-red-400");
            }
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="kontak" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-kadokey-navy mb-4">
                        Kunjungi Toko Kami
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Silakan datang dan sapa kami, serta jelajahi koleksi kami secara langsung.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Info Card */}
                    <div className="bg-blue-50/50 p-8 rounded-3xl border border-kadokey-blue/10">
                        <div className="space-y-8">
                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-kadokey-pink">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-kadokey-navy mb-2">Lokasi</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        RT.6/RW.5, Grogol Utara, Kec. Kebayoran Lama,<br />
                                        Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210
                                    </p>
                                    <p className="mt-2 text-sm text-kadokey-blue font-medium">
                                        QQRR+7M Grogol Utara
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-xl shadow-sm text-kadokey-yellow">
                                    <Clock className="w-6 h-6 text-kadokey-navy" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-kadokey-navy mb-2">Jam Operasional</h3>
                                    <div className="space-y-1 text-gray-600">
                                        <p className="flex items-center gap-2">
                                            <span className={`w-2 h-2 rounded-full ${statusColor}`}></span>
                                            {statusText}
                                        </p>
                                        <p className="text-sm">Buka Senin - Jumat 09:00 - 21:00</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="https://maps.google.com/?q=QQRR+7M+Grogol+Utara,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-4 bg-kadokey-navy text-white rounded-xl font-semibold hover:bg-kadokey-maroon transition-colors shadow-lg shadow-kadokey-navy/20"
                                >
                                    <Navigation className="w-5 h-5" />
                                    Lihat Peta
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map / Image Placeholder */}
                    <div className="h-full min-h-[400px] w-full bg-gray-200 rounded-3xl overflow-hidden relative shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.257080649557!2d106.7785361!3d-6.2222384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f14d02319277%3A0x62911b3394017f8!2sGrogol%20Utara%2C%20Kebayoran%20Lama%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
