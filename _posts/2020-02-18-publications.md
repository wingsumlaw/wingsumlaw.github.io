---
layout: post
title: CrossRef Publications Over Time
description: A way for me to learn some D3.js basics
category: blog
tags: data-viz d3-js
---
In an attempt to learn d3.js and how to use an API, I created a graph that depicts journal article trends on CrossRef.

<script type="module">

// Load the Observable runtime and inspector.
import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
import notebook from "https://api.observablehq.com/@wingsumlaw/learning-basic-d3-js-api-utilisation-using-the-crossref-api.js?v=3";

const renders = {
    "intro": "intro",
    "viewof f": "viewof-f",
    "legend": "legend",
    "chart": "chart",
    "moreInfo": "moreInfo"
};

new Runtime().module(notebook, name => {
    const selector = renders[name]
  if (selector) {
    return new Inspector(document.getElementById(selector));
  }
});

</script>

<div id="20200218" class="full-width">
    <div id="intro"></div>
    <div id="viewof-f"></div>
    <div id="legend"></div>
    <div id="chart"></div>
    <div id="moreInfo"></div>
</div>

Check out the whole notebook on [Observablehq](https://observablehq.com/@wingsumlaw/learning-basic-d3-js-api-utilisation-using-the-crossref-api){:target="_blank"}