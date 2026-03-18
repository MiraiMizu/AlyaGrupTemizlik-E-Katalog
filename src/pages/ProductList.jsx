import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { Filter, Search } from 'lucide-react';

const ProductList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState(productsData);
    const [searchTerm, setSearchTerm] = useState('');

    const currentCategory = searchParams.get('cat');

    // Extract unique categories
    const categories = ['Tümü', ...new Set(productsData.map(p => p.category))];

    useEffect(() => {
        let filtered = productsData;

        // Filter by Category
        if (currentCategory && currentCategory !== 'Tümü') {
            filtered = filtered.filter(p => p.category === currentCategory);
        }

        // Filter by Search
        if (searchTerm) {
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setProducts(filtered);
    }, [currentCategory, searchTerm]);

    const handleCategoryChange = (cat) => {
        if (cat === 'Tümü') {
            searchParams.delete('cat');
            setSearchParams(searchParams);
        } else {
            setSearchParams({ cat });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen py-10">
            <div className="container">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <h1 className="text-3xl font-bold text-primary">Ürün Kataloğu</h1>

                    <div className="relative w-full md:w-96">
                        <input
                            type="text"
                            placeholder="Ürün adı veya kodu ara..."
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary shadow-sm"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters */}
                    <div className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
                            <div className="flex items-center gap-2 mb-6 text-primary">
                                <Filter className="w-5 h-5" />
                                <h3 className="font-bold text-lg">Kategoriler</h3>
                            </div>
                            <ul className="space-y-2">
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => handleCategoryChange(cat)}
                                            className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors ${(currentCategory === cat || (!currentCategory && cat === 'Tümü'))
                                                    ? 'bg-blue-50 text-secondary font-semibold'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                                                }`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        {products.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl p-10 text-center border border-gray-100">
                                <p className="text-gray-500 text-lg">Aradığınız kriterlere uygun ürün bulunamadı.</p>
                                <button
                                    onClick={() => { setSearchTerm(''); handleCategoryChange('Tümü'); }}
                                    className="mt-4 text-secondary hover:underline font-medium"
                                >
                                    Filtreleri Temizle
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
