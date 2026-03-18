import React, { useState, useEffect, useRef, forwardRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { ChevronLeft, ChevronRight, Beaker, MapPin, Phone, Mail, Grid, X, ArrowLeft, ZoomIn } from 'lucide-react';
import productsData from '../data/products.json';
import AlyaGrupLogo from '../assets/AlyaGrupLogo.png';

// --- Page Wrapper (A4 Portrait - Dark Theme) ---
const Page = forwardRef((props, ref) => {
    return (
        <div className="page-content bg-black text-white italic overflow-hidden shadow-inner border-r border-gray-800" ref={ref}>
            <div className="h-full w-full relative flex flex-col">
                {props.children}
                {/* Page Number */}
                {props.number && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-gray-500 font-mono not-italic bg-black/50 px-2 rounded-full backdrop-blur-sm z-50">
                        - {props.number} -
                    </div>
                )}
            </div>
        </div>
    );
});

// --- Transparent Page (For Cover Layout Fix) ---
const TransparentPage = forwardRef((props, ref) => {
    return (
        <div className="w-full h-full bg-transparent pointer-events-none" ref={ref}>
            {/* Empty transparent container */}
        </div>
    );
});

// --- Overlay Components (New Feature) ---

const CategoryGallery = ({ category, products, onClose, onSelectProduct }) => (
    <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/50">
            <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">{category}</h2>
                <p className="text-sm text-gray-400">Ürün Kataloğu</p>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={32} className="text-gray-400 hover:text-white" />
            </button>
        </div>

        {/* Grid Content */}
        <div className="flex-1 overflow-y-auto p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {products.map(product => (
                    <div
                        key={product.id}
                        onClick={() => onSelectProduct(product)}
                        className="group cursor-pointer bg-white/5 rounded-xl border border-white/10 overflow-hidden hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/10 transition-all duration-300"
                    >
                        <div className="aspect-square relative overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white drop-shadow-md" size={32} />
                            </div>
                        </div>
                        <div className="p-4 bg-black/40">
                            <h4 className="font-bold text-white truncate">{product.name}</h4>
                            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{product.features.Marka || 'Alya Grup'}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const ProductDetail = ({ product, onBack, onClose }) => (
    <div className="fixed inset-0 z-[210] bg-black flex flex-col md:flex-row animate-slideUp">
        {/* Close/Back Controls */}
        <div className="absolute top-6 right-6 z-50 flex gap-4">
            <button onClick={onBack} className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur border border-white/10 rounded-full text-white hover:bg-white/10 transition-all">
                <ArrowLeft size={18} /> <span className="text-sm font-medium">Geri Dön</span>
            </button>
            <button onClick={onClose} className="p-2 bg-black/50 backdrop-blur border border-white/10 rounded-full text-white hover:bg-red-500/20 hover:text-red-400 transition-all">
                <X size={24} />
            </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-gray-900">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-8 md:p-16"
            />
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full p-8 md:p-16 flex flex-col justify-center bg-black border-l border-white/10 overflow-y-auto">
            <span className="text-secondary tracking-widest uppercase text-sm font-bold mb-2">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">{product.name}</h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-10 border-l-4 border-gray-700 pl-6 italic">
                "{product.description}"
            </p>

            {/* Features Table */}
            <div className="bg-white/5 rounded-xl border border-white/10 p-6 max-w-lg">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Beaker size={18} className="text-secondary" />
                    Ürün Özellikleri
                </h3>
                <div className="space-y-3">
                    {Object.entries(product.features).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center border-b border-white/5 pb-2 last:border-0 last:pb-0">
                            <span className="text-gray-500 text-sm">{key}</span>
                            <span className="text-white font-medium text-sm">{value}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
                <button
                    onClick={() => {
                        window.location.href = `mailto:alyagruptemizlik@gmail.com?subject=Sipariş Bilgi Talebi: ${product.name}`;
                    }}
                    className="flex-1 py-4 bg-secondary hover:bg-secondary-hover text-white font-bold rounded-lg transition-all shadow-lg shadow-secondary/20 flex items-center justify-center gap-2"
                >
                    <Mail size={18} />
                    Fiyat İste
                </button>
                <button
                    onClick={() => {
                        window.open(`https://wa.me/905550000000?text=Merhaba, ${product.name} hakkında bilgi almak istiyorum.`, '_blank');
                    }}
                    className="flex-1 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-lg transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2"
                >
                    <Phone size={18} />
                    WhatsApp
                </button>
            </div>
        </div>
    </div>
);

// --- Existing Sub-Components (With Modifications) ---

const CoverPage = () => (
    <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-black text-white bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-black relative overflow-hidden border-r-4 border-gray-900">

        {/* Ambient Background Glow for Logo */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

        {/* Logo Section */}
        <div className="relative z-10 mb-6 sm:mb-16 transform transition-transform duration-700 hover:scale-105">
            <img
                src={AlyaGrupLogo}
                alt="Alya Grup Logo"
                className="w-36 sm:w-72 h-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] filter brightness-110"
            />
        </div>

        {/* Minimalist Typography */}
        <div className="relative z-10 flex flex-col items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-4 w-full justify-center">
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-gray-500"></div>
                <h2 className="text-xs sm:text-lg font-light tracking-[0.3em] text-gray-300 uppercase">
                    Katalog
                </h2>
                <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-gray-500"></div>
            </div>

            <h1 className="text-lg sm:text-3xl font-medium tracking-widest text-white uppercase drop-shadow-lg">
                Temizlik <span className="text-secondary font-bold">&</span> Hijyen
            </h1>

            <p className="text-[9px] font-mono text-gray-500 tracking-[0.2em] mt-1">
                PROFESYONEL ÇÖZÜMLER
            </p>
        </div>

        {/* Footer Year */}
        <div className="absolute bottom-6 sm:bottom-12 left-0 right-0 text-center">
            <div className="inline-block px-4 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                <p className="text-[10px] font-bold tracking-widest text-gray-400">2026</p>
            </div>
        </div>
    </div>
);

const InfoPage1 = () => (
    <div className="h-full flex flex-col bg-black text-white">
        <div className="h-1/2 relative overflow-hidden">
            <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800"
                alt="Lab"
                className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end p-6">
                <h2 className="text-3xl font-bold text-white border-b-2 border-secondary pb-2">Üretim Gücü</h2>
            </div>
        </div>
        <div className="h-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-secondary mb-4">Kimyasal & Hijyen</h3>
            <p className="text-sm text-gray-300 leading-relaxed text-justify mb-4">
                Modern tesislerimizde, uluslararası standartlara uygun temizlik kimyasalları üretiyoruz. Yıllık 50.000 ton kapasite ile hastane, otel ve fabrikaların hijyen yükünü taşıyoruz.
            </p>
            <ul className="text-sm text-gray-400 space-y-2">
                <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    Ar-Ge Laboratuvarları
                </li>
                <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    ISO 9001 Standartları
                </li>
            </ul>
        </div>
    </div>
);

const InfoPage2 = () => (
    <div className="h-full flex flex-col bg-black text-white">
        <div className="h-1/2 relative overflow-hidden">
            <img
                src="/images/ankara_logistics.png"
                alt="Logistics Map"
                className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/50"></div>
        </div>
        <div className="h-1/2 p-4 sm:p-8 flex flex-col justify-center">
            <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-6 text-right border-r-4 border-secondary pr-4">Lojistik</h2>
            <div className="space-y-3 sm:space-y-6">
                <div className="text-right">
                    <h4 className="font-bold text-secondary text-sm sm:text-base">Hızlı Teslimat</h4>
                    <p className="text-xs text-gray-400 mt-1">
                        Ankara içi: <span className="text-white font-bold">24 Saat</span><br />
                        İstanbul: <span className="text-white font-bold">48 Saat</span><br />
                        Tüm Türkiye: <span className="text-white font-bold">96 Saat</span>
                    </p>
                </div>
                <div className="text-right">
                    <h4 className="font-bold text-secondary text-sm sm:text-base">Merkezi Dağıtım</h4>
                    <p className="text-xs text-gray-400 mt-1">Ankara merkezli lojistik ağımız ile kesintisiz tedarik zinciri.</p>
                </div>
            </div>
        </div>
    </div>
);

const CategoryCoverPage = ({ category, onOpenGallery }) => (
    <div className="h-full flex flex-col items-center justify-center bg-black p-8 border-4 border-double border-gray-800 shadow-inner group">
        <div className="w-full h-full border border-gray-800 flex flex-col items-center justify-center bg-white/5 backdrop-blur-sm relative overflow-hidden">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 p-24 bg-secondary/5 rounded-full blur-2xl translate-x-1/2 -translate-y-1/2"></div>

            <h2 className="text-4xl font-bold text-center text-white mb-4 px-4 relative z-10">{category}</h2>
            <div className="w-16 h-1 bg-secondary mb-6 relative z-10"></div>
            <p className="text-center text-gray-400 max-w-xs text-sm relative z-10 mb-8">
                Endüstriyel kullanım için profesyonel çözümler. Yüksek kalite, ekonomik fiyat.
            </p>

            {/* New "See All" Button */}
            <button
                onClick={() => onOpenGallery(category)}
                className="relative z-10 group/btn flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-secondary hover:text-white transition-all duration-300 rounded-full font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(14,165,233,0.4)]"
            >
                <Grid size={16} />
                Tüm Ürünleri İncele
            </button>
        </div>
    </div>
);

const ProductGridPage = ({ products, category, pageIndex, totalPages }) => (
    <div className="h-full w-full p-3 sm:p-6 md:p-8 flex flex-col bg-black overflow-hidden box-border">
        {/* Header */}
        <div className="flex justify-between items-end mb-2 sm:mb-4 border-b border-gray-800 pb-2 shrink-0">
            <h3 className="text-sm sm:text-xl font-bold text-white tracking-tight truncate max-w-[70%]">{category}</h3>
            <span className="text-[8px] sm:text-[10px] font-medium text-gray-500 whitespace-nowrap">Sayfa {pageIndex} / {totalPages}</span>
        </div>

        {/* 2x2 Grid (Total 4 items max) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4 flex-grow content-start">
            {products.map(product => (
                <div key={product.id} className="flex flex-col gap-1 mb-1 group">
                    <div className="aspect-square bg-white/5 rounded-lg overflow-hidden border border-gray-800 relative shadow-md hover:border-gray-600 transition-all">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-1 sm:p-2 pt-4 sm:pt-6">
                            <div className="text-white text-[8px] sm:text-[10px] font-medium truncate text-center">
                                {product.name}
                            </div>
                        </div>
                    </div>
                    {product.features.Kod && (
                        <div className="text-[7px] sm:text-[9px] text-gray-500 text-center uppercase tracking-wider font-sans not-italic mt-1">
                            {product.features.Kod}
                        </div>
                    )}
                </div>
            ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-1 sm:pt-2 border-t border-gray-800 flex justify-between items-center text-[7px] sm:text-[8px] text-gray-600 uppercase tracking-widest font-sans not-italic">
            <span>AlyaGrup</span>
            <span>2026</span>
        </div>
    </div>
);

const ContactPage = () => (
    <div className="h-full bg-black text-white p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-secondary/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>

        <h2 className="text-4xl font-bold mb-12 relative z-10 border-l-4 border-secondary pl-4">İletişim</h2>

        <div className="space-y-8 relative z-10 pl-2">
            <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors border border-white/5"><Phone size={20} className="text-secondary" /></div>
                <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans not-italic">Çağrı Merkezi</p>
                    <p className="text-lg font-bold">+90 (212) 555 00 00</p>
                </div>
            </div>

            <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors border border-white/5"><Mail size={20} className="text-secondary" /></div>
                <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans not-italic">E-Posta</p>
                    <p className="text-lg font-bold truncate max-w-[200px]" title="alyagruptemizlik@gmail.com">alyagruptemizlik@gmail.com</p>
                </div>
            </div>

            <div className="flex items-center gap-4 group">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-secondary/20 transition-colors border border-white/5"><MapPin size={20} className="text-secondary" /></div>
                <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-sans not-italic">Genel Merkez</p>
                    <p className="text-sm">Yenimahalle<br />Ankara / Türkiye</p>
                </div>
            </div>
        </div>

        <div className="mt-auto pt-8 border-t border-white/10 text-[10px] text-gray-600 text-center font-sans not-italic">
            www.alyagrup.com
        </div>
    </div>
);

// --- Main Magazine Component ---

const Magazine = () => {
    const bookRef = useRef();
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    // --- New State for Overlays ---
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeProduct, setActiveProduct] = useState(null);

    const [dimensions, setDimensions] = useState({ width: 480, height: 680 });
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;
            if (screenW < 768) {
                setIsMobile(true);
                // On mobile portrait: use nearly full screen width, maintain A4 ratio capped by screen height
                const w = Math.min(420, screenW - 16);
                const hFromRatio = w * 1.416;
                const hMax = screenH - 130; // leave room for nav hint + safe area
                setDimensions({ width: w, height: Math.min(hFromRatio, hMax) });
            } else {
                setIsMobile(false);
                // Desktop - either full size or scaled to fit window width
                const targetW = (screenW - 80) / 2;
                if (targetW < 480) {
                    setDimensions({ width: targetW, height: targetW * 1.416 });
                } else {
                    setDimensions({ width: 480, height: 680 });
                }
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // 4 products per page works well for 2-column grid in portrait without overflowing
    const PRODUCTS_PER_PAGE = 4;

    // Filter products for active category to show in gallery
    const galleryProducts = activeCategory
        ? productsData.filter(p => p.category === activeCategory)
        : [];

    const rawPages = [];
    if (!isMobile) rawPages.push({ type: 'empty' }); // Dummy page to push Cover to the right on desktop
    rawPages.push({ type: 'cover' });
    rawPages.push({ type: 'info1' });
    rawPages.push({ type: 'info2' });

    const categories = ['Kağıt Grubu', 'Eldiven Grubu', 'Kimyasal Grubu', 'Sarf Grubu'];

    categories.forEach(cat => {
        const catProducts = productsData.filter(p => p.category === cat).slice(0, PRODUCTS_PER_PAGE);
        if (catProducts.length > 0) {
            rawPages.push({ type: 'cat_cover', category: cat });
            rawPages.push({
                type: 'products',
                category: cat,
                products: catProducts,
                pageIndex: 1,
                totalPages: 1
            });
        }
    });

    rawPages.push({ type: 'contact' });
    if (!isMobile) rawPages.push({ type: 'empty' }); // Dummy page to ensure Contact page can be flipped nicely if needed

    // Assign display numbers (only count actual content pages)
    let displayCount = 0;
    const pages = rawPages.map(page => {
        if (page.type === 'empty' || page.type === 'cover' || page.type === 'cat_cover' || page.type === 'contact') {
            return { ...page, displayNum: null };
        }
        displayCount++;
        return { ...page, displayNum: displayCount };
    });

    useEffect(() => {
        setTotalPages(pages.length);
    }, [pages.length]);

    const nextPage = () => bookRef.current?.pageFlip().flipNext();
    const prevPage = () => bookRef.current?.pageFlip().flipPrev();

    // Sync state with flipbook
    const onFlip = (e) => {
        setCurrentPage(e.data);
    };

    const handleOpenGallery = (category) => {
        setActiveCategory(category);
    };

    const handleSelectProduct = (product) => {
        setActiveProduct(product);
    };

    const handleCloseGallery = () => {
        setActiveCategory(null);
        setActiveProduct(null);
    };

    const handleCloseDetail = () => {
        setActiveProduct(null);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (activeProduct) {
                if (e.key === 'Escape') handleCloseDetail();
                return;
            }
            if (activeCategory) {
                if (e.key === 'Escape') handleCloseGallery();
                return;
            }

            if (e.key === 'ArrowRight') nextPage();
            if (e.key === 'ArrowLeft') prevPage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeCategory, activeProduct]);

    const renderPageContent = (pageData) => {
        switch (pageData.type) {
            case 'empty': return <div className="h-full w-full bg-transparent"></div>;
            case 'cover': return <CoverPage />;
            case 'info1': return <InfoPage1 />;
            case 'info2': return <InfoPage2 />;
            case 'cat_cover': return <CategoryCoverPage category={pageData.category} onOpenGallery={handleOpenGallery} />;
            case 'products': return <ProductGridPage {...pageData} />;
            case 'contact': return <ContactPage />;
            default: return null;
        }
    };

    return (
        <div className="h-screen w-full bg-[#0a0a0a] flex justify-center items-center overflow-hidden relative">

            {/* Nav Buttons (Edge Click Zones) */}
            <button
                onClick={prevPage}
                className="absolute left-0 top-0 h-full w-[15%] z-[100] outline-none hover:bg-white/5 transition-colors cursor-w-resize"
                title="Önceki"
            />
            <button
                onClick={nextPage}
                className="absolute right-0 top-0 h-full w-[15%] z-[100] outline-none hover:bg-white/5 transition-colors cursor-e-resize"
                title="Sonraki"
            />

            {/* FlipBook - Dual Page Mode */}
            <div className={`relative z-10 flex items-center justify-center py-10 perspective-1000 transition-all duration-500 ${activeCategory ? 'scale-90 opacity-50 blur-sm pointer-events-none' : ''}`}>
                <HTMLFlipBook
                    key={isMobile ? 'mobile' : 'desktop'}
                    width={dimensions.width}     // Width of ONE page
                    height={dimensions.height}    // Height of ONE page (~A4 Ratio)
                    size="fixed"    // Fixed size ensures aspect ratio is locked
                    minWidth={dimensions.width}
                    maxWidth={dimensions.width}
                    minHeight={dimensions.height}
                    maxHeight={dimensions.height}
                    maxShadowOpacity={0.8} // Deep shadows for realism
                    showCover={false}
                    mobileScrollSupport={true}
                    useMouseEvents={true}  // Enable dragging corners
                    className="shadow-[0_20px_50px_rgba(0,0,0,0.5)]" // Custom deep shadow
                    ref={bookRef}
                    usePortrait={isMobile}
                    startZIndex={0}
                    flippingTime={1000} // Smooth 1s flip
                    drawShadow={true}
                    showPageCorners={true} // Visual hint for interactivity
                    disableFlipByClick={false}
                >
                    {pages.map((pageData, index) => (
                        pageData.type === 'empty' ? (
                            <TransparentPage key={index} />
                        ) : (
                            <Page key={index} number={pageData.displayNum}>
                                {renderPageContent(pageData)}
                            </Page>
                        )
                    ))}
                </HTMLFlipBook>
            </div>

            {/* Gallery Overlay */}
            {activeCategory && (
                <CategoryGallery
                    category={activeCategory}
                    products={galleryProducts}
                    onClose={handleCloseGallery}
                    onSelectProduct={handleSelectProduct}
                />
            )}

            {/* Product Detail Overlay */}
            {activeProduct && (
                <ProductDetail
                    product={activeProduct}
                    onBack={handleCloseDetail}
                    onClose={() => { handleCloseDetail(); handleCloseGallery(); }}
                />
            )}

            <div className={`md:hidden absolute bottom-8 left-0 right-0 text-center text-white/40 text-xs pointer-events-none z-20 ${activeCategory ? 'opacity-0' : ''}`}>
                Çevirmek için kenarlara dokunun
            </div>
        </div>
    );
};

export default Magazine;
