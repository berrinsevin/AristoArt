import { Link } from 'react-router-dom';
import educator1 from '../assets/1.png'
import educator2 from '../assets/2.png'
import educator3 from '../assets/3.png'
import educator4 from '../assets/4.png'
import educator5 from '../assets/5.png'
import educator6 from '../assets/6.png'

export default function WorkshopSection() {
    const images = [educator1, educator2, educator3, educator4, educator5, educator6]
    
    return (
        <section className="workshops">
            <h2 className="section-title">Atölyelerimiz</h2>
            <div className="workshops-grid">
                {images.map((src, idx) => (
                    <Link to="/programlar" key={idx} className="workshop-card-link">
                        <div className="workshop-card slide-up">
                            <img src={src} alt={`Eğitmen ${idx + 1}`} className="educator-img" />
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}