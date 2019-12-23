## todo

- 根据配置数据渲染组件

## 难点

1. 存储结构设计
2. 渲染
3. 移动组件

流程

2. 渲染可用组件列表
2. 加载数据结构, 
2. 使用数据渲染编辑区
2. 移动鼠标点击响应可点击区域
2. 激活区域组件
3. 编辑属性

## 存储结构
data : json
```
[
    id:int, 唯一id,
    type:string, 组件类型
    props: Object, 属性集,
    child: Array, 子节点
]
```


## 工作区

```
<div className={'j-editor'}>
  <Row>
    <Col span={4}><ComponentSelector
      activeComponent={activeComponent}
      components={components} /></Col>
    <Col span={16}><ViewEditor
      data={data}
      components={components}
      stateActiveComponent={stateActiveComponent} />
    </Col>
    <Col span={4}><PropEditor
      component={component}
      data={activeComponent}
      saveHandle={saveItem}
    /></Col>
  </Row>
</div>
```


1. 组件选择区 ComponentSelector
1. 组件编辑区 ViewEditor
    1. 设置当前活动组件
        - 移动激活layer
        - 点击选择当前组件
1. 属性编辑区 PropEditor



## Hook
1. 返回值及修改值的Handle
1. 状态通过副作用延时修改


## 依赖组件

1. react-native-listener
    - [NativeListener](https://www.helplib.com/GitHub/article_119880)
2. [react-drag-and-drop](https://www.npmjs.com/package/react-drag-and-drop)
    - [使用 Drag and Drop 给Web应用提升交互体验](https://www.cnblogs.com/jlfw/p/11809988.html)
    - [参考](https://blog.csdn.net/weixin_34023982/article/details/91452188)
