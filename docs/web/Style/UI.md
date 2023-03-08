# UI 组件

## MUI-v5

### 重要组件特征说明

#### **Grid**

**分类**

- container
- item

**流动网格**

[**Default breakpoints**](https://mui.com/material-ui/customization/breakpoints/#default-breakpoints)
每个断点（一个键）与一个固定的屏幕宽度（一个值）匹配：

- xs，超小：0px
- sm，小：600px
- md，中：900px
- lg，大：1200px
- xl，特大号：1536px

  界面在各种断点处调整其布局。
  可以给每个断点赋予整数值，表示当视口宽度满足断点约束时，12 个可用列中有多少被组件占用。(当条件大于就执行)

**具有多个断点的网格**  
 具有多个断点的网格:较大断点的宽度值会覆盖那些给予较小断点的宽度值。

**间距**  
 _spacing_ 可以是任何整数。

**行列间距**
_rowSpacing_ 和 _columnSpacing_

**嵌套网格**

```jsx
<Grid container spacing={1}>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
  <Grid container item spacing={3}>
    <FormRow />
  </Grid>
</Grid>
```

避免 属性过多

```jsx
<Grid spacing={1} container item xs={12}>
```

**列**
*columns*更改默认列数(12)  
**white-space: nowrap**

```jsx
<Typography noWrap>
```

**<Stack>**  
处理一维布局。
