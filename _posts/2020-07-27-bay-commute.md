---
layout: post
title: Commuting & Income in the Bay Area
description: An incomplete doodle of Bay Area commuting and income
category: blog
tags: data-viz d3-js incomplete
thumb: /assets/images/thumbs/20200727.png
include: true
---
I never did finish this, but I probably won't so I'm putting it out there now. Note: you may need to fiddle with the width of your browser window for the figure to be correctly aligned (all maps should be in a single row).

<script type="module">
    // Load the Observable runtime and inspector.
    import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
    import notebook from "https://api.observablehq.com/@wingsumlaw/congestion-commute-time-and-median-income.js?v=3";

    const renders = {
        "viewof yr": "viewof-yr",
        "bayMap": "bayMap",
        "legends": "legends",
        "sub": "sub",
        "lineGraphs": "lineGraphs"
    };

    new Runtime().module(notebook, name => {
        const selector = renders[name]
        if (selector) {
            $('#20200727').append(`<div id=${selector}></div>`);
            return new Inspector(document.getElementById(selector));
        }
    });
</script>

<style>
    button {
    background-color: #8a9bb8;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    opacity: 0.9;
    height: 30px;
    margin-left: 0px;
    padding: 5px 10px 5px 10px;
    border: 0.5px solid white;
    border-radius: 5px;
    color: white;
    font-family: Avenir, Arial;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    }
    button:hover {
    opacity: 0.7;
    }
    .inputGrid {
    display: inline-block;
    margin: 2px;
    }
    input {
    width: 100px!important;
    }
</style>

<div id="20200727" class="full-width">
</div>

This data all comes from the [Metropolitan Transportation Commission of California](https://www.vitalsigns.mtc.ca.gov/data-center){:target="_blank"}

Check out the whole notebook on [Observablehq](https://observablehq.com/@wingsumlaw/congestion-commute-time-and-median-income){:target="_blank"}
