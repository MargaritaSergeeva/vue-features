export default {
  mounted(el, binding) {
    // eslint-disable-next-line no-param-reassign
    el.style[binding.arg] = binding.value;
  },
  updated(el, binding) {
    // eslint-disable-next-line no-param-reassign
    el.style[binding.arg] = binding.value;
  },
};
