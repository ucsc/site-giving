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
  - heading: All Designated Funds
    copy: "Search or browse an A-Z list of all giving opportunities."
    image: search-funds.jpg
    image_alt: students in lab
    button_text: A-Z list
    button_link: http://alumni.ucsc.edu/search-designations/
  - heading: Area of Greatest Need
    copy: "Give to make a significant and immediate difference."
    image: student-greenhouse.jpg
    image_alt: student in greenhouse   
    button_text: Make a gift
    button_link: https://secure.ucsc.edu/s/1069/bp18/interior.aspx?sid=1069&gid=1001&pgid=761&cid=1722
  - heading: Student Success
    copy: "Provide direct support to students in need."
    image: CM-Outside-1.jpg
    image_alt: Students collaborate outside
    button_text: Learn more
    button_link: https://deanofstudents.ucsc.edu/slug-support/program/
  - heading: Crowdfunding
    copy: "Browse current and upcoming fundraising projects."
    image: Cross-07.jpg
    image_alt: Computer science students 
    button_text: Browse projects
    button_link: https://crowdfund.ucsc.edu/
  - heading: Academic Divisions and Library
    copy: "Support life-changing education through academic divisions, libraries, and observatories."
    image: academic-divisions.jpg
    image_alt: student with cat on bench
    button_text: Learn More
    button_link: /areas-to-support/academic-divisions-library/
  - heading: College Funds
    copy: "Help the 10 residential colleges thrive, and provide academic assistance and activities embracing intellectual and social life."
    image: college-funds.jpg
    image_alt: student in cafe
    button_text: Learn More
    button_link: /areas-to-support/the-colleges/
  - heading: Faculty Support and Chairs
    copy: "Give to chairs and professorships to retain and recruit innovative and accomplished scholars."
    image: faculty-support.jpg
    image_alt: person in lab coat holding tablet
    button_text: Learn More
    button_link: /areas-to-support/faculty-support-chairs/
  - heading: Scholarships and Fellowships
    copy: "Empower high-achieving students and graduate programs with scholarship and fellowship opportunities."
    image: woman-with-binoculars.jpg
    image_alt: Woman with binoculars
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
    </div>
{% if this_loop == 0 -%}
<hr>
{% endif -%}
  {% endfor %}

</section>
{% endif %}
