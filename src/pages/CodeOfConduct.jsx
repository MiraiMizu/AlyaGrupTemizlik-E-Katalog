import React, { useEffect } from 'react';

const CodeOfConduct = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-10 md:py-20 bg-white min-h-screen">
            <div className="container max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Davranış Kuralları / İş Etik İlkeleri</h1>
                    <p className="text-gray-500 text-lg">Son Güncelleme: Mart 2026</p>
                </div>
                
                <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
                    <section>
                        <p className="leading-relaxed text-lg">Alya Grup olarak "İş Etik İlkeleri ve Davranış Kuralları", tüm şirket içi faaliyetlerimizin, çalışanlarımızın ve bizimle iş yapan üçüncü tarafların uyması gereken temel hukuki ve ahlaki standartları belirler. Değerlerimiz vizyonumuzun ayrılmaz bir parçasıdır.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">1. Dürüstlük ve Güvenilirlik</h3>
                        <p className="leading-relaxed">Alya Grup, tedarikçileriyle, iş ortaklarıyla, kamu kuruluşlarıyla ve rakipleriyle olan tüm ilişkilerinde yasallığı, dürüstlüğü ve ticari etiği pusula olarak kabul eder. Müşterilerimize vaat ettiğimiz performansı ("Güvenilir Hizmet", "%100 Memnuniyet") kusursuz şekilde sunmak temel varlık nedenimizdir.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">2. Çevre ve İnsan Odaklılık</h3>
                        <p className="leading-relaxed">Ürettiğimiz ve tedariğini sağladığımız "Plus+" marka Endüstriyel Temizlik Ürünleri çevre sağlığına duyarlıdır. Aynı şekilde kurumsal temizlik hizmeti sunduğumuz tüm operasyonlarda iş sağlığı ve güvenliği azami derecede dikkate alınır. Ayrımcılığa (dil, din, ırk, cinsiyet) karşı sıfır tolerans politikamız esastır.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">3. Hediye ve Rüşvet Politikası</h3>
                        <p className="leading-relaxed">Hiçbir çalışanımızın veya yöneticimizin ticari bir kararı değiştirmek veya bir avantaj sağlamak amacıyla rüşvet vermesi, alması ya da piyasa etiğine uygun olmayan hediyeler kabul/teklif etmesi kesinlikle yasaktır.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-primary mb-4">4. Bilgi ve Sır Saklama Yükümlülüğü</h3>
                        <p className="leading-relaxed">Birlikte çalıştığımız kurumların ticari sır niteliği taşıyan her türlü fiyatlaması, verisi ve projesi birer "Gizli Bilgi" olarak nitelendirilir. Tüm Alya Grup personeli bu bilgileri şirket bünyesi dışında ifşa edemez ve kendi şahsi çıkarları için kullanamaz.</p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default CodeOfConduct;
