---
layout: page
title: Impact of <span class="yellow">Giving</span>
menu: "Impact of Giving"
order: 3
hero:
  use: true
  image: hero-impact-of-giving.jpg #best at 1000px by 450px
  title: This is an aswesome <span>title</span>
  vertical: top #options: top, bottom
  horizontal: left #options: left, right
support_areas:
  - heading: UCSC Fund
    copy: "Ensure your gift goes to the area of greatest need."
    image: 200.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: https://www.ucsc.edu/
  - heading: Search Funds
    copy: "Search or browse all giving opportunities"
    image: search-funds.jpg
    image_alt: image alt text
    button_text: Search an A-Z List
    button_link: https://www.ucsc.edu/
---
{%- if site.posts.size > 0 -%}
<section class="cta two-col-grid">
{%- for post in site.posts -%}
{% if post.featured_post.use %}

<div class="grid-cell">
  <div class="container">
    <div class="copy">
      <h2>{{post.title}}</h2>
      {% if post.pull_quote %}
      <p>{{post.pull_quote}}</p>
      <p>{{post.pull_quote_author}}</p>
      {% else %}
      <p>{{post.subtitle}}</p>
      {%endif%}
      <a href="{{post.url}}" class="yellow-pill">Learn More</a>
    </div>
      {% asset {{post.post_thumbnail}} alt="{{post.post_thumbnail_alt}}"magick:resize=200 %}
  </div>
</div>
 {% endif %}
 {% endfor %}
 </section>
 {%endif%}
 {%- if site.posts.size > 0 -%}

<ul class="post-list">
 {%- for post in site.posts -%}
{% unless post.featured_post.use %}

{%- if post.thumbnail -%}
<li class="post-list-grid">
<div class="post-list-image"><img src="https://picsum.photos/150/150/"></div>
<div class="post-list-copy">
{%- else -%}
<li>
<div class="post-list-copy">
{%- endif -%}
  <h3>
    <a class="post-link" href="{{ post.url | relative_url }}">
      {{ post.title | escape }}
    </a>
  </h3>
  {%- if site.show_excerpts -%}
    {{ post.excerpt }}
  {%- endif -%}
  {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
  <span class="post-meta">{%- if post.author -%}By: <span itemprop="author">{{post.author}},&nbsp;</span> {%- endif -%} {{ post.date | date: date_format }}</span>
</div>
</li>
{% endunless %}
{%- endfor -%}
</ul>
{%- endif -%}
