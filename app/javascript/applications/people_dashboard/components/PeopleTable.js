import React from 'react';

const PeopleTable = ({
  people
}) => {
  return (
    <div className="people-table">
      <table className="table table-stripped table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {
            people.map(person => (
              <tr key={person.id}>
                <td>{person.display_name}</td>
                <td>{person.email_address}</td>
                <td>{person.title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default PeopleTable;
