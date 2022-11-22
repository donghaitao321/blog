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
[完整代码](../../source/code/web/three/sample.html)

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

## [划线](../../source/code/web/three/line.html)
切记三要素： renderer（渲染器）、scene（场景）和camera（相机）
```js
//基础要素初始化
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();
// 线材质有：LineBasicMaterial 或者 LineDashedMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

//由点生成几何体
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
const geometry = new THREE.BufferGeometry().setFromPoints( points );

// 生成线对象
const line = new THREE.Line( geometry, material );
// 添加到场景
scene.add( line );
renderer.render( scene, camera );
```

## 文字
1. DOM + CSS
```js
<div id="info">Description</div>
//然后使用CSS来将其绝对定位在其它具有z-index的元素之上，尤其是当你全屏运行three.js的时候。
#info {
	position: absolute;
	top: 10px;
	width: 100%;
	text-align: center;
	z-index: 100;
	display:block;
}
```

2. 将文字绘制到画布中，并将其用作Texture（纹理）
3. 在你所喜欢的3D软件里创建模型，并导出给three.js
4. three.js自带的文字几何体
5. 位图字体

## 3D模型载入
### 工作流程：
使用glTF（gl传输格式）。.GLB和.GLTF是这种格式的这两种不同版本。

### 资源

公共领域的glTF文件可以在网上找到，例如 [Sketchfab](https://sketchfab.com/models?features=downloadable&sort_by=-likeCount&type=models)，或者很多工具包含了glTF的导出功能：

- [Blender](https://www.blender.org/) by the Blender Foundation
- [Substance Painter](https://www.allegorithmic.com/products/substance-painter) by Allegorithmic
- [Modo](https://www.foundry.com/products/modo) by Foundry
- [Toolbag](https://www.marmoset.co/toolbag/) by Marmoset
- [Houdini](https://www.sidefx.com/products/houdini/) by SideFX
- [Cinema 4D](https://labs.maxon.net/?p=3360) by MAXON
- [COLLADA2GLTF](https://github.com/KhronosGroup/COLLADA2GLTF) by the Khronos Group
- [FBX2GLTF](https://github.com/facebookincubator/FBX2glTF) by Facebook
- [OBJ2GLTF](https://github.com/AnalyticalGraphicsInc/obj2gltf) by Analytical Graphics Inc
- …and [还有更多](http://github.khronos.org/glTF-Project-Explorer/)

### 加载

加载需要单独导入

```js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load( 'path/to/model.glb', function ( gltf ) {
	scene.add( gltf.scene );
}, undefined, function ( error ) {
	console.error( error );
} );
```

使用工具转化为js再导入
安装工具格式  
```npm install -g gltf-pipeline```
转化为Draco glTF  
```gltf-pipeline -i scene.gltf -o car.gltf -d```
转化为js  
```npx gltfjsx car.gltf```

最后需要使用转化后的.gltf 和 .js文件
显示需要灯光  
```<ambientLight intensity={0.5} />```

