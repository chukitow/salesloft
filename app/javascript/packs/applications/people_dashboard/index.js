import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PeopleTable from './PeopleTable';

const PeopleDashboard = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function getPeople() {
      const response = await axios.get('/api/v1/people');
      setPeople(response.data.data);
    }

    getPeople();
  }, [
    setPeople
  ]);

  return (
    <div className="container">
      <div class="card">
        <div class="card-header">
          People List
        </div>
        <div class="card-body">
          <PeopleTable people={people} />
        </div>
      </div>
    </div>
  );
};

export default PeopleDashboard;
