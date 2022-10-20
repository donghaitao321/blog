# three.js
## [快速生成](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene)

### 网页配置：
```js
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My first three.js app</title>
		<style>
			body { margin: 0; }
		</style>
	</head>
	<body>
		<script src="js/three.js"></script>
		<script>
			// Our Javascript will go here.
		</script>
	</body>
</html>
```

### 三要素创建:
场景，相机，渲染器
```js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
```
解析：
相机有很多种，```PerspectiveCamera```为透视相机。其参数：
1. 视野FOV：number
2. 横纵比： number
3. 近剪裁平面： number （超出就不会再显示）
4. 远剪裁平面： number

渲染器也有很多种，可以是非webgl的。
```setSize```设置在app中的显示范围。
```setSize(window.innerWidth/2, window.innerHeight/2, false)``` 第三个参数false，可以使全屏1/4分辨率

最后将```render```元素加入到HTML的dom树。会返回```<canvas>```元素用于显示我们的场景。

### 在场景中添加对象
```js
//创建几何体
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
//创建材质，材质需要配置各种属性。
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//创建网格（有限元）对象，包含几何和材质属性
const cube = new THREE.Mesh( geometry, material );
//将物体添加到场景，默认在(0,0,0)
scene.add( cube );
//设置相机位置（对象内部无法观察），默认在(0,0,0)
camera.position.z = 5;
```

### 在页面进行渲染
使用```render or animate loop```
```js
function animate() {
//requestAnimationFrame有诸多好处，其一是有效渲染（看其他页面时不会渲染），每秒60帧刷新
	requestAnimationFrame( animate );
//每次刷新后，改变一点角度，使其产生旋转动画
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
//渲染由场景和相机决定
	renderer.render( scene, camera );
}
animate();
```
[完整代码](../../source/code/web/three/three.html)

## 安装
```bash
npm install three
```
使用
```js
// Option 1: Import the entire three.js core library.
import * as THREE from 'three';
const scene = new THREE.Scene();

// Option 2: Import just the parts you need.
import { Scene } from 'three';
const scene = new Scene();
```