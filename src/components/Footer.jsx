import React from 'react';
import { Link } from 'react-router-dom';
import { Beaker, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-white pt-16 pb-8 mt-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Beaker className="w-6 h-6 text-secondary" />
                            <span className="text-xl font-bold tracking-tight">ALYA<span className="text-secondary">GRUP</span></span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Endüstriyel, gıda ve kozmetik sektörleri için yüksek kaliteli ham madde ve kimyasal çözümler sunuyoruz. Güvenilir tedarik zinciri ve teknik destek.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Hızlı Erişim</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-gray-400 hover:text-secondary text-sm transition-colors">Anasayfa</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-secondary text-sm transition-colors">Ürünlerimiz</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-secondary text-sm transition-colors">Hakkımızda</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-secondary text-sm transition-colors">İletişim</Link></li>
                            <li><Link to="/msds" className="text-gray-400 hover:text-secondary text-sm transition-colors">Yasal & MSDS</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Kategoriler</h3>
                        <ul className="space-y-3">
                            <li><Link to="/products?cat=Kağıt Grubu" className="text-gray-400 hover:text-secondary text-sm transition-colors">Kağıt Grubu</Link></li>
                            <li><Link to="/products?cat=Eldiven Grubu" className="text-gray-400 hover:text-secondary text-sm transition-colors">Eldiven Grubu</Link></li>
                            <li><Link to="/products?cat=Kimyasal Grubu" className="text-gray-400 hover:text-secondary text-sm transition-colors">Kimyasal Grubu</Link></li>
                            <li><Link to="/products?cat=Sarf Grubu" className="text-gray-400 hover:text-secondary text-sm transition-colors">Sarf Grubu</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-400">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>Organize Sanayi Bölgesi, 3. Cadde No: 12<br />Başakşehir / İstanbul</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+90 (212) 555 00 00</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>info@alyagrup.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; 2024 AlyaGrup Temizlik. Tüm hakları saklıdır.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white">Gizlilik Politikası</Link>
                        <Link to="/terms" className="hover:text-white">Kullanım Şartları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
