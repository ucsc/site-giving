---
layout: page
title: Ways to <span class="yellow">Give</span>
menu: "Ways to Give"
order: 1
hero:
  use: true
  image: hero-ways-to-give.jpg 
  alt_text: Hero Alt Text
  vertical: bottom 
  horizontal: left 
numbered_list:
  - list_number: one 
    heading: Give online
    copy: |
      Use our <a href="http://connect.ucsc.edu/givenow">secure donation site.</a>
    link_copy: secure donation site
    url: "http://connect.ucsc.edu/givenow"
  - list_number: two 
    heading: Recurring gifts
    copy: | 
      Establish a regular schedule of giving by credit card, bank transfer, or check on our <a href="http://connect.ucsc.edu/givenow">online donation site.</a> 
    link_copy: online donation site
    url: "http://connect.ucsc.edu/givenow"
  - list_number: three 
    heading: Legacy giving
    copy: |
      <a href="https://plannedgifts.ucsc.edu">Make a planned gift or let us know</a> UCSC is in your estate plan.
    link_copy: Make a planned gift or let us know      
    url: "https://plannedgifts.ucsc.edu"
  - list_number: four
    heading: Securities
    copy: |
      To donate stocks, bonds, mutuals funds, please follow instructions in <a href="/assets/documents/gifts-of-stock.pdf">this form.</a>
    link_copy: this form
    url: "/assets/documents/gifts-of-stock.pdf"
  - list_number: five
    heading: UC payroll deduction
    copy: |
      Faculty and staff may arrange regular, scheduled contributions through the <a href="http://connect.ucsc.edu/s/1069/index.aspx?sid=1069&gid=1001&pgid=1795&cid=3427&post_id=0">payroll deduction form</a>. You can also give through your retirement plan.
    link_copy: payroll deduction form
    url: "http://connect.ucsc.edu/s/1069/index.aspx?sid=1069&gid=1001&pgid=1795&cid=3427&post_id=0"
  - list_number: six
    heading: Complex assets
    copy: |
      Illiquid securities, real estate, insurance, intellectual property, business interest, cryptocurrencies—contact <a href="pmetha7@ucsc.edu">Priya Mehta</a>, Associate Vice Chancellor for Development, (646) 287-1534.
  - list_number: seven 
    heading: Mail a check
    copy: |
      Please complete a <a href="/assets/documents/gifts-pledges-mail-form.pdf">gift form</a> and send it with your gift to<br>
      UC Santa Cruz Foundation<br>
      Attn: Gift Administration<br>
      1156 High St<br>
      Santa Cruz, CA<br>
      95064<br><br>
      Make checks payable to "UC Santa Cruz Foundation," and be as specific as possible about what program you wish to support.<br><br>
      (For gifts or pledges of more than $25,000, please contact <a href="mailto:giving@ucsc.edu">giving@ucsc.edu</a>.)
    url: "/assets/documents/gifts-pledges-mail-form.pdf"
  - list_number: eight
    heading: Employer matching
    copy: |
      Many employers match their employees’ charitable contributions, providing an easy and effective way of leveraging your gift to UC Santa Cruz. <a href="/ways-to-give/employer-match">Search our database</a> to see if your employer will match your donation.
support_areas:
  - heading: UCSC Fund
    copy: "Support a vibrant learning environment with a gift to the area of greatest need."
    image: parents-families.jpg
    image_alt: student with parent
    button_text: Learn More
    button_link: /areas-to-support/ucsc-fund/
    division_list: false
  - heading: Planned Giving
    copy: "If you have included UC Santa Cruz in your estate plans or would like to discuss opportunities..."
    image: man-with-seedlings.jpg
    image_alt: image alt text
    button_text: Let Us Know
    button_link: http://plannedgifts.ucsc.edu/
  - heading: Crowdfunding
    copy: "Support student success and exciting new projects!"
    image: crowdfunding.jpg
    image_alt: Crowdfunding image of students
    button_text: Learn More
    button_link: https://crowdfund.ucsc.edu/
  - heading: Endowment
    copy: "Make your gift transcend generations."
    image: endowment.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /ways-to-give/endowment-giving/
  - heading: Recurring Gifts
    copy: "Monthly giving is a great way to budget charitable donations and sustain your impact."
    image: greenhouse-research.jpg
    image_alt: image alt text
    button_text: Learn More
    button_link: /ways-to-give/recurring-gifts/
---
{% if page.numbered_list.size > 3 %}
  <section class="ways-to-give two-col-grid">
{% for cell in page.numbered_list %}
<div class="container">
              <h3>{{cell.heading}}</h3>
              <p class="copy">{{cell.copy}}</p>
              </div>
{% endfor%}
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
