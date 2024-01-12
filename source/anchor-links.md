---
title: Anchor Links
date: 2017-07-21T21:36:44+00:00
author: Jason
layout: page
---

# Create Anchor Links for Single Page Navigation

If you have a page with a lot of text that is organized by Headings, a policy page for example, one useful way to provide on-page navigation is with anchor links.

The UCSC WordPress Theme provides a layout Pattern called **Left navigation**. In this post we'll use it to create a navigation menu with anchor links for on-page navigation.

See our post [creating navigation menus](#) if you are unfamilliar with this process. That post also describes how to insert the Left navigation pattern into your page or post.

## Left Navigation Layout

Create a page and insert the **Left navigation** Pattern into your content area. Use the right-hand content area to place or create your policy or other long-text piece of content. Be sure to separate your content sections with Headings.

The Left navigation pattern will pre-populate its included Navigation Block with a default set of links. We will replace it by [creating a new navigation menu](#) with anchor links.

## Add HTML Anchor to Headings

Each Heading in our content that you want to link to needs a uniquely named **HTML anchor**. Do this by selecting each [Heading Block](https://wordpress.com/support/wordpress-editor/blocks/heading-block/) in your text. In the Block Settings that appear in the right-hand side of the Editor, scroll down to **Advanced** and click its heading to expand it. There you will find a field called **HTML Anchor**. Insert a unique name into this field. A good naming method is to use a version of the Heading text itself in lower-case and separated by dashes (eg., `heading-title-one`).

## Add Anchors to Links

Now that you have your HTML anchors set, create a new menu. Each link item you add to this menu will be a **Custom Link**. The "link" for these items will be the text of the HTML anchors you added to your Headings Blocks above, preceded by a "pound sign" (or "hashtag"), such as `#heading-title-one`.

## Edit Link Labels

When you add custom links that are anchors, the text of the link (its label) may look odd. To change this, select an individual navigation item and its settings will appear in the right-hand column of the Editor screen. Edit the link's **Label** to your liking. Do this for each item in your menu then **update your page**.

## Give Yourself a High-Five

Head out to the front-end of your site and view your page. You should now have operational anchor links for navigating your page.
