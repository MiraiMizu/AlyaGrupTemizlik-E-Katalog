import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">İletişime Geçin</h1>
                    <p className="text-gray-500 text-lg">
                        Ürünlerimiz hakkında bilgi almak, fiyat teklifi istemek veya teknik destek için bize ulaşın.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-bold text-primary mb-6">Mesaj Gönderin</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Adınız Soyadınız</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">E-posta Adresi</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="ornek@sirket.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Konu</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all bg-white">
                                    <option>Genel Bilgi</option>
                                    <option>Fiyat Teklifi</option>
                                    <option>Teknik Destek</option>
                                    <option>Bayilik Başvurusu</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all" placeholder="Size nasıl yardımcı olabiliriz?"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full justify-center gap-2 py-4 text-lg">
                                Gönder <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>

                    {/* Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6">
                            <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-2">Telefon</h3>
                                <p className="text-gray-500 mb-2">Hafta içi 08:30 - 18:00 arası</p>
                                <a href="tel:+902125550000" className="text-xl font-bold text-primary hover:text-secondary transition-colors">+90 (212) 555 00 00</a>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6">
                            <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <div>
                                    <h3 className="text-lg font-bold text-primary mb-2">E-posta</h3>
                                    <p className="text-gray-500 mb-2">Her zaman bize yazabilirsiniz</p>
                                    <a href="mailto:info@alyagrup.com" className="text-xl font-bold text-primary hover:text-secondary transition-colors">info@alyagrup.com</a>
                                </div>              </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6">
                            <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-primary mb-2">Merkez Ofis & Depo</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    İkitelli Organize Sanayi Bölgesi<br />
                                    Metal İş Sanayi Sitesi, 3. Cadde No: 12<br />
                                    Başakşehir / İstanbul
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
