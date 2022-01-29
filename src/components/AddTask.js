import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please Add A Task')
            return
        }
        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className = 'add-form' onSubmit = {onSubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type='text' placeholder='add' value={text}
                onChange={(e) => setText(e.target.value)}/>
            </div>

            <div className = 'form-control'>
                <label>Date and Time</label>
                <input type='text' placeholder='Date and Time' 
                 value={day}
                 onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className = 'form-control form-control-check '>
                <label>Set Reminder</label>
                <input checked={reminder} value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)} type='checkbox' />
            </div>


            <input type='submit' className="btn btn-block" value ='Save Task' />
        </form>
    )
}

export default AddTask
