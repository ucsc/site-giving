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
  - list_number: one #options: one, two, three, four, five, six, seven .(spell out, lower case)
    heading: Give online
    copy: |
      Use our <a href="http://connect.ucsc.edu/givenow">secure donation site</a>
    link_copy: secure donation site
    url: "http://connect.ucsc.edu/givenow"
  - list_number: two #options: one, two, three, four, five, six, seven .(spell out, lower case)
    heading: Recurring gifts
    copy: | 
      On the <a href="http://connect.ucsc.edu/givenow">online donation site</a> you can establish a regular schedule of giving by credit card, bank transfer or check
    link_copy: online donation site
    url: "http://connect.ucsc.edu/givenow"
  - list_number: three #options: one, two, three, four, five, six, seven .(spell out, lower case)
    heading: Legacy giving
    copy: |
      <a href="https://plannedgifts.ucsc.edu">Make a planned gift or let us know</a> UCSC is in your will
    link_copy: Make a planned gift or let us know      
    url: "https://plannedgifts.ucsc.edu"
  - list_number: four #options: one, two, three, four, five, six, seven .(spell out, lower case)
    heading: Mail a check
    copy: |
      UC Santa Cruz Foundation<br>
      Dept. 44787<br>
      PO Box 44000<br>
      San Francisco, CA<br>
      94144-4787<br><br>
      Make Checks out to "UC Santa Cruz Foundation," and be as specific as possible about what program you wish to support.<br><br>
      (For gifts or pledges of more than $25,000, please contact <a href="mailto:giving@ucsc.edu">giving@ucsc.edu</a>.)
  - list_number: five #options: one, two, three, four, five, six, seven .(spell out, lower case)
    heading: Securities
    copy: |
      Stocks, bonds, mutuals funds—follow instructions in <a href="/assets/documents/gifts-of-stock.pdf">this form</a>
    link_copy: this form
    url: "/assets/documents/gifts-of-stock.pdf"
  - list_number: six #options: one, two, three, four, five, six, seven .(spell out, lower case)
    heading: UC payroll deduction
    copy: |
      Faculty and staff can arrange regular, scheduled contributions through the <a href="http://connect.ucsc.edu/s/1069/index.aspx?sid=1069&gid=1001&pgid=1795&cid=3427&post_id=0">payroll deduction form</a>. You can also give through your retirement plan.
    link_copy: payroll deduction form
    url: "http://connect.ucsc.edu/s/1069/index.aspx?sid=1069&gid=1001&pgid=1795&cid=3427&post_id=0"
  - list_number: seven #options: one, two, three, four, five, six, seven .(spell out, lower case)
    heading: Complex assets
    copy: |
      Illiquid securities, real estate, insurance, intellectual property, business interest—contact Jeff Shilling, associate vice chancellor of development, shilling@uscc.edu or (831) 459-5718
support_areas:
  - heading: UCSC Fund
    copy: "Support a vibrant learning environment with a gift to the area of greatest need."
    image: parents-families.jpg
    image_alt: image of mother and daughter
    button_text: Learn More
    button_link: /ways-to-give/uc-santa-cruz-parents-families/
    division_list: false
  - heading: Planned Giving
    copy: "If you have included UC Santa Cruz in your estate plans or would like to discuss opportunities..."
    image: man-with-seedlings.jpg
    image_alt: image alt text
    button_text: Let Us Know
    button_link: http://plannedgifts.ucsc.edu/
  - heading: Crowdfunding
    copy: "Give to your favorite campus cause or browse pop-up student and faculty fundraisers."
    image: crowdfunding.jpg
    image_alt: Crowdfunding image of students
    button_text: Learn More
    button_link: https://crowdfund.ucsc.edu/
  - heading: "Chancellor's Associates"
    copy: "Join our leadership donor society with your gift of $1,000 or more to the <a href='/areas-to-support/ucsc-fund/'>UC Santa Cruz Fund</a>."
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
    copy: "By establishing a monthly donation, your impact is ongoing and reduces administrative costs."
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
