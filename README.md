# @pixmi-game/cocos-toolbox

一个专为 Cocos Creator 开发的常用辅助函数合集工具库，旨在提升游戏开发效率和代码质量。

## 特性

- 🎮 专为 Cocos Creator 优化
- 📦 TypeScript 支持，完整的类型定义
- 🔧 模块化设计，按需导入
- 🚀 零依赖，轻量级

## 安装

```bash
npm install @pixmi-game/cocos-toolbox
```

或使用 pnpm:

```bash
pnpm add @pixmi-game/cocos-toolbox
```

## 使用方法

```typescript
import { Logger } from '@pixmi-game/cocos-toolbox/logger';
```

## 开发

### 环境要求

- Node.js >= 14
- TypeScript >= 5.0

### 本地开发

```bash
# 克隆项目
git clone <repository-url>

# 安装依赖
pnpm install

# 开发模式（实时编译）
pnpm dev

# 构建
pnpm build
```

### 发布

```bash
# 构建项目
pnpm build

# 发布到 npm
pnpm publish
```

### 本地测试

使用 yalc 进行本地包测试：

```bash
# 发布到本地
pnpm yalc:publish

# 推送更新
pnpm yalc:push
```

## 项目结构

```
src/
├── index.ts          # 主入口文件
└── logger/
    └── index.ts      # 日志模块
```

## 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 更新日志

### v1.0.0

- 🎉 初始版本发布
- ✨ 添加 Logger 日志系统
- 📦 支持 TypeScript
- 🔧 模块化架构

---

**注意**: 该工具库专为 Cocos Creator 项目优化，建议在 Cocos Creator 环境中使用以获得最佳体验。