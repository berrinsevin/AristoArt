export default function Egitmenler() {
    const images = [1,2,3,4,5,6].map(num => `/src/assets/${num}.png`);
    return (
        <div className="page-container fade-in">
            <h1 className="page-title">Eğitmenler</h1>
            <p className="page-description">Sanatın farklı disiplinlerinden gelen profesyonel eğitmenlerimizle tanışın. 
                Her biri kendi alanında deneyimli ve doğayla iç içe bir öğrenme ortamı yaratmayı amaçlıyor.
            </p>
            <div className="educators-grid">
                {images.map((src, idx) => (
                        <img src={src} alt={`Eğitmen ${idx+1}`} className="educator-img" />
                ))}
            </div>
        </div>
    )
}