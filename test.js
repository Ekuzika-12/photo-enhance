const processing = require("./dist/cjs/index.cjs");
const fs = require("fs");
/*
import processing from "./index.mjs"
import * as fs from 'fs'
*/
let method = ["enhance", "recolor", "dehaze"];
processing("./input/rose.jpg", method[0]).then(async (data) => {
  fs.writeFileSync("./output/result_enhance.jpg", data);
});
processing("./input/rose.jpg", method[1]).then(async (data) => {
  fs.writeFileSync("./output/result_recolor.jpg", data);
});
processing("./input/rose.jpg", method[2]).then(async (data) => {
  fs.writeFileSync("./output/result_dehaze.jpg", data);
});
