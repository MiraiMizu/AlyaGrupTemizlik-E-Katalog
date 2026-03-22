import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import alyaLogoSmall from '../assets/AlyaGrupLogo.png';

const Footer = () => {
    return (
        <footer className="bg-white text-primary border-t border-gray-100 pt-16 pb-8 mt-20">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <img src={alyaLogoSmall} alt="Alya Grup" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Alya Grup olarak, sektörün ihtiyaç duyduğu yüksek kaliteli temizlik ürünlerini Ankara merkezli tedarik eden ana bayiyiz. Hastanelerden otellere, fabrikalardan kurumsal firmalara kaliteli çözüm ortağınız.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-600 hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Kategoriler</h3>
                        <ul className="space-y-3">
                            <li><Link to="/products?cat=Kağıt Grubu" className="text-gray-600 hover:text-secondary text-sm transition-colors">Kağıt Grubu</Link></li>
                            <li><Link to="/products?cat=Eldiven Grubu" className="text-gray-600 hover:text-secondary text-sm transition-colors">Eldiven Grubu</Link></li>
                            <li><Link to="/products?cat=Kimyasal Grubu" className="text-gray-600 hover:text-secondary text-sm transition-colors">Kimyasal Grubu</Link></li>
                            <li><Link to="/products?cat=Sarf Grubu" className="text-gray-600 hover:text-secondary text-sm transition-colors">Sarf Grubu</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-gray-600">
                                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                                <span>Lalegül Mah. 358. Cd. 68/B,<br />Yenimahalle/Ankara</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span>+90 533 139 3328</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-600">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <span>ornek@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; 2026 AlyaGrup Temizlik. Tüm hakları saklıdır.</p>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <Link to="/gizlilik-politikasi" className="hover:text-primary transition-colors">Gizlilik Politikası</Link>
                        <Link to="/cerez-politikasi" className="hover:text-primary transition-colors">Çerez Politikası</Link>
                        <Link to="/davranis-kurallari" className="hover:text-primary transition-colors">Davranış Kuralları</Link>
                        <Link to="/bilgi-guvenligi" className="hover:text-primary transition-colors">Bilgi Güvenliği</Link>
                        <Link to="/kullanim-kosullari" className="hover:text-primary transition-colors">Kullanım Koşulları</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
