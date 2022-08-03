# CSS
### 动画
transition
```css
.show{ opacity: 1; transition:all 1.5s ease-in;}
.hide{opacity: 0; transition:all 1.5s ease-in;}
```
keyframes  关键帧  
```css
@keyframes hide-item{
    0% {
        opacity:1;
        color:yellow;
    }
    50%{
        opacity: 0.5 ;
        color:red;
    }
    100%{
        opacity:0;
        color: green;
    }
}
```
使用：
```css
.hide{ animation:hide-item 2s ease-in forwards; }
```
```forwards```属性，它是用来控制停止到最后一帧的
