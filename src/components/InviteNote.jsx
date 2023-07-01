import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. Bakkar Abdul Khaleel</h2>

                <h5 className="address mb-3">Retired T.T. BSNL,</h5>
                <h5 className="address mb-3">
                    H.No.: 18/609-2, Quibla Colony,
                    <br /> Yemmiganur, Kurnool Dist.,
                    <br /> AP - 583 102.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 94910 66468, <br />
                    +91 78010 18524, <br />
                    +91 90304 40706.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
