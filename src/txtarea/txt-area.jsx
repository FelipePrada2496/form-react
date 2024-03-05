import './txt-area.css'

const Description = ({onChange}) => {


    return (
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <br />
            <textarea 
            id="description" 
            cols="30" 
            rows="10" 
            placeholder='Add the ticket dscription' 
            className='size size-description'
            maxLength={30}
            required
            onChange={(event) => onChange(event.target.value)}
            ></textarea>
        </div>
    )
}

export default Description