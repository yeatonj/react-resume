export default function PersonalInfo({
    firstNameSetter,
    lastNameSetter,
    emailSetter,
    phoneSetter
}) {
    function submitButton(event) {
        event.preventDefault();
        const personalForm = document.getElementById("personal-form");
        if (personalForm.checkValidity()) {
            const firstName = document.getElementById("first");
            const lastName = document.getElementById("last");
            const emailAddr = document.getElementById("mail");
            const phoneNum = document.getElementById("phone");

            firstNameSetter(firstName.value);
            lastNameSetter(lastName.value);
            emailSetter(emailAddr.value);
            phoneSetter(phoneNum.value);

            
        } else {
            personalForm.reportValidity();
        }
                        
    }

    return (
        // <div>
        //     <p>This is a test of the personal information section</p>
        //     <button onClick={submitButton}>Submit new info</button>
        // </div>
        <form action="" method="post" id="personal-form">
            <label htmlFor="first">First Name:</label>
            <input type="text" name="first" id="first" required />
            
            <label htmlFor="last">Last Name:</label>
            <input type="text" name="last" id="last" required />
            
            <label htmlFor="mail">Email Address:</label>
            <input type="email" name="mail" id="mail" required />
            
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" name="phone" id="phone" />
        
            <button type="submit" onClick={(event) => {submitButton(event)}}>
                    Submit
            </button>
        </form>
    );
}

