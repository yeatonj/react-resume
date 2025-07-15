


export default function Education({
    edSetter,
    edFormData,
    edFormSetter
}) {
    function submitButton(event) {
        event.preventDefault();
        const educationForm = document.getElementById("education-form");
        // if valid, we just clone into the actual resume data
        if (educationForm.checkValidity()) {
            edSetter(structuredClone(edFormData));
        } else {
            educationForm.reportValidity();
        }
                        
    }

    function handleFormChange(index, event) {
        let formData = [...edFormData];
        formData[index][event.target.name] = event.target.value;
        edFormSetter(formData);
    }

    function handleNoteFormChange(index, subindex, event) {
        let formData = [...edFormData];
        formData[index]['notes'][subindex] = event.target.value;
        edFormSetter(formData);
    }

    function addUniversity() {
        let newUniv ={name:"", city:"", state:"", start:"", end:"", degree:"", notes:[""]};
        edFormSetter([...edFormData, newUniv]);
    }

    function removeUniversity(index) {
        let formData = [...edFormData];
        formData.splice(index, 1);
        edFormSetter(formData);
    }

    function addDetail(index) {
        let formData = [...edFormData];
        formData[index]['notes'].push("");
        edFormSetter(formData);
    }

    return (
        <form action="" method="post" id="education-form">
            {edFormData.map((input, index) => {
                return (
                    <div className="ed-input-card" key={index}>
                        <label>Institution:</label>
                        <input type="text" name="name" value={input.name} onChange={event =>handleFormChange(index, event)} required />

                        <button onClick={(event) => {event.preventDefault(); removeUniversity(index)}}>Remove</button>

                        <label>City:</label>
                        <input type="text" name="city" value={input.city} onChange={event =>handleFormChange(index, event)} required />

                        <label>State:</label>
                        <input type="text" name="state" value={input.state} onChange={event =>handleFormChange(index, event)} required />

                        <label>Start:</label>
                        <input type="date" name="start" value={input.start} onChange={event =>handleFormChange(index, event)} />

                        <label>End:</label>
                        <input type="date" name="end" value={input.end} onChange={event =>handleFormChange(index, event)} />

                        <label>Degree:</label>
                        <input type="text" name="degree" value={input.degree} onChange={event =>handleFormChange(index, event)} />
                        
                        <p>Details:</p>
                        <div className="ed-notes">
                            {input.notes.map((note, subindex) => {
                                return (
                                    <div key={subindex}>
                                        <label>Note:</label>
                                        <input type="text" name="note" value={note} onChange={event =>handleNoteFormChange(index, subindex, event)} />
                                    </div>
                                )
                            })}
                        </div>
                        <button onClick={(event) => {event.preventDefault(); addDetail(index)}}>Add</button>
                    </div>
                )
            })}
            <button onClick={() => {addUniversity()}}>
                    Add Institution
            </button>
            <button type="submit" onClick={(event) => {submitButton(event)}}>
                    Submit
            </button>
        </form>
    );
}