export default function Resume({
    firstName,
    lastName,
    email,
    phone,
    summary,
    educationInfo,
    workInfo
}) {
    return (
        <section className="resume">
            <HeaderSection 
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
            />
            <SummarySection 
                summary={summary}
            />
            <EducationSection 
                educationInfo={educationInfo}
            />
            <WorkSection 
                workInfo={workInfo}
            />
        </section>
    )
}

function HeaderSection({
    firstName,
    lastName,
    email,
    phone
}) {
    return (
        <div className="resume-header">
            <h1>{firstName + " " + lastName}</h1>
            <div className="contact">
                <h3>{email}</h3>
                <h3>{phone}</h3>
            </div>
        </div>
    )
}

function SummarySection({ summary }) {
    return (
        <div className="resume-summary">
            <h2>Summary</h2>
            <p>{summary}</p>
        </div>
    )
}

function EducationSection({ educationInfo }) {
    if (educationInfo.length === 0) {
        return (
            <div className="resume-education">
                <h2>Education</h2>
                <p>No education history to display</p>
            </div>
        )
    }
    // Else, we'll return the list of education
    return (
        <div className="resume-education">
            <h2>Education</h2>
            <div className="education-cards">
                {educationInfo.map(info =>
                    <div className="ed-card" key={info.start}>
                        <div className="ed-header">
                            <h3>{info.name}</h3>
                            <p>{info.city}</p>
                            <p>{info.start + " - " + info.end}</p>
                        </div>
                        <h3>{info.degree}</h3>
                        <ul>
                            {info.notes.map(note =>
                                <li key={note}>
                                    {note}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

function WorkSection({ workInfo }) {
    if (workInfo.length === 0) {
        return (
            <div className="resume-work">
                <h2>Work History</h2>
                <p>No work history to display</p>
            </div>
        )
    }
    // Else, we'll return the list of education
    return (
        <div className="resume-work">
            <h2>Work History</h2>
            <div className="work-cards">
                {workInfo.map(info =>
                    <div className="work-card" key={info.start}>
                        <div className="work-header">
                            <h3>{info.company}</h3>
                            <p>{info.city}</p>
                            <p>{info.start + " - " + info.end}</p>
                        </div>
                        <h3>{info.degree}</h3>
                        <ul>
                            {info.notes.map(note =>
                                <li key={note}>
                                    {note}
                                </li>
                            )}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}