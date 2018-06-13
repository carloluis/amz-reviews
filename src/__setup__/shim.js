const raf = (global.requestAnimationnFrame = cb => setTimeout(cb, 0));

export default raf;
