---
layout: page
title: Areas to <span class="yellow">Support</span>
menu: "Areas to Support"
order: 2
hero:
  use: true
  image: hero-areas-to-support.jpg #best at 1000px by 450px
  hero_link:
  alt_text: Hero Image Alt Text
  vertical: top #options: top, bottom
  horizontal: right #options: left, right
support_areas:
  - heading: UCSC Fund
    copy: "Ensure your gift goes to the area of greatest need."
    image: search-funds.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /areas-to-support/ucsc-fund/
  - heading: Crowdfunding
    copy: "Browse current and upcoming fundraising projects."
    image: woman-with-binoculars.jpg
    image_alt: Woman with binoculars
    button_text: Browse projects
    button_link: https://crowdfund.ucsc.edu/
  - heading: Academic Divisions and Library
    copy: "Support life-changing education through dean's excellence funds in the division."
    image: academic-divisions.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /areas-to-support/academic-divisions-library/
    division_list: true
  - heading: College Funds
    copy: "Help spportive on-campus communities thrive. The 10 residential colleges provide academic assistance and activities embracing intellectual and social life."
    image: college-funds.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /areas-to-support/the-colleges/
    college_list: true
  - heading: Faculty Support and Chairs
    copy: "Advance knowledge. Giving to chairs and professorships helps retain and recruit innovative and accomplished scholars."
    image: faculty-support.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /areas-to-support/faculty-support-chairs/
  - heading: Scholarships and Fellowships
    copy: "Help ensure that high-achieving students and graduate programs have scholarship and fellowship opportunities"
    image: scholarships-fellowships.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /areas-to-support/scholarships-fellowships/
---
{% if page.support_areas %}
<section class="cta two-col-grid">
  {% for item in page.support_areas %}
  {% assign this_loop = forloop.index | modulo: 2 %}
    <div class="grid-cell">
        <div class="container">
            <div class="copy">
                <h2>{{item.heading}}</h2>
                <p>{{item.copy}}</p>
                <a href="{{item.button_link}}" class="yellow-pill">{{item.button_text}}</a>
            </div>
            {% asset {{item.image}} magick:resize=200 alt="{{item.image_alt}}" %}
        </div>
        {%- if item.division_list -%} {%- include division-list.html -%} {%- endif -%}
        {%- if item.college_list -%} {%- include college-list.html -%} {%- endif -%}
    </div>
{% if this_loop == 0 -%}
<hr>
{% endif -%}
  {% endfor %}

</section>
{% endif %}