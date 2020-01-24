import { LoremIpsum } from 'lorem-ipsum';
import { uuid } from 'uuidv4';

const lorem = new LoremIpsum();

export default function createTask() {
  return {
    id: uuid(),
    text: lorem.generateSentences(3),
    completed: false,
  };
}
