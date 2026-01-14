import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-kadokey-navy text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand & Desc */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold bg-gradient-to-r text-kadokey-yellow inline-block">
                            Kadokey
                        </h2>
                        <p className="text-kadokey-blue/80 leading-relaxed max-w-sm">
                            Tertarik dengan produk yang kami tawarkan? Hubungi kami sekarang melalui Instagram atau datangi langsur toko kami sesuai alamat yang tertera di halaman ini!
                        </p>
                        <div className="flex gap-4 pt-2">
                            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Facebook className="w-5 h-5" />} />
                            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-kadokey-yellow">Quick Links</h3>
                        <ul className="space-y-3 text-kadokey-blue/80">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#produk" className="hover:text-white transition-colors">Produk</Link></li>
                            <li><Link href="#testimoni" className="hover:text-white transition-colors">Testimoni</Link></li>
                            <li><Link href="#kontak" className="hover:text-white transition-colors">Kontak</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-kadokey-yellow">Contact Us</h3>
                        <ul className="space-y-4 text-kadokey-blue/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-kadokey-pink" />
                                <span>RT.6/RW.5, Grogol Utara, Kec. Kebayoran Lama,<br />
                                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <InstagramCopy href="https://www.instagram.com/kado.key/" />
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 flex-shrink-0 text-kadokey-pink" />
                                <span>+62 123 4567 890</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-kadokey-blue/20 pt-8 text-center text-sm text-kadokey-blue/60">
                    <p>&copy; {new Date().getFullYear()} Kadokey. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="bg-white/10 p-2 rounded-full hover:bg-kadokey-pink hover:text-white transition-all duration-300"
        >
            {icon}
        </a>
    );
}


function InstagramCopy({ href }: { href: string }) {
    return (
        <a
            href={href}
            className="flex items-center gap-3 group cursor-pointer"
        >
            <Instagram className="w-5 h-5 flex-shrink-0 text-kadokey-pink" />
            <span className="group-hover:text-white transition-colors">Instagram</span>
        </a>
    )
}
