import React from 'react';
import warehouseImg from '../assets/warehouse_inventory.png';

const About = () => {
    return (
        <div className="py-16 md:py-24 bg-gradient-to-br from-white to-purple-50 min-h-screen flex items-center">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left: Image */}
                    <div className="w-full lg:w-1/2">
                        <img 
                            src={warehouseImg} 
                            alt="Alya Grup Depo ve Stok" 
                            className="rounded-2xl shadow-xl object-cover w-full h-[400px] lg:h-[600px] border border-gray-100"
                        />
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-2">Alya Grup Güvencesi</h2>
                            <p className="text-xl text-gray-500 font-medium tracking-wide">Toptan Temizlik Ürünlerinde Çözüm Ortağınız</p>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                Alya Grup olarak, sektörün ihtiyaç duyduğu yüksek kaliteli temizlik ürünlerini tedarik eden <strong>ana bayiyiz.</strong>
                            </p>
                            <p>
                                Hastanelerden otellere, fabrikalardan kurumsal firmalara kadar geniş bir yelpazede, kendi markamız olan <strong>Plus+</strong> ürünleri ile profesyonel hijyen çözümleri sunuyoruz. Güçlü stok yapımız ve hızlı lojistik ağımız ile işletmenizin temizlik tedariğini kesintisiz sağlıyoruz.
                            </p>
                        </div>

                        <ul className="space-y-6 pt-4">
                            <li className="flex gap-4 items-start">
                                <span className="text-2xl mt-1" role="img" aria-label="factory">🏭</span>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Doğrudan Üreticiden</h4>
                                    <p className="text-gray-600">Aracı olmadan, en uygun fiyatlarla toptan satış.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-2xl mt-1" role="img" aria-label="truck">🚛</span>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Hızlı Lojistik</h4>
                                    <p className="text-gray-600">Ankara içi aynı gün, şehir dışı hızlı kargo imkanı.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-2xl mt-1" role="img" aria-label="briefcase">💼</span>
                                <div>
                                    <h4 className="font-bold text-primary text-lg">Kurumsal Çözümler</h4>
                                    <p className="text-gray-600">İşletmenize özel ödeme ve tedarik planlaması.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
