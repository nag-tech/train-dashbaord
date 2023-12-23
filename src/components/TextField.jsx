export default function TextField({type="text", onChange, className, placeholder, name, value}) {

    return <input type={type} onChange={onChange} className={className} name={name} placeholder={placeholder} defaultValue={value}/>
}