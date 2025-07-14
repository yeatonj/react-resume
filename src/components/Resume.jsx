export default function Resume({
    firstName,
    lastName,
    email
}) {
    return (
        <p>{firstName + " " + lastName + " " + email}</p>
    )
}