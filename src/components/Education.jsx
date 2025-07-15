


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

    function addUniversity() {
        let newUniv ={name:"", city:"", state:"", start:"", end:"", degree:"", notes:[""]};
        edFormSetter([...edFormData, newUniv]);
    }

    function removeUniversity() {

    }

    function addNote() {

    }

    return (
        <form action="" method="post" id="education-form">
            {edFormData.map((input, index) => {
                return (
                    <div className="ed-input-card" key={index}>
                        <label>Institution:</label>
                        <input type="text" name="name" value={input.name} onChange={event =>handleFormChange(index, event)} required />

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