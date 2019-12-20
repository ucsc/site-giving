---
layout: page
title: Ways to <span class="yellow">Give</span>
menu: "Ways to Give"
order: 2
hero:
  use: true
  image: hero-ways-to-give.jpg #best at 1000px by 450px
  title: This is an aswesome <span>title</span>
  vertical: bottom #options: top, bottom
  horizontal: left #options: left, right
numbered_list:
  - list_number: one #options: one, two, three, four, five .(spell out, lower case)
    heading: Give online
    copy: Use our <a href="https://www.ucsc.edu">secure donation site.</a>
    link_copy: secure donation site.
    url: "https://www.ucsc.edu"
  - list_number: two #options: one, two, three, four, five .(spell out, lower case)
    heading: Recurring gifts
    copy: "On the online donation site you can establish a regular schedule of giving by credit card, bank transfer or check."
  - list_number: three #options: one, two, three, four, five .(spell out, lower case)
    heading: Old-fashioned Mail
    copy: "Help supportive on-campus communities thrive. The 10 residential colleges provide academic assistance and activities embracing intellectual and social life."
  - list_number: four #options: one, two, three, four, five .(spell out, lower case)
    heading: Securities
    copy: "Help supportive on-campus communities thrive. The 10 residential colleges provide academic assistance and activities embracing intellectual and social life."
  - list_number: five #options: one, two, three, four, five .(spell out, lower case)
    heading: Payroll deductions
    copy: Faculty and staff can arrange regular, scheduled contributions through the <a href="https://www.ucsc.edu">payrol deduction form</a>. You can also give through your retirement plan.
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

{% if page.numbered_list %}
  <section class="three-col-grid">
  {% for item in page.numbered_list %}
      <div class="three-col-grid-cell htg-cell {{item.list_number}}">
          <div class="htg-list-container">
              <h3 class="htg-list-head {{item.list_number}}">{{item.heading}}</h3>
              <p class="htg-list-copy">{{item.copy}}</p>
          </div>
      </div>
    {% endfor %}
    </section>
{% endif %}
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
  
  {% endfor %}
  
</section>
{% endif %}
