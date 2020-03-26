const EXLUDE_CHARACTERS = [
  '@',
  '.'
];

export const peopleCountCharacter = (people) =>
  sortByCount(
    groupByCharacters(people)
  );

export const peopleDuplicates = (people) =>
  people
    .reduce((acc, val) => {
      const [username, domain] = val.email_address.split('@');
      const matches = people.filter(
        person =>
          person.email_address.includes(username) &&
          person.email_address.includes(domain)
      );
      
      if(matches.length > 1) {
        acc.push(val.email_address);
      }

      return acc;
    }, []);

const groupByCharacters = (people) =>
  people
    .reduce((acc, val) => {
      const splitEmail = val.email_address.split('');
      splitEmail
        .filter(character => !EXLUDE_CHARACTERS.includes(character))
        .forEach(character => {
          const count = acc[character.toUpperCase()] || 0;
          acc[character.toUpperCase()] = count + 1;
        });

      return acc;
    }, {});

  const sortByCount = (group) =>
    Object
      .keys(group)
      .sort((a, b) => group[b] - group[a])
      .reduce((acc, val) => {
        acc.push({
          character: val,
          count: group[val]
        })

        return acc;
      }, []);
