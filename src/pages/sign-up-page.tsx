import { useState, type ChangeEvent } from 'react'
import FormInput from '../components/form-input.tsx'

export default function Kayit() {
    const [form, setForm] = useState({ ad: '', soyad: '', email: '', ilgi: '' })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setForm(prev => ({ ...prev, [id]: value }))
    }

    return (
        <div className="page-container fade-in">
            <div className="form-container">
                <h1 className="form-title">Kayıt Ol</h1>
                <form className="space-y-4">
                    <FormInput label="Ad" id="ad" value={form.ad} onChange={handleChange} />
                    <FormInput label="Soyad" id="soyad" value={form.soyad} onChange={handleChange} />
                    <FormInput label="E-posta" id="email" type="email" value={form.email} onChange={handleChange} />
                    <FormInput label="İlgi Alanı" id="ilgi" value={form.ilgi} onChange={handleChange} />
                    <button type="submit" className="btn btn-primary">Gönder</button>
                </form>
            </div>
        </div>
    )
}