import React, { useState } from 'react';
import { peopleCountCharacter } from '../helpers';

const PeopleFrecuency = ({
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
          Display Character Frecuency
        </button>
      }
      {
        display &&
        <div className="people-frecuency-table">
          <h4>Character Frequency</h4>
          <table className="table table-stripped table-bordered">
            <thead>
              <tr>
                <th>Character</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              {
                peopleCountCharacter(people).map(counter => (
                  <tr key={counter.character}>
                    <td>{counter.character}</td>
                    <td>{counter.count}</td>
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

export default PeopleFrecuency;
