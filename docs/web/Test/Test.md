# Test

## 思想
TDD: Test-Driven Development(测试驱动开发)  
    TDD 则要求在编写某个功能的代码之前先编写测试代码，然后只编写使测试通过的功能代码，通过测试来推动整个开发的进行
BDD: Behavior-Driven Development(行为驱动开发)  
    BDD 可以让项目成员（甚至是不懂编程的）使用自然语言来描述系统功能和业务逻辑，从而根据这些描述步骤进行系统自动化的测试



## 基础知识

it 或 test ：用于描述测试本身，其包含两个参数，第一个是该测试的描述，第二个是执行测试的函数。

expect ：表示测试需要通过的条件，它将接收到的参数与 matcher 进行比较。

matcher ：一个希望到达预期条件的函数，称其为匹配器。

render ：用于渲染给定组件的方法。

```jsx
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

afterEach(cleanup)

it('should take a snapshot', () => {
  const { asFragment } = render(<App />)
  expect(asFragment(<App />)).toMatchSnapshot()
})
```

匹配器由测试框架提供，如jest、vitest。

## 测试案例

1. 快照测试

**确保你的UI不会有意外的改变。** 

典型的做法是在渲染了UI组件之后，保存一个快照文件， 检测他是否与保存在单元测试旁的快照文件相匹配。 若两个快照不匹配，测试将失败：有可能做了意外的更改，或者UI组件已经更新到了新版本。

第一次运行会自动生成快照，键盘u(updateSnapshot)更新快照。

2. 测试 DOM 元素

使用testing-library/react进行dom操作，并对dom进行比对。

data-testid 使用 getByTestId 获取相应dom

fireEvent.click 模拟单击事件

await waitForElement，等待异步结果



## testing-library/react

React Testing Library 是一个 **DOM 测试库**，这意味着它并不会直接处理渲染的 React 组件实例，而是处理 DOM 元素以及它们在实际用户面前的行为。

选择元素后，可以模拟用户与页面的交互，或者使用 Jest 和jest-dom对元素进行断言。

当元素响应动作而出现和消失时， 可以 使用异步 APIwaitFor或 findBy查询来等待 DOM 中的更改。

### 查询
类型：

| 查询类型\结果数量    | 0                                         | 1        | >1       | 重试（异步/等待）                      |
| -------------------- | ----------------------------------------- | -------- | -------- | -------------------------------------- |
| **单元素**           |                                           |          |          |                                        |
| `getBy...`           | 抛出错误                                  | 返回元素 | 抛出错误 | 不                                     |
| `queryBy...`         | 返回`null`                                | 返回元素 | 抛出错误 | 不                                     |
| `findBy...`          | 抛出错误                                  | 返回元素 | 抛出错误 | 是的                                   |
| **多个元素**         |                                           |          |          |                                        |
| `getAllBy...`        | 抛出错误                                  | 返回数组 | 返回数组 | 不                                     |
| `queryAllBy...`      | 返回`[]`                                  | 返回数组 | 返回数组 | 不                                     |
| `findAllBy...`       | 抛出错误                                  | 返回数组 | 返回数组 | 是的                                   |
| 通用****             | **常用于**                                |          |          | **例**                                 |
| getByRole            | 可访问性树                                |          |          | getByRole('button', {name: /submit/i}) |
| getByLabelText       | 表单域                                    |          |          |                                        |
| getByPlaceholderText |                                           |          |          |                                        |
| getByText            | 非交互式元素<br />（如 div、span 和段落） |          |          |                                        |
| getByDisplayValue    | 表单元素                                  |          |          |                                        |





