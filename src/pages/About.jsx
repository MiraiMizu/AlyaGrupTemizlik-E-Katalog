import React from 'react';
import { Beaker, Users, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="py-20">
            <div className="container">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-6">AlyaGrup Temizlik Hakkında</h1>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        2010 yılından bu yana kimya sektöründe güven, kalite ve sürdürülebilirlik ilkeleriyle hizmet veriyoruz.
                        Endüstriyel üretimden laboratuvar ar-ge süreçlerine kadar her aşamada iş ortaklarımızın yanındayız.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-50 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Beaker className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Uzmanlık</h3>
                        <p className="text-gray-500">Alanında uzman kimyager kadromuzla teknik destek sağlıyoruz.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-50 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Müşteri Odaklılık</h3>
                        <p className="text-gray-500">İhtiyaçlarınıza özel çözümler ve esnek tedarik zinciri yönetimi.</p>
                    </div>
                    <div className="text-center p-6">
                        <div className="w-16 h-16 bg-blue-50 text-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-2">Global Tedarik</h3>
                        <p className="text-gray-500">Dünyanın önde gelen üreticileriyle güçlü iş birlikleri.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
