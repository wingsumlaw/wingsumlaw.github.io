---
layout: default
title: Wing-Sum Law | Portfolio
---

My early career thus far has been dedicated to honing my technical, analytical, and inquisitive skills as an engineer. I am now realizing my potential a designer and passion for applying a technical engineering education to a career of creation.

Below is a portfolio-in-progress that I hope showcases **my thought process, aesthetic, and creative potential.**

## Design

<div class='blogcontainer'>
    {% for post in site.posts %}
    {% if post.include == true %}
    {% if post.tags contains 'design'%}
        <div class='{{ post.folioclass }}'>
            <a href ='{{ post.url }}'>
                <img class='thumb' src='{{ post.foliothumb }}'>
                <div class='foliodescription'>
                    <p class='bold bigger'>{{ post.title }}</p>
                    <p>{{ post.description }}</p>
                </div>
            </a>
        </div>
    {% endif %}
    {% endif %}
    {% endfor %}
</div>

## Data Visualization

<div class='blogcontainer'>
    {% for post in site.posts %}
    {% if post.include == true %}
    {% if post.tags contains 'data-viz'%}
        <div class='{{ post.folioclass }}'>
            <a href ='{{ post.url }}'>
                <img class='thumb' src='{{ post.foliothumb }}'>
                <div class='foliodescription'>
                    <p class='bold bigger'>{{ post.title }}</p>
                    <p>{{ post.description }}</p>
                </div>
            </a>
        </div>
    {% endif %}
    {% endif %}
    {% endfor %}
</div>

## Digital Illustration

<div class='blogcontainer'>
    {% for post in site.posts %}
    {% if post.include == true %}
    {% if post.tags contains 'digital-illustration'%}
        <div class='postcontainer'>
            <img class='thumb' src='{{ post.thumb }}'>
        </div>
    {% endif %}
    {% endif %}
    {% endfor %}
</div>
