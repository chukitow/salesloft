import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PeopleTable from './components/PeopleTable';
import PeopleFrecuency from './components/PeopleFrecuency';
import PeopleDuplicates from './components/PeopleDuplicates';

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
      <div className="card">
        <div className="card-header">
          People List
        </div>
        <div className="card-body">
          <PeopleTable people={people} />
          <br/>
          <PeopleFrecuency people={people} />
          <br/>
          <PeopleDuplicates people={people} />
        </div>
      </div>
    </div>
  );
};

export default PeopleDashboard;
