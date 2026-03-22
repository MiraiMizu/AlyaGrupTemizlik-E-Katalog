import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-10 md:py-20 bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gizlilik Politikası ve Kişisel Verilerin Korunması</h1>
                    <p className="text-gray-500 text-lg">Son Güncelleme: Mart 2026</p>
                </div>
                
                <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">1. Hangi Verileri Topluyoruz?</h3>
                        <p>Web sitemiz üzerinden iletişim formunu doldurduğunuzda veya bizimle iletişime geçtiğinizde aşağıdaki kişisel verilerinizi toplamaktayız:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                            <li><strong>Kimlik Verileri:</strong> Adınız, soyadınız.</li>
                            <li><strong>İletişim Verileri:</strong> E-posta adresiniz ve varsa mesaj içeriğinde paylaştığınız telefon numaranız.</li>
                            <li><strong>İşlem Güvenliği Verileri:</strong> Web sitemizi ziyaretiniz sırasındaki IP adresiniz, tarayıcı bilgisi, log kayıtları.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">2. Kişisel Verileri İşleme Amacımız</h3>
                        <p>Sizden topladığımız kişisel veriler;</p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 ml-4">
                            <li>Taleplerinizi değerlendirmek, teklif formlarına yanıt vermek,</li>
                            <li>Hizmetlerimizin ve Plus+ ürünlerimizin tanıtımı, pazarlanması,</li>
                            <li>Size özel kurumsal çözümler (hastane, otel, sanayi vb.) önerebilmek,</li>
                            <li>Müşteri memnuniyetini artırmak ve iletişim kurabilmek,</li>
                            <li>Yasal yükümlülüklerimizi yerine getirmek amaçlarıyla işlenmektedir.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">3. Verilerin Kimlere Aktarılabileceği</h3>
                        <p className="leading-relaxed">Toplanan kişisel verileriniz, yukarıda sayılan amaçların gerçekleştirilmesi doğrultusunda, hukuki yükümlülükler sebebiyle talep etmeye yetkili kamu kurum ve kuruluşlarına, altyapı hizmeti aldığımız (Cloudflare vb.) bilişim teknolojileri sağlayıcılarına yasal sınırlar çerçevesinde aktarılabilmektedir. Üçüncü şahıslara ticari amaçla asla veri satışı yapılmamaktadır.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">4. Çerez (Cookie) Kullanımı</h3>
                        <p className="leading-relaxed">Web sitemiz, ziyaretçi deneyimini analiz etmek ve sayfa geçişlerindeki optimizasyonları sağlamak adına temel düzeyde oturum çerezleri kullanabilir. Sitelerimizde kullanılan çerezler, kimliğinizi doğrudan tespit edebilecek veriler içermez. Çerez kullanımını tarayıcı ayarlarınızdan dilediğiniz zaman kapatabilirsiniz.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">5. İletişim Formları ve WhatsApp</h3>
                        <p className="leading-relaxed">Sitemizdeki WhatsApp iletişim butonu veya formlar üzerinden kurduğunuz iletişimlerde tarafımıza ilettiğiniz ekstra bilgi ve belgeler de bu politika kapsamında KVKK standartlarına uygun olarak Şirket bünyesinde saklı tutulur.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">6. KVKK Kapsamındaki Haklarınız</h3>
                        <p className="leading-relaxed">KVKK m.11 uyarınca, verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, eksik/yanlış işlenme varsa düzeltilmesini ve yasalar çerçevesinde silinmesini talep etme hakkına sahipsiniz. Taleplerinizi ornek@gmail.com üzerinden veya bizzat adresimize yazılı olarak iletebilirsiniz.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
