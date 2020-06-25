---
id: 2911
title: Memorial Endowments
date: 2017-09-13T00:00:35+00:00
author: Jason
layout: page
guid: https://live-ucsc-giving.pantheonsite.io/?page_id=2911
hero:
  use: true
  image: CowellRanchBldgs.jpg #best at 1000px by 450px
  hero_link: false
  alt_text: Cowell Ranch Buildings
  vertical: bottom #options: top, bottom
  horizontal: right #options: left, right
support_areas:
  - heading: Virtual Wall
    copy: We acknowledge and remember the special people recognized by endowments with a virtual wall listing their names.
    image: ida-benson-lynn.jpg
    image_alt: Ida Benson Lynn photo
    button_text: View Virtual Wall
    button_link: /ways-to-give/endowment-giving/memorial-endowments/virtual-memorial-wall/
  - heading: Photo Gallery
    copy: Photos tells stories and stir memories. We  honor some of the people recognized by endowments with this photo gallery.
    image: Terry_Freitas.jpg
    image_alt: Terry Freitas Photo
    button_text: View Photo Gallery
    button_link: /ways-to-give/endowment-giving/memorial-endowments/memorial-endowments-gallery/
---
Endowments created in memory of loved ones are a lasting tribute that benefits UC Santa Cruz long into the future. Memorial endowments enhance our campus by providing meaningful support to students, faculty, facilities, and programs at UC Santa Cruz.

{% if page.support_areas %}
<section class="memorial-endowments home-cta cta two-col-grid">
{% for area in page.support_areas %}
    <div class="grid-cell">
        <div class="container">
{% asset {{area.image}} alt="{{area.image_alt}}" magick:resize=300 magick:crop=300x225+0+0 %}
            <div class="copy">
               <h2>{{area.heading}}</h2>
                <p>{{area.copy}}</p>
                <a href="{{area.button_link}}" class="yellow-pill">{{area.button_text}}</a>
            </div>
        </div>
    </div>
{% endfor %}
 </section>
 {% endif %}
