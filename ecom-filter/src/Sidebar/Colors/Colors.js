import Input from '../../Components/Input';
import './Colors.css';

const Colors = ({ handleChange }) => {
    return (
        <div className='ml'>
            <h2 className='sidebar-title'>Colors</h2>
            <div>
                <label className="sidebar-label-container" >
                    <input onChange={handleChange} type="radio" name="test2" value="" />
                    <span className="checkmark"></span>All
                </label>
                <Input handleChange={handleChange} value="black" title="Black" color="black" inputName="test4" />
                <Input handleChange={handleChange} value="blue" title="Blue" color="blue" inputName="test4" />
                <Input handleChange={handleChange} value="red" title="Red" color="red" inputName="test4" />
                <Input handleChange={handleChange} value="green" title="Green" color="green" inputName="test4" />
                <Input handleChange={handleChange} value="white" title="White" color="white" inputName="test4" />
            </div>
        </div>
    )
}

export default Colors