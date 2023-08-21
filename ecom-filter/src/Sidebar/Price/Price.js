import Input from '../../Components/Input';
import './Price.css';

const Price = ({ handleChange }) => {
    return (
        <div className='ml'>
            <h2 className='sidebar-title'>Price</h2>
            <div>
                <label className="sidebar-label-container" >
                    <input onChange={handleChange} type="radio" name="test3" value="" />
                    <span className="checkmark"></span>$0
                </label>
                <Input handleChange={handleChange} value={50} title="$0-50" inputName="test3" />
                <Input handleChange={handleChange} value={100} title="$50-100" inputName="test3" />
                <Input handleChange={handleChange} value={150} title="$100-150" inputName="test3" />
                <Input handleChange={handleChange} value={200} title="Over $150" inputName="test3" />
            </div>
        </div>
    )
}

export default Price