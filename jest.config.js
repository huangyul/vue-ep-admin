import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  rootDir: path.resolve(__dirname),
  clearMocks: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  // 告诉jest需要处理的文件
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  // 别名设置
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/components/$1',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // 测试文件
  testMatch: ['<rootDir>/src/__tests__/**/*.spec.(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/'],

  transform: {
    // 用vue-jest处理vue文件
    '^.+\\.vue$': 'vue-jest',
    // 用 `babel-jest` 处理 js
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-typescript'],
        ],
        plugins: ['@vue/babel-plugin-jsx'],
      },
    ],
  },
  // 测试覆盖率
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.{js,vue}', '!**/node_modules/**'],
}
