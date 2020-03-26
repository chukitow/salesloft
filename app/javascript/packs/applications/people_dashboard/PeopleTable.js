import React from 'react';

const PeopleTable = ({
  people
}) => {
  return (
    <table class="table table-stripped table-bordered">
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
            <tr>
              <td>{person.display_name}</td>
              <td>{person.email_address}</td>
              <td>{person.title}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

export default PeopleTable;
