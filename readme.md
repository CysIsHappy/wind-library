## wind-library

---

## Installation

---

```sh
yarn add wind-library

npm install wind-library --save-dev
```

### 本地/会话存储

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


// localStorage
storage.local.set()
...
```

</details>

### 星座

---

<details>
<summary>constellation</summary>

```js
import { constellation } from 'wind-library';
const birthday = '2000-01-03';

constellation(birthday); // 摩羯
```

</details>
