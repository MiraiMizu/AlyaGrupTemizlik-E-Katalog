import React, { useEffect } from 'react';

const TermsOfUse = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-10 md:py-20 bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Kullanım Koşulları ve Hizmet Şartları</h1>
                    <p className="text-gray-500 text-lg">Son Güncelleme: Mart 2026</p>
                </div>
                
                <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
                    <section>
                        <p className="leading-relaxed text-lg">Web sitemize ve katalog uygulamamıza hoş geldiniz. Alya Grup'a ait olan bu web uygulamasını kullanmaya devam etmeniz, aşağıdaki şart ve koşullara uymayı kabul ettiğiniz anlamına gelir. "Alya Grup", "Biz", "Plus+" ibareleri sitemizin ve temizlik ürünleri markamızın sahibini ifade eder.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">1. Web Sitesinin Kullanımı</h3>
                        <p className="leading-relaxed">Bu web sitesinin ve içinde yer alan "Plus+" gibi ürün portföyünün içerikleri tamamen genel bilgilendirme amaçlıdır. Önceden haber verilmeksizin değiştirilebilir. Hastaneler, oteller veya fabrika gibi kurumsal müşterilerimize sağlanan teklif formları ve hizmet içerikleri dönemsel güncellemeler içerebilir. Sitede yer alan bilgilerin ticari kararlarınız için yegâne dayanak olarak kullanılması sonucu doğabilecek zararlardan firmamız sorumlu tutulamaz.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">2. Fikri Mülkiyet Hakları</h3>
                        <p className="leading-relaxed">Bu web sitesinde yer alan her türlü tasarım, düzen, metin, logo ("Alya Grup" ve "Plus+"), grafik ve yazılım kodları Alya Grup'un mülkiyetindedir veya lisanslı kullanılmaktadır. İlgili yasalarca korunmakta olup izinsiz çoğaltılamaz, kopyalanamaz ve ticari amaçlarla kullanılamaz.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">3. Teklif ve Satın Alma Süreci</h3>
                        <p className="leading-relaxed">Web sitesi veya katalog uygulamamız üzerinden yapılan ürün/fiyat sorgulamaları, listelenen teklif formları ve alınan talepler yasal bir ön sözleşme ya da nihai sipariş teşkil etmez. Nihai ürün fiyatlandırmaları müşteri ile yapılacak birebir iletişim ve hazırlanan resmi teklif dökümanları üzerinden kesinleştirilir.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">4. Dış Bağlantılar</h3>
                        <p className="leading-relaxed">Web sitemizden veya katalogdan harici bağlantılara, üçüncü parti iletişim kanallarına (örn. WhatsApp) verilen yönlendirmeler kullanım kolaylığı içindir. Harici platformlarda sunulan içeriklerin doğruluğu veya güvenlik prensipleri Alya Grup garantisi altında değildir.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">5. Hizmet Kesintileri</h3>
                        <p className="leading-relaxed">Platformumuzun (e-katalog vb.) teknik altyapı çalışmalarından, güncelleme ve iyileştirme amaçlı operasyonlardan doğabilecek planlı veya beklenmedik bağlantı kesintilerinden ötürü kullanıcıların uğrayabileceği olası mağduriyetlerden Alya Grup sorumlu tutulamaz.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">6. Değişiklik ve Bildirim</h3>
                        <p className="leading-relaxed">Alya Grup işbu kullanım koşullarında herhangi bir zamanda ve önceden bildirimde bulunmaksızın değişiklik yapma hakkını saklı tutar. Değiştirilmiş şartlar, web sitesinde yayınlandıkları andan itibaren yürürlük kazanır.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfUse;
