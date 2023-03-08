# React Native

## Navigation

### 配置环境
```shell
# 基础依赖环境
npm install react-native-screens react-native-safe-area-context
# 使用
npm install @react-navigation/native
# ios使用库
npx pod-install ios

# androids设置
# 在android/app/src/main/java/<your package name>/MainActivity.java添加
import android.os.Bundle;

@Override
protected void onCreate(Bundle savedInstanceState) {
  super.onCreate(null);
}
```

### 使用环境
```jsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// 统一使用options， 传参screenOptions给Stack.Navigator
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```

### 路由
```jsx
// navigation作为prop参数
// 有.navigate .push .goBack .popToTop方法
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
```

### 传参
分两步：
1. 传参
ps:
    建议使用可JSON.stringify的参数，保证状态稳定，且上下文连贯可传递
```navigation.navigate('RouteName', { /* params go here */ })```
2. 使用
```route.params```
```jsx
function DetailsScreen({ route, navigation })
```

其他
```jsx
//更新参数：（setOptions）
navigation.setParams({
  query: 'someText',
});
//初始化参数
<Stack.Screen
  name="Details"
  component={DetailsScreen}
  initialParams={{ itemId: 42 }}
/>
```

参数可通过navigate回传
```jsx
<Button
    title="Done"
    onPress={() => {
        // Pass and merge params back to home screen
        navigation.navigate({
        name: 'Home',
        params: { post: postText },
        merge: true,
        });
    }}
/>
```

嵌套传参
ps:
    参数只包含信息。
    传参时，传引用（或id）不传实体。
    多处使用的数据作为全局数据，减少传递。

### Header 设置  
主要通过```options```[属性](https://reactnavigation.org/docs/native-stack-navigator#options)
options默认接受到两个参数：navigation，route。可以为对象或一个函数。

setOptions：修改参数。
样式设置：
    headerStyle：样式对象
    headerTintColor： 返回按钮和字体颜色
    headerTitleStyle： 字体大小颜色

options只在单独screen生效，screenOptions在所有当下导航生效。

自定义header：
```jsx
options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
```
