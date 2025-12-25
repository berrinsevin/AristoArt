import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import FormInput from '../components/form-input.tsx'

export default function Iletisim() {
    const [formData, setFormData] = useState({
        ad: '',
        email: '',
        mesaj: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData(prev => ({
            ...prev,
            [id]: value
        }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS yapılandırması eksik. Lütfen .env dosyasını kontrol edin.')
            }

            const templateParams = {
                from_name: formData.ad,
                from_email: formData.email,
                message: formData.mesaj,
                reply_to: formData.email,
            }

            await emailjs.send(serviceId, templateId, templateParams, publicKey)

            setSubmitStatus('success')
            setFormData({ ad: '', email: '', mesaj: '' })
        } catch (error) {
            console.error('Email gönderme hatası:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="page-container fade-in">
            <h1 className="page-title">İletişim</h1>
            <div className="form-container fade-in">
                <div className="contact-title">Adres Bilgileri</div>
                <div className="contact-row">
                    <i className="contact-icon fa-solid fa-location-dot"></i>
                    <div>
                        <div className="contact-label">Adres</div>
                        <div className="contact-value">Kaz Dağları, Assos</div>
                    </div>
                </div>
                <div className="contact-row">
                    <i className="contact-icon fa-regular fa-envelope"></i>
                    <div>
                        <div className="contact-label">E-posta</div>
                        <div className="contact-value"><a href="mailto:ornek@aristosanat.com" className="navbar-link">aristosanatakademisi@gmail.com</a></div>
                    </div>
                </div>
                <div className="contact-row">
                    <i className="contact-icon fa-brands fa-instagram"></i>
                    <div>
                        <div className="contact-label">Instagram</div>
                        <div className="contact-value"><a href="https://instagram.com/aristosanatakademisi" target="_blank" rel="noopener noreferrer" className="navbar-link">@aristosanatakademisi</a></div>
                    </div>
                </div>
            </div>
            <div className="form-container" style={{marginBottom: '2rem'}}>
                <h2 className="form-title" style={{fontSize: '1.5rem'}}>İletişim Formu</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <FormInput 
                        label="Ad" 
                        id="ad" 
                        value={formData.ad}
                        onChange={handleInputChange}
                    />
                    <FormInput 
                        label="E-posta" 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <div className="form-group">
                        <label htmlFor="mesaj" className="form-label">Mesaj</label>
                        <textarea 
                            id="mesaj" 
                            rows={5} 
                            className="form-input form-textarea"
                            value={formData.mesaj}
                            onChange={handleInputChange}
                        />
                    </div>
                    {submitStatus === 'success' && (
                        <div style={{ 
                            padding: '1rem', 
                            backgroundColor: '#d4edda', 
                            color: '#155724', 
                            borderRadius: '4px',
                            marginBottom: '1rem',
                            textAlign: 'center'
                        }}>
                            Mesajınız başarıyla gönderildi!
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div style={{ 
                            padding: '1rem', 
                            backgroundColor: '#f8d7da', 
                            color: '#721c24', 
                            borderRadius: '4px',
                            marginBottom: '1rem',
                            textAlign: 'center'
                        }}>
                            Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.
                        </div>
                    )}
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}