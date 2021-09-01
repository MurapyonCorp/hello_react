// constants.jsとmath.jsでエクスポートしたものをここで再エクスポートする。
export * from './constants.js';
export { plus as add, default as multiply } from './math.js';
// constants2.jsの内容をGermanという名前空間に押し込めて再エクスポートする。
export * as German from './constants2.js';
