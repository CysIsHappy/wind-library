## wind-library

---

## Installation

---

```sh
yarn add wind-library

npm install wind-library --save-dev
```

## Tool API

+ **本地/会话存储**

---

<details>
<summary>Storage</summary>

```js
import { storage } from 'wind-library';
// 设置
storage.session.set(key,value);
// 获取
storage.session.get(key);
// 移除
storage.session.remove(key);
// 清除
storage.session.clear();
// 获取所有
storage.session.getAll();
// 遍历
storage.session.forEach(cb);
// localStorage 同样API
storage.local.set(...)
...
```

</details>

+ **生日转化星座**

---

<details>
<summary>constellation</summary>

```js
import { constellation } from 'wind-library';
const birthday = '2000-01-03';

constellation(birthday); // 摩羯
```

</details>

+ **根据 URL 判断是否是视频/图片**

---

> 使用正则匹配后缀判断，对于非正常 URL 请不要使用这个方法。

<details>
<summary>isPicture/isVideo</summary>

```js
import { isPicture, isVideo } from 'wind-library';
isPicture('http://hycoding.com'); // false
isVideo('http://hycoding.com/1cabidesa.mp4'); // true
```

</details>

---
