import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Guideline sizes are based on iphone 11
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size) => (width > 600 ? (width / guidelineBaseWidth) * size * 0.61 : (width / guidelineBaseWidth) * size);
const scaleVertical = (size) => (height / guidelineBaseHeight) * size;
const scaleModerate = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export { scale, scaleVertical, scaleModerate };

width: width*0.5

// import { Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// // Guideline sizes are based on iphone 11
// const guidelineBaseWidth = 375;
// const guidelineBaseHeight = 812;

// const _scale = (size) => (width > 600 ? (width / guidelineBaseWidth) * size * 0.61 : (width / guidelineBaseWidth) * size);
// const scaleVertical = (size) => (height / guidelineBaseHeight) * size;
// const scale = (size) => size + (_scale(size) - size) * (height / width);

// export { scale, scaleVertical };
