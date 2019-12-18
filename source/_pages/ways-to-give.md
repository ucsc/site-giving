---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

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
---
<!-- {% include three-col-grid.html %} -->
{% if page.numbered_list %}
<div class="wrapper">
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
      </div>
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
  <!-- <hr>    -->
  {% endfor %}
  
</section>
{% endif %}
