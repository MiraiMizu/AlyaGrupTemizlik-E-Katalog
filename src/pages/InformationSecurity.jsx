import React, { useEffect } from 'react';

const InformationSecurity = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-10 md:py-20 bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Bilgi Güvenliği Yönetim Sistemi Politikası</h1>
                    <p className="text-gray-500 text-lg">Son Güncelleme: Mart 2026</p>
                </div>
                
                <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
                    <section>
                        <p className="leading-relaxed text-lg">Alya Grup olarak, kurumsal itibarımızı ve müşterilerimizin bize duyduğu güveni korumak en öncelikli hedeflerimizdendir. Sahip olduğumuz tüm bilgi varlıklarının gizliliğini, bütünlüğünü ve erişilebilirliğini sağlamak adına "Bilgi Güvenliği Politikamızı" oluşturduk.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">1. Temel Prensiplerimiz</h3>
                        <ul className="list-disc pl-6 space-y-4 mt-4 ml-4">
                            <li><strong>Gizlilik:</strong> Kendimize, kurumsal iş ortaklarımıza (hastane, otel, fabrika vb.) ve son kullanıcılarımıza ait bilgilerin sadece yetkili kişilerce erişilebilir olmasını sağlamak.</li>
                            <li><strong>Bütünlük:</strong> Bilgilerimizin doğruluğunu ve eksiksizliğini yetkisiz yetkisiz değişikliklere karşı korumak.</li>
                            <li><strong>Erişilebilirlik:</strong> İhtiyaç duyulduğunda süreçlerimizin ve ilgili bilgilerin kesintisiz ve güvenli bir şekilde erişilebilirliğini (örneğin e-katalog altyapı sürekliliği) temin etmek.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">2. Altyapı ve Güvenlik Süreçleri</h3>
                        <p className="leading-relaxed">Alya Grup internet platformları küresel güvenlik standartlarına uygun barındırma hizmetleri (Cloudflare altyapısı vb.) üzerinden sunulmaktadır. DDoS koruması, SSL/TLS şifreleme ve siber tehditlere karşı düzenli zafiyet tarama standartları şirketimiz tarafından yakından takip edilir.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">3. Sürekli İyileştirme ve Farkındalık</h3>
                        <p className="leading-relaxed">Kurum içinde ve dışında oluşabilecek bilgi güvenliği ihlallerini tespit etmek, kayıt altına almak ve tekrarlanmaması için önlemler almak firmamızın sürekli iyileştirme prensibinin bir parçasıdır. Personelimizin ve tedarik zincirindeki aktörlerin bilgi güvenliği farkındalığını yüksek tutmak esastır.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default InformationSecurity;
