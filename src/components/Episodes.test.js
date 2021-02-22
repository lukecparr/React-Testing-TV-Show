import React from 'react';
import { screen, render } from '@testing-library/react';

import Episodes from './Episodes';

const ep = [
  {
    id: 553946,
    url:
      "https://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
    name: "Chapter One: The Vanishing of Will Byers",
    season: 1,
    number: 1,
    type: "regular",
    airdate: "2016-07-15",
    airtime: "",
    airstamp: "2016-07-15T12:00:00+00:00",
    runtime: 60,
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
    },
    summary:
      "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    _links: {
      self: { href: "https://api.tvmaze.com/episodes/553946" },
    },
  },
];


test('Episodes componenet renders', () => {
	render(<Episodes episodes={ep} />)

	const episodes = screen.getAllByTestId('episode');

	expect(episodes).toHaveLength(1);

});