import '../styles/Summary.css'

export default function Summary({
    summarySetter
}) {
    function submitButton(event) {
        event.preventDefault();
        const summaryData = document.getElementById("summary");
        summarySetter(summaryData.value);              
    }

    return (
        <form action="" method="post" id="summary-form">
            <label htmlFor="summary">Summary:</label>
            <textarea name="summary" id="summary" cols="30" rows="10"></textarea>
        
            <button type="submit" onClick={(event) => {submitButton(event)}}>
                    Submit
            </button>
        </form>
    );
}

