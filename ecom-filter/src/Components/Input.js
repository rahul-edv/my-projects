
const Input = ({ handleChange, value, title, inputName, color }) => {
    return (
        <label className="sidebar-label-container" >
            <input onChange={handleChange} type="radio" name={inputName} value={value} />
            <span className="checkmark" style={{ backgroundColor: color }}></span>{title}
        </label>
    )
}

export default Input