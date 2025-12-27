import educator1 from '../assets/1.png'
import educator2 from '../assets/2.png'
import educator3 from '../assets/3.png'
import educator4 from '../assets/4.png'
import educator5 from '../assets/5.png'
import educator6 from '../assets/6.png'

export default function Egitmenler() {
    const images = [educator1, educator2, educator3, educator4, educator5, educator6]
    
    return (
        <div className="page-container fade-in">
            <h1 className="page-title">Eğitmenler</h1>
            <p className="page-description">Program detayları ve eğitmen bilgileri yakında eklenecektir.
            </p>
            <div className="educators-grid">
                {images.map((src, idx) => (
                    <img key={idx} src={src} alt={`Eğitmen ${idx+1}`} className="educator-img" />
                ))}
            </div>
        </div>
    )
}