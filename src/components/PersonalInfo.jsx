export default function PersonalInfo({
    firstNameSetter,
    lastNameSetter,
    emailSetter
}) {
    function submitButton() {
        firstNameSetter("hello");
        lastNameSetter("josh");
        emailSetter("thisisyouremail@email.com");
    }

    return (
        <div>
            <p>This is a test of the personal information section</p>
            <button onClick={submitButton}>Submit new info</button>
        </div>
    );
}

