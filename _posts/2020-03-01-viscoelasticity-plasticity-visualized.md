---
layout: post
title: Viscoelasticity & Plasticity, Visualized
description: How do we represent viscosity and plasticity mathematically? Why are these mechanical properties relevant to biologists? An interactive figure showing elastic, viscous, and plastic behaviors.
category: blog
tags: data-viz d3-js
thumb: /assets/images/thumbs/20200301.png
folioclass: foliowide
foliothumb: /assets/images/thumbs/20200301wide.gif
include: true
---
Elasticity, viscosity, and plasticity are important material parameters. But what do they actually look like? And why should biologists care about these properties?

Below is an interactive exploration of the ways we mathematically describe viscoelasticity and plasticity. Please note that this demonstration is geared toward those who have studied _college level mechanics of materials_. The math could be quite difficult if you haven't taken it before!

## Output of a Bingham Plastic + Standard Linear Solid (SLS) Model

We represent the different parameters of a material as a series of dashpots and springs:

* The **yield stress** of a material is the stress at which a material will begin to deform plastically
* The elastic nature of a material is represented by **springs**
* The viscous nature of a material is represented by **dashpots**

Experiment with different material parameters by fiddling with the sliders below:

<script type="module">
    // Load the Observable runtime and inspector.
    import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
    import notebook from "https://api.observablehq.com/@wingsumlaw/viscoelasticity-plasticity-visualized.js?v=3";

    const renders = {
        "viewof inputs": "viewof-inputs",
        "intro2": "intro2",
        "anim": "anim",
        "materials": "materials",
        "examples": "examples",
        "materials2": "materials2",
        "creepExample": "creepExample",
        "materials3": "materials3",
        "biology": "biology",
        "biology2": "biology2",
        "cellAnim": "cellAnim",
        "biology3": "biology3",
        "model": "model",
        "eq": "eq",
        "model2": "model2",
        "circuit": "circuit",
        "model3": "model3",
        "eq2": "eq2",
        "model4": "model4",
        "eq3": "eq3",
        "model5": "model5",
        "eq4": "eq4",
        "eq5": "eq5"
    };

    new Runtime().module(notebook, name => {
        const selector = renders[name]
        if (selector) {
            $('#20200301').append(`<div id=${selector}></div>`);
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

<div id="20200301" class="full-width">
</div>

Check out the whole notebook on [Observablehq](https://observablehq.com/@wingsumlaw/viscoelasticity-plasticity-visualized){:target="_blank"}
