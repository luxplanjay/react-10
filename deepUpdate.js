state = {
  feedback: {
    good: 0,
    neutral: 0,
    bad: 0,
  },
  images: {
    items: [],
    loading: false,
  },
};

this.setState(state => ({
  feedback: {
    ...state.feedback,
    good: state.feedback.good + 1,
  },
}));

this.setState(state => ({
  images: {
    ...state.images,
    items: [...state.images.items, x],
  },
}));
