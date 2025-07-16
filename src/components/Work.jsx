import '../styles/Work.css'


export default function Work({
    workSetter,
    workFormData,
    workFormSetter
}) {
    function submitButton(event) {
        event.preventDefault();
        const workForm = document.getElementById("work-form");
        // if valid, we just clone into the actual resume data
        if (workForm.checkValidity()) {
            workSetter(structuredClone(workFormData));
        } else {
            workForm.reportValidity();
        }
                        
    }

    function handleFormChange(index, event) {
        let formData = [...workFormData];
        formData[index][event.target.name] = event.target.value;
        workFormSetter(formData);
    }

    function handleNoteFormChange(index, subindex, event) {
        let formData = [...workFormData];
        formData[index]['notes'][subindex] = event.target.value;
        workFormSetter(formData);
    }

    function addWork() {
        let newWork ={company:"", city:"", state:"", start:"", end:"", title:"", notes:[""]};
        workFormSetter([...workFormData, newWork]);
    }

    function removeWork(index) {
        let formData = [...workFormData];
        formData.splice(index, 1);
        workFormSetter(formData);
    }

    function addDetail(index) {
        let formData = [...workFormData];
        formData[index]['notes'].push("");
        workFormSetter(formData);
    }

    return (
        <form action="" method="post" id="work-form">
            {workFormData.map((input, index) => {
                return (
                    <div className="work-input-card" key={index}>
                        <label>Company:</label>
                        <input type="text" name="company" value={input.company} onChange={event =>handleFormChange(index, event)} required />

                        <button onClick={(event) => {event.preventDefault(); removeWork(index)}}>Remove Position</button>

                        <label>City:</label>
                        <input type="text" name="city" value={input.city} onChange={event =>handleFormChange(index, event)} required />

                        <label>State:</label>
                        <input type="text" name="state" value={input.state} onChange={event =>handleFormChange(index, event)} required />

                        <label>Start:</label>
                        <input type="date" name="start" value={input.start} onChange={event =>handleFormChange(index, event)} />

                        <label>End:</label>
                        <input type="date" name="end" value={input.end} onChange={event =>handleFormChange(index, event)} />

                        <label>Title:</label>
                        <input type="text" name="title" value={input.title} onChange={event =>handleFormChange(index, event)} />
                        
                        <p>Details:</p>
                        <div className="work-notes">
                            {input.notes.map((note, subindex) => {
                                return (
                                    <div key={subindex}>
                                        <label>Note:</label>
                                        <input type="text" name="note" value={note} onChange={event =>handleNoteFormChange(index, subindex, event)} />
                                    </div>
                                )
                            })}
                        </div>
                        <button onClick={(event) => {event.preventDefault(); addDetail(index)}}>Add Note</button>
                    </div>
                )
            })}
            <button onClick={() => {addWork()}}>
                    Add Position
            </button>
            <button type="submit" onClick={(event) => {submitButton(event)}}>
                    Submit
            </button>
        </form>
    );
}