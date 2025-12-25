export default function Programlar() {
    const programs = [
        {
            title: 'Oyunculuk Atölyesi',
            description: 'Sahneye adım atın, bedeniniz ve hayal gücünüzle hikâyeler anlatın. Diksiyon, doğaçlama ve obje çalışmalarıyla oyunculuğun temellerini doğayla iç içe keşfedin.'
        },
        {
            title: 'Beden, Ses ve Diksiyon Atölyesi',
            description: 'Sesinizi ve bedeninizi bir ifade aracına dönüştürün. Nefes, artikülasyon ve farkındalık çalışmalarıyla kendinizi daha güçlü ifade etmeyi öğrenin.'
        },
        {
            title: 'Yaratıcı Sanat Atölyesi',
            description: 'Renkler, çizgiler ve formlar aracılığıyla duygularınıza alan açın. Doğanın ilhamıyla yaratıcı süreçlere odaklanın ve kendi sanat dilinizi geliştirin.'
        },
        {
            title: 'Yazarlık Atölyesi',
            description: 'Kısa hikâye, monolog ve senaryo yazımıyla yazarlık yolculuğunuza adım atın. Gözlemlerinizden beslenerek karakter ve atmosfer yaratmayı öğrenin.'
        },
        {
            title: 'Ritim Atölyesi',
            description: 'Doğayla uyum içinde ritim duygunuzu keşfedin. Enstrümanlarla yapılan toplu doğaçlamalar sayesinde dinleme, uyum ve ifade becerilerinizi geliştirin.'
        }
    ];

    return (
        <div className="page-container fade-in">
            <h1 className="page-title">Programlar ve Katılım Detayları</h1>

            <div className="program-info-section">
                <h3>Konaklama, Yemek ve Kamp Alanı</h3>
                <p>
                    <strong>Konaklama:</strong> Katılımcılar çadırlarda konaklar. Kendi çadırınızı getirebilir ya da bizden temin edebilirsiniz.
                    <br />
                    <strong>Yemek:</strong> Günde üç öğün sağlıklı, yerel ürünlerle hazırlanmış yemekler sunulur.
                    <br />
                    <strong>Alan:</strong> Kaz Dağları'nın eteklerinde, sessiz ve güvenli bir kamp alanında gerçekleştirilir. Ortak kullanım alanları, duş ve tuvaletler mevcuttur.
                </p>
                <p>
                    <br />
                    <strong>Ücrete dahil:</strong> Atölyeler, konaklama, yemek, gezi etkinlikleri. Detaylı bilgi için iletişime geçiniz.
                </p>
            </div>

            <div>
                {programs.map((program, index) => (
                    <div key={index} className="program-info-section">
                        <h2 className="program-title">{program.title}</h2>
                        <p className="program-description">{program.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}