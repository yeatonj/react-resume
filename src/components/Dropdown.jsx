import { useState } from 'react'
import '../styles/Dropdown.css'

export default function Dropdown({
    icon,
    description,
    clickHandler,
    children
}) {
    const [show, setShow] = useState(false);

    return (
        <section className="dropdown">
            <div className="dropdown-header">
                <p>{icon}</p>
                <p>{description}</p>
                <button onClick={() => 
                    {
                        setShow(!show);
                        if (clickHandler != undefined) {
                            clickHandler();
                        }
                    }
                }>
                    Show/Hide
                </button>
            </div>
            {show && <>{children}</>}
        </section>
    )

}