import Input from '../../Components/Input';
import './Category.css';

const Category = ({ handleChange }) => {

    return (
        <div className='ml'>
            <h2 className='sidebar-title'>Category</h2>
            <div>
                <label className="sidebar-label-container" >
                    <input onChange={handleChange} type="radio" name="test" value="" />
                    <span className="checkmark"></span>All
                </label>
                <Input handleChange={handleChange} value="sneakers" title="Sneakers" inputName="test" />
                <Input handleChange={handleChange} value="flats" title="Flats" inputName="test" />
                <Input handleChange={handleChange} value="sandals" title="Sandals" inputName="test" />
                <Input handleChange={handleChange} value="heels" title="Heels" inputName="test" />
            </div>
        </div>
    )
}

export default Category