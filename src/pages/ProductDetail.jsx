import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Download, Shield, Zap } from 'lucide-react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
    const { id } = useParams();
    const product = productsData.find(p => p.id === parseInt(id));

    if (!product) {
        return <div className="container py-20 text-center">Ürün bulunamadı.</div>;
    }

    // Find related products (same category, excluding current)
    const relatedProducts = productsData
        .filter(p => p.category === product.category && p.id !== product.id)
        .slice(0, 4);

    return (
        <div className="py-10 bg-white">
            <div className="container">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link to="/" className="hover:text-primary">Anasayfa</Link> /
                    <Link to="/products" className="hover:text-primary">Ürünler</Link> /
                    <span className="text-secondary font-medium">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-[400px] lg:h-[500px] shadow-sm">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-primary shadow-sm">
                            {product.category}
                        </div>
                    </div>

                    {/* Info */}
                    <div>
                        <h1 className="text-4xl font-bold text-primary mb-4">{product.name}</h1>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            {Object.entries(product.features).map(([key, value]) => (
                                <div key={key} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <span className="block text-xs text-gray-400 uppercase tracking-wider mb-1">{key}</span>
                                    <span className="font-semibold text-primary">{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <Link to="/contact" className="btn btn-primary flex-1 text-center justify-center py-4">
                                Fiyat ve Stok Sor
                            </Link>
                            <button className="btn btn-outline flex-1 justify-center gap-2 py-4">
                                <Download className="w-5 h-5" />
                                MSDS İndir
                            </button>
                        </div>

                        {/* Additional Info / Safety */}
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <Shield className="w-6 h-6 text-green-600 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary">Güvenli Kullanım</h4>
                                    <p className="text-sm text-gray-500">Bu ürün profesyonel kullanım içindir. Lütfen kullanmadan önce güvenlik bilgi formunu okuyunuz.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Zap className="w-6 h-6 text-accent shrink-0" />
                                <div>
                                    <h4 className="font-bold text-primary">Teknik Destek</h4>
                                    <p className="text-sm text-gray-500">Ürün uygulaması ve formülasyon desteği için uzmanlarımızla iletişime geçebilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="border-t border-gray-100 pt-16">
                        <h2 className="text-2xl font-bold text-primary mb-8">Benzer Ürünler</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
