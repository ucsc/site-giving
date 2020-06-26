---
id: 646
title: The Colleges
date: 2017-08-18T21:03:00+00:00
author: Jason
layout: page
guid: https://live-ucsc-giving.pantheonsite.io/?page_id=646
---
All UC Santa Cruz students are part of both a prestigious university and a college – one of ten communities that provide an academic home, residential life, and social connection. The college structure is designed to combine the intimacy of a small, liberal arts college with the depth and rigor of a major research university.

Each college is seeking support for its innovative programs and initiatives that serve students and push the boundaries of knowledge and understanding.

{% for college in site.data.colleges %}
 <div class="the-colleges">
 <h2 class="college-name">{{ college.name }}</h2>
 <figure class="college-thumb">
  {% asset {{college.image}} magick:resize=200 alt='{{college.image}}' %}</figure>
  <p class="college-blurb">{{college.blurb}}</p>
  <a href="{{ college.link }}" class="blue-pill">Learn More</a></div>
{% endfor %}
