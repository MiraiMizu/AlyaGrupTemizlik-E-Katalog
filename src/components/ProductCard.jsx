import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-36 sm:h-48 overflow-hidden bg-gray-100">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-primary text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {product.category}
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400">Ambalaj</span>
                        <span className="text-sm font-medium text-gray-700">{product.features.Ambalaj || 'Belirtilmemiş'}</span>
                    </div>

                    <Link
                        to={`/products/${product.id}`}
                        className="flex items-center gap-1 text-secondary font-semibold text-sm group-hover:gap-2 transition-all"
                    >
                        İncele <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
