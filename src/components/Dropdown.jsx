import { useState } from 'react'

export default function Dropdown({
    icon,
    description,
    children
}) {
    const [show, setShow] = useState(false);

    return (
        <section className="dropdown">
            <div className="dropdown-header">
                <p>{icon}</p>
                <p>{description}</p>
                <button onClick={() => setShow(!show)}>Show/Hide</button>
            </div>
            {show && <>{children}</>}
        </section>
    )

}