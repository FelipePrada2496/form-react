import './select.css'


const Select = ( { onChange } ) => {

    return (
        <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <br />
            <select id="priority" className='size size-priority' onChange={(event) => onChange(event.target.value)}>
                <option value={1}>Low</option>
                <option value={2}>Medium</option>
                <option value={3}>High</option>
            </select>
        </div>
    )
}

export default Select