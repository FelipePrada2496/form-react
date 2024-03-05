import './checkbox.css'


const Checkbox = ({ isChecked, onChange }) => {


    return (
        <div className="form-group">
            <label htmlFor="terms" className='letra-checkbox'>Mark as resolved</label>
            <br />
            <input type="checkbox" id="terms" checked={isChecked} onChange={onChange}  />
        </div>
    )
}

export default Checkbox