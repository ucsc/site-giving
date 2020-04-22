---
id: 700
title: Academic Divisions and Library
date: 2017-08-18T23:07:31+00:00
author: Jason
layout: page
guid: https://live-ucsc-giving.pantheonsite.io/?page_id=700
---
Each academic division at UC Santa Cruz emphasizes interdisciplinary inquiry and experiential learning. UC Santa Cruz seeks to make specific investments in the initiatives and facilities that each division needs. These investments are key to maintaining and growing UC Santa Cruz’s commitment to academic excellence and to work that is as disruptive as it is extraordinary.

 {% for division in site.data.main.divisions%}
 <div class="the-colleges">
 <h2 class="college-name">{{division.name}}</h2>
 <figure class="college-thumb">
{% asset {{division.image}} magick:resize=200 alt='{{division.image}}' %}</figure>
<p class="college-blurb">{{division.blurb | markdownify}}</p>
 <a href="{{ division.link }}" class="blue-pill">Learn More</a></div>{% endfor %}
