import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum luctus justo, eget dictum urna. Praesent facilisis sem sit amet ante accumsan tempus. Sed ultricies enim eu volutpat feugiat. Aliquam erat volutpat. Nulla facilisi. Proin vel porta ipsum. Etiam vel tincidunt risus. Sed sit amet dui eros. Donec et metus.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum luctus justo, eget dictum urna. Praesent facilisis sem sit amet ante accumsan tempus. Sed ultricies enim eu volutpat feugiat. Aliquam erat volutpat. Nulla facilisi. Proin vel porta ipsum. Etiam vel tincidunt risus. Sed sit amet dui eros. Donec et metus.',
  },
  {
    id: 3,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum rutrum luctus justo, eget dictum urna. Praesent facilisis sem sit amet ante accumsan tempus. Sed ultricies enim eu volutpat feugiat. Aliquam erat volutpat. Nulla facilisi. Proin vel porta ipsum. Etiam vel tincidunt risus. Sed sit amet dui eros. Donec et metus.',
  },
]);
