import './input.css'

const Input = ({ onChange }) => {


    return (
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <br />
            <input 
                type="text" 
                id="title" 
                placeholder="Add the ticket title" 
                className='size'
                pattern=".{6,18}"
                title="Title must be between 6 and 18 characters long"
                required
                onChange={(event) => onChange(event.target.value)}
            />
       </div>
    )
}

export default Input