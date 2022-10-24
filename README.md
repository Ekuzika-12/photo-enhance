# How to use

1. Install packages
```sh
npm install @xct007/photo-enhance
```
or using yarn
```sh
yarn add @xct007/photo-enhance
```

2. Example

```js
const processing = require("@xct007/photo-enhance")
const fs = require('fs')

let urlPath = "./input/rose.jpg"; // can be image url
let methods = ["enhance", "recolor", "dehaze"];

processing(urlPath, methods[0]).then((buffer) => {
  // Save image buffer
  fs.writeFileSync("./output/result_enhance.jpg", buffer);
});
```

# :blush: Result
|                                Original                                |                                      Enhance                                      |                                      Recolor                                      |                                       HDR                                        |
| :--------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------: |
| ![](https://github.com/xct007/photo-enhance/raw/master/input/rose.jpg) | ![](https://github.com/xct007/photo-enhance/raw/master/output/result_enhance.jpg) | ![](https://github.com/xct007/photo-enhance/raw/master/output/result_recolor.jpg) | ![](https://github.com/xct007/photo-enhance/raw/master/output/result_dehaze.jpg) |
