export { Logger, bizLogger } from './logger';
// 为了兼容 Cocos Creator 的导入方式，也提供默认导出
import { Logger, bizLogger } from './logger';

const CocosToolbox = {
  Logger,
  bizLogger,
};
export default CocosToolbox;
