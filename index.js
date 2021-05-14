const compareImages = require("resemblejs/compareImages");
const config = require("./config.json");
const fs = require('fs');

async function generateResultImage(path, image1, image2) {
  const { options } = config;
  const data = await compareImages(
    fs.readFileSync(`${path}/${image1}.png`),
    fs.readFileSync(`${path}/${image2}.png`),
    options
  );
  const results = {
      isSameDimensions: data.isSameDimensions,
      dimensionDifference: data.dimensionDifference,
      rawMisMatchPercentage: data.rawMisMatchPercentage,
      misMatchPercentage: data.misMatchPercentage,
      diffBounds: data.diffBounds,
      analysisTime: data.analysisTime
  }
  fs.writeFileSync(`${path}/compare.png`, data.getBuffer());
  return results;
}

async function generateComparison() {
  const path = './cypress/screenshots/color_palette.spec.js';
  const tests = ['t1', 't2', 't3'];
  let resultInfo = {}

  var i;
  for (i = 0; i < tests.length; i++) {
    resultInfo[tests[i]] = await generateResultImage(`${path}/${tests[i]}`, '1', '2');
  }

  fs.writeFileSync(`${path}/report.html`, createReport(tests, resultInfo));
}

function browser(b, info){
  return `<div class=" browser" id="test0">
  <div class=" btitle">
      <h2>Browser: ${b}</h2>
      <p>Data: ${JSON.stringify(info)}</p>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Reference</span>
      <img class="img2" src="${b}/1.png" id="refImage" label="Reference">
    </div>
    <div class="imgcontainer">
      <span class="imgname">Test</span>
      <img class="img2" src="${b}/2.png" id="testImage" label="Test">
    </div>
  </div>
  <div class="imgline">
    <div class="imgcontainer">
      <span class="imgname">Diff</span>
      <img class="imgfull" src="${b}/compare.png" id="diffImage" label="Diff">
    </div>
  </div>
</div>`
}

function createReport(tests, resInfo){
  return `
  <html>
      <head>
          <title> VRT Report </title>
          <link href="index.css" type="text/css" rel="stylesheet">
      </head>
      <body>
          <h1>Report for 
               <a href="${config.url}"> ${config.url}</a>
          </h1>
          <div id="visualizer">
              ${tests.map(t=>browser(t, resInfo[t]))}
          </div>
      </body>
  </html>`
}


generateComparison();
