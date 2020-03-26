import { expect } from 'chai';
import { peopleCountCharacter, peopleDuplicates } from '../helpers';

describe('People helpers', () => {
  it('groups people email by characters', () => {
    const people = [
      { email_address: 'ivan@gmail.com' }
    ];

    expect(peopleCountCharacter(people)).to.deep.equal(
      [
        { character: 'I', count: 2 },
        { character: 'A', count: 2 },
        { character: 'M', count: 2 },
        { character: 'V', count: 1 },
        { character: 'N', count: 1 },
        { character: 'G', count: 1 },
        { character: 'L', count: 1 },
        { character: 'C', count: 1 },
        { character: 'O', count: 1 }
      ]
    );
  });

  it('finds possible duplicate emails', () => {
    const people = [
      { email_address: 'eddie@gmail.com' },
      { email_address: 'eddi@gmail.com' }
    ];

    expect(peopleDuplicates(people)).to.deep.equal([
      'eddi@gmail.com',
    ])
  });
})
