---
layout: page
title: Areas to support
menu: "Areas to support"
order: 1
hero:
  use: true
  image: hero-areas-to-support.jpg #best at 1000px by 450px
  title: This is an aswesome <span>title</span>
  vertical: top #options: top, bottom
  horizontal: right #options: left, right
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
  - heading: Academic Divisions and Library
    copy: "Support life-changing education through dean's excellence funds in the division."
    image: academic-divisions.jpg
    image_alt: image alt text
    button_text: Search an A-Z List
    button_link: https://www.ucsc.edu/
    division_list: true
  - heading: College Funds
    copy: "Help spportive on-campus communities thrive. The 10 residential colleges provide academic assistance and activities embracing intellectual and social life."
    image: college-funds.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: https://www.ucsc.edu/
    college_list: true
  - heading: Faculty Support and Chairs
    copy: "Advance knowledge. Provide resources to ensure research flourishes. Giving to chairs and professorships helps retain and recruit innovative and accomplished scholars."
    image: faculty-support.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: https://www.ucsc.edu/
  - heading: Scholarships and Fellowships
    copy: "Help ensure that high-achieving students and graduate programs have scholarship and fellowship opportunities"
    image: scholarships-fellowships.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: https://www.ucsc.edu/

---
{% if page.support_areas %}
<section class="two-col-grid">
  {% for item in page.support_areas %}
    <div class="two-col-grid-cell">
        <div class="cta-container">
            <div class="cta-copy">
                <h2>{{item.heading}}</h2>
                <p>{{item.copy}}</p>
                <a href="{{item.button_link}}" class="yellow-pill">{{item.button_text}}</a>
            </div>
            <!-- <img class="cta-image" src="https://picsum.photos/200/200/"> -->
            {% asset {{item.image}} magick:resize=200 class="cta-image"%}
        </div>
        {%- if item.division_list -%} {%- include division-list.html -%} {%- endif -%}
        {%- if item.college_list -%} {%- include college-list.html -%} {%- endif -%}
    </div>
  <!-- <hr>    -->
  {% endfor %}
  
</section>
{% endif %}