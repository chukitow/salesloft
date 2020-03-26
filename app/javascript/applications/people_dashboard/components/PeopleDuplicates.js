import React, { useState } from 'react';
import { peopleDuplicates } from '../helpers';

const PeopleDuplicates = ({
  people
}) => {
  const [display, setDisplay] = useState(false)
  return (
    <div className="people-frecuency">
      {
        !display &&
        <button
          onClick={() => setDisplay(true)}
          className="btn btn-primary">
          Display Duplicates Emails
        </button>
      }
      {
        display &&
        <div className="people-duplicates-table">
          <h4>Duplicates Emails</h4>
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {
                peopleDuplicates(people).map(email => (
                  <tr key={email}>
                    <td>{email}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      }
    </div>
  );
}

export default PeopleDuplicates;
