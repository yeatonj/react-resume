import '../styles/PersonalInfo.css'

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
        <form action="" method="post" id="personal-form">
            <div className="personal-input">
                <label htmlFor="first">First Name:</label>
                <input type="text" name="first" id="first" required />
            </div>
            
            <div className="personal-input">
                <label htmlFor="last">Last Name:</label>
                <input type="text" name="last" id="last" required />
            </div>
            
            <div className="personal-input">
                <label htmlFor="mail">Email Address:</label>
                <input type="email" name="mail" id="mail" required />
            </div>
            
            <div className="personal-input">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" name="phone" id="phone" />
            </div>
        
            <button type="submit" onClick={(event) => {submitButton(event)}}>
                    Submit
            </button>
        </form>
    );
}

