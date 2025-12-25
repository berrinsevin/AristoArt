type Props = {
    id: string
    label: string
    type?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function FormInput({ id, label, type = 'text', value, onChange }: Props) {
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">
                {label}
            </label>
            <input
                type={type}
                id={id}
                className="form-input"
                value={value}
                onChange={onChange}
            />
        </div>
    )
}