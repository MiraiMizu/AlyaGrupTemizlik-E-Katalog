import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Box, ShieldCheck, Truck } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json'; // Importing data directly for now

const HomePage = () => {
    // Taking first 4 products for featured section
    const featuredProducts = products.slice(0, 4);

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
                {/* Abstract Background Shapes (CSS only) */}
                <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-secondary opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-accent opacity-5 rounded-full blur-3xl"></div>

                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight fade-in">
                            Endüstriyel Güç, <br />
                            <span className="text-secondary">Bilimsel Hassasiyet.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl fade-in" style={{ animationDelay: '0.1s' }}>
                            Türkiye'nin lider kimyasal ham madde tedarikçisi. Endüstriyel, kozmetik ve gıda sektörleri için güvenilir çözümler sunuyoruz.
                        </p>
                        <div className="flex flex-wrap gap-4 fade-in" style={{ animationDelay: '0.2s' }}>
                            <Link to="/products" className="btn btn-primary text-lg px-8">
                                Ürünleri İncele
                            </Link>
                            <Link to="/contact" className="btn btn-outline text-white border-white hover:bg-white hover:text-primary text-lg px-8">
                                Bize Ulaşın
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 text-secondary rounded-lg flex items-center justify-center mb-4">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">Sertifikalı Kalite</h3>
                            <p className="text-gray-500">Tüm ürünlerimiz uluslararası kalite standartlarına uygun ve analiz sertifikalıdır.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                                <Truck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">Hızlı Teslimat</h3>
                            <p className="text-gray-500">Geniş lojistik ağımız ile siparişlerinizi zamanında ve güvenle teslim ediyoruz.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                                <Box className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-2">Geniş Stok</h3>
                            <p className="text-gray-500">Sürekli güncellenen stoklarımızla ihtiyacınız olan ürüne anında ulaşın.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-20 bg-gray-50">
                <div className="container">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-4">Öne Çıkan Ürünler</h2>
                            <p className="text-gray-500 max-w-xl">En çok tercih edilen endüstriyel ve özel kimyasallarımızdan bazıları.</p>
                        </div>
                        <Link to="/products" className="hidden md:flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all">
                            Tümünü Gör <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/products" className="btn btn-primary w-full justify-center">
                            Tüm Ürünleri Gör
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary overflow-hidden relative">
                <div className="container relative z-10 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Özel Bir Çözüme mi İhtiyacınız Var?</h2>
                    <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Uzman kimyagerlerimiz ve satış ekibimiz projenize özel çözümler üretmek için hazır.</p>
                    <Link to="/contact" className="btn btn-primary bg-white text-primary hover:bg-gray-100 shadow-xl px-10 py-4 text-lg">
                        Hemen İletişime Geçin
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
