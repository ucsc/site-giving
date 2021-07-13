---
id: 794
title: Trustees
date: 2017-08-21T19:32:28+00:00
author: Jason
layout: page
guid: https://live-ucsc-giving.pantheonsite.io/?page_id=794
see_also:
  - title: About the Foundation
    link: https://foundation.ucsc.edu/index.html
  - title: Investment Reports and Policies
    link: https://foundation.ucsc.edu/endowment/index.html
  - title: Board Opportunity Fund
    link: https://foundation.ucsc.edu/opportunity-fund/index.html
---
## UC Santa Cruz Foundation  

Working in close partnership with the chancellor, administration, faculty and staff, the **UC Santa Cruz Foundation** shares the university’s vision of academic excellence and its commitment to public service. The Foundation is a not-for-profit, public-benefit corporation (tax ID 23-7394590) organized in 1974 to raise and manage private support for UC Santa Cruz.  The current foundation chair is Alec J. Webster.

<section class="three-col-grid">
{% for trustee in site.data.trustees%}
{% if trustee.heading %}
<h3 class="grid-cell trustee-heading">{{trustee.heading}}</h3>
{% endif %}
{% if trustee.heading-blurb %}
<p class="grid-cell trustee-heading">{{trustee.heading-blurb}}</p>
{% endif %}
<div class="grid-cell">
{% if trustee.photo %}
<div class="trustee-photo-wrap">
{% asset {{trustee.photo}} magick:resize=200x200 alt="Photo of {{trustee.name}}" itemprop="image" class="trustee-photo" %}
</div>
{% endif %}
{% if trustee.name %}
<h3>{{trustee.name}}
{% if trustee.year %}
&#8216;{{trustee.year}}{% endif %}</h3>
{% endif %}
{% if trustee.emeritus-name %}
<h4>{{trustee.emeritus-name}}</h4>
{% endif %}
{% if trustee.position %}
<p class="college-blurb">{{trustee.position}}</p>
{% endif %}
{% if trustee.former %}
<p class="college-blurb">{{trustee.former}}</p>
{% endif %}
{% if trustee.location %}
<p class="college-blurb">{{trustee.location}}</p>
{% endif %}
</div>
{% endfor %}
</section>
