import React from 'react';

import './presentation.css';

const Presentations = ({presentations}) => {
    const {count, data, session} = presentations;
    return (
        <div id="myModal" className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close">&times;</span>
                    <h2>Presentations</h2>
                </div>
                <div className="modal-body">
                    <div>
                        <h3>Session Details:</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Session Name</th>
                                <th>Session Type</th>
                                <th>Author Name</th>
                                <th>Room Type</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{session.session_name}</td>
                                <td>{session.session_type}</td>
                                <td>{session.author_name}</td>
                                <td>{session.room_type}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>Presentations:</h3>
                        {
                            count > 0 ?
                                data.map((value, key) => (
                                    <div className='presentation' key={key}>
                                        <h4>Title</h4>
                                        <p>{value.title}</p>
                                        <h4>Author</h4>
                                        <p>{value.author_name}</p>
                                        <h4>Abstract</h4>
                                        <p>{value.abstract}</p>
                                        <h4>Awards</h4>
                                        <p>{value.awards}</p>
                                    </div>
                                )) :
                                <div><p>No Presentations Found</p></div>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Presentations;