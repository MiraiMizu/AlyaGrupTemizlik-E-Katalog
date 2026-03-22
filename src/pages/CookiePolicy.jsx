import React, { useEffect } from 'react';

const CookiePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-10 md:py-20 bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Çerez (Cookie) Aydınlatma Metni</h1>
                    <p className="text-gray-500 text-lg">Son Güncelleme: Mart 2026</p>
                </div>
                
                <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
                    <section>
                        <p className="leading-relaxed text-lg">Alya Grup olarak uygulamamızı ziyaretiniz sırasında deneyiminizi geliştirmek ve sitemizin güvenliğini sağlamak amacıyla çerezler (cookies) kullanmaktayız.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">1. Çerez Nedir?</h3>
                        <p className="leading-relaxed">Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza (bilgisayar, telefon, tablet vb.) ağ tarayıcısı üzerinden kaydedilen küçük metin dosyalarıdır. Çerezler, sitemizi daha verimli kullanabilmeniz için tarayıcı tercihlerinizi hatırlamamıza yardımcı olur.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">2. Hangi Çerezleri Kullanıyoruz?</h3>
                        <ul className="list-disc pl-6 space-y-4 mt-4 ml-4">
                            <li><strong>Zorunlu Çerezler:</strong> Web sitemizin düzgün çalışması, (örneğin hareketli animasyonların performansı ve sayfa güvenlik protokolleri) için kesinlikle gerekli olan çerezlerdir. Onayınıza tabi değildir.</li>
                            <li><strong>Performans ve Analiz Çerezleri:</strong> Ziyaretçilerin web sitemizi nasıl kullandığını (en çok ziyaret edilen Plus+ ürünleri, sayfada kalma süresi vb.) istatistiki olarak analiz etmemizi sağlayan anonim çerezlerdir.</li>
                            <li><strong>İşlevsellik Çerezleri:</strong> Sitemizi tekrar ziyaret ettiğinizde tercihlerinizi hatırlamak amacıyla kullanılır.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">3. Çerez Yönetimi</h3>
                        <p className="leading-relaxed">İnternet tarayıcınızın ayarlarını değiştirerek çerezlere ilişkin tercihlerinizi kişiselleştirebilirsiniz. Tarayıcınız üzerinden çerezleri kapatabilir, silebilir veya yeni bir çerez eklendiğinde uyarı alabilirsiniz. Ancak zorunlu çerezlerin kapatılması durumunda web sitemizin bazı görsel/fonksiyonel özellikleri tam olarak çalışmayabilir.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">4. Veri Gizliliği</h3>
                        <p className="leading-relaxed">Çerezler vasıtasıyla toplanan hiçbir veri, Kimlik veya İletişim verilerinizle eşleştirilmez ve profilleme amacıyla kullanılmaz. Çerezler hakkında daha fazla hukuki detay için lütfen Kişisel Verilerin Korunması sayfamızı inceleyiniz.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;
