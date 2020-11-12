import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div className="journal__entry-picture"
            style={{
                backgroundSize:'cover',
                backgroundImage:'url(https://images.ctfassets.net/hrltx12pl8hq/1zlEl4XHkxeDuukJUJyQ7Y/a149a908727e2084d503dc103a620d7f/lohp-image-img-3.jpg?fit=fill&w=480&h=270)'
            }}>

            </div>
            <div className="journal__entry-body">
                <p
                    className="journal_entry-title"
                >UN nuevo Dia</p>
                <p
                    className="journal_entry-content"
                >Lorem ipsum dolor sit.</p>
            </div>
            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
