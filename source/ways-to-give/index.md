---
layout: page
title: Ways to <span class="yellow">Give</span>
menu: "Ways to Give"
order: 1
hero:
  use: true
  image: hero-ways-to-give.jpg #best at 1000px by 450px
  alt_text: Hero Alt Text
  vertical: bottom #options: top, bottom
  horizontal: left #options: left, right
numbered_list:
  - list_number: one #options: one, two, three, four, five .(spell out, lower case)
    heading: Give online
    copy: Use our <a href="http://connect.ucsc.edu/givenow">secure donation site.</a>
    link_copy: secure donation site.
    url: "http://connect.ucsc.edu/givenow"
  - list_number: two #options: one, two, three, four, five .(spell out, lower case)
    heading: Recurring gifts
    copy: "On the online donation site you can establish a regular schedule of giving by credit card, bank transfer or check."
  - list_number: three #options: one, two, three, four, five .(spell out, lower case)
    heading: Old-fashioned Mail
    copy: |
      UC Santa Cruz Foundation<br>
      Dept. 44787<br>
      PO Box 44000<br>
      San Francisco, CA<br>
      94144-4787<br><br>
      Make Checks out to "UC Santa Cruz Foundation," and be as specific as possible about what program you wish to support.<br><br>
      (For gifts or pledges of more than $25,000, please contact <a href="mailto:giving@ucsc.edu">giving@ucsc.edu</a>.)
  - list_number: four #options: one, two, three, four, five .(spell out, lower case)
    heading: Securities
    copy: Stocks, bonds, and mutual funds can be assigned to the UC Santa Cruz Foundation
  - list_number: five #options: one, two, three, four, five .(spell out, lower case)
    heading: Payroll deductions
    copy: Faculty and staff can arrange regular, scheduled contributions through the <a href="http://connect.ucsc.edu/s/1069/index.aspx?sid=1069&gid=1001&pgid=1795&cid=3427&post_id=0">payrol deduction form</a>. You can also give through your retirement plan.
support_areas:
  - heading: Crowdfunding
    copy: "Give to your vavorite campus cause or browse pop-up student and faculty fundraisers."
    image: crowdfunding.jpg
    image_alt: Crowdfunding image of students
    button_text: Learn More
    button_link: https://crowdfund.ucsc.edu/
  - heading: Planned Giving
    copy: "If you have included UC Santa Cruz in your estate plans or would like to discuss opportunities..."
    image: man-with-seedlings.jpg
    image_alt: image alt text
    button_text: Let Us Know
    button_link: http://plannedgifts.ucsc.edu/
  - heading: Parents and Families
    copy: "Help ensure all students benefit from a vibrant learning environment by giving to the UCSC Parents Fund"
    image: parents-families.jpg
    image_alt: Parents and Families image of mother and daughter
    button_text: Learn More
    button_link: /ways-to-give/uc-santa-cruz-parents-families/
    division_list: false
  - heading: Chancellor's Associates
    copy: Join our leadership donor society with your gift of $1,000 or more to the <a href="/areas-to-support/ucsc-fund/">UC Santa Cruz Fund</a> or the <a href="/ways-to-give/uc-santa-cruz-parents-families/">Parents Fund</a>.
    image: chancellors-associates.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /ways-to-give/chancellors-associates/
    college_list: false
  - heading: Endowment
    copy: "Make your gift transcend generations."
    image: endowment.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /ways-to-give/endowment-giving/
  - heading: Recurring Gifts
    copy: "By establishing a monthly donation, your impact is ongoing and also cuts down on addministrative costs."
    image: greenhouse-research.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /ways-to-give/recurring-gifts/
---

{% if page.numbered_list.size > 3 %}
  <section class="ways-to-give three-col-grid">

      <div class="grid-cell">

{% if page.numbered_list[0] %}
<div class="container">
              <h3 class="head {{page.numbered_list[0].list_number}}">{{page.numbered_list[0].heading}}</h3>
              <p class="copy">{{page.numbered_list[0].copy}}</p>
              </div>
            {%endif %}
  {% if page.numbered_list[1] %}
  <div class="container">
<h3 class="head {{page.numbered_list[1].list_number}}">{{page.numbered_list[1].heading}}</h3>
              <p class="copy">{{page.numbered_list[1].copy}}</p>
              </div>
        {% endif %}

      </div>
      {% if page.numbered_list[2] %}
       <div class="grid-cell">
<div class="container">
<h3 class="head {{page.numbered_list[2].list_number}}">{{page.numbered_list[2].heading}}</h3>
              <p class="copy">{{page.numbered_list[2].copy}}</p>
              </div>
              </div>
        {% endif %}
        {% if page.numbered_list[3] %}
       <div class="grid-cell">
<div class="container">
<h3 class="head {{page.numbered_list[3].list_number}}">{{page.numbered_list[3].heading}}</h3>
              <p class="copy">{{page.numbered_list[3].copy}}</p>
              </div>
        {% if page.numbered_list[4] %}
        <div class="container">
<h4 class="head {{page.numbered_list[4].list_number}}">{{page.numbered_list[4].heading}}</h4>
              <p class="copy">{{page.numbered_list[4].copy}}</p>
              </div>
              {% endif %}
              </div>
        {% endif %}
    </section>
{% endif %}
{% if page.support_areas %}
<section class="cta two-col-grid">
  {% for item in page.support_areas %}
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

  {% endfor %}

</section>
{% endif %}