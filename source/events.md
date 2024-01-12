---
id: 12
title: Events
date: 2017-07-21T21:36:44+00:00
author: Jason
layout: page
guid: https://live-ucsc-giving.pantheonsite.io/?page_id=12
---

# Creating Navigation Menus

The UCSC theme has one standard menu, the **Primary Navigation** menu you see at the top of your web page.

WordPress also allows users to create additional navigation menus to place in other content areas such as side-bars. These additional navigation menus allow a user to provide links to a sub-set of their site.

The process for creating the Primary Navigation is different than the process for creating additional navigation. This post aims to demonstrate how each type is created, styled and used.

## Create a Primary Navigation Menu

Creating or editing the Primary Navigation menu is done in the [WordPress Dashboard](https://wordpress.org/documentation/article/dashboard-screen/) under **Appearance->Menus**. If you have just launched your site, there is probably a place-holder menu already there. You may edit this menu to suit your needs.

You "build" your Primary Navigation menu by selecting the appropriate items from the left column of your **Dashboard** under **Add menu items** and clicking the **Add to Menu** button. The selected items will appear in the right column under **Menu structure** and you can drag-and-drop to reorder them.

To remove a piece of content from the menu, expand the page or post in the **Menu structure** pane and you will see a link to remove the item. You can also use this method to edit the Navigation Label and adjust the text that is shown on the front-end. Several menu items can be selected for deletion at once by ticking the **Bulk Select** box.

Once you are satisfied with the links in your menu, click **Save Menu** and exit the Dashboard to the front of your site to review the results. If you are unsatisfied, access the Dashboard and return to **Appearance->Menus** to make adjustments.

## Create Menus Using the Navigation Block

WordPress provides a [Navigation Block](https://wordpress.org/documentation/article/navigation-block/) for creating additional menus via the [Block Editor](https://wordpress.org/documentation/article/wordpress-block-editor/). Each menu you create is named. Once you create a menu, it becomes re-usable and available for use site-wide.

While editing a post or page, insert the **Navigation Block** into your content area by selecting it from the list in the left-hand **Block Inserter** side-bar or by hitting the forward-slash key (`/`) and typing `navigation`.

The Navigation Block will most likely populate itself with the links from the Primary Navigation that you created above. To create a new menu for this block (or replace it with one previously created), select the entire Navigation Block either by selecting it in the content area or by selecting it from the left sidebar after clicking the **Document Overview** button in the top left portion of your screen.

Selecting the Navigation Block will reveal its settings panel in the right column of your editing screen. The items in the current menu will be shown vertically under the heading **Menu**.

To either create a new menu or select a different menu you created previously, click the **three-vertical-dot menu** to the right of the **Menu** heading. An overlay menu will appear listing your previously created menus as well as the option to create a new menu.

Clicking **Create new menu** will present you with an empty Navigation Block. Add new navigation items via either the block in the content area or the right sidebar. You can drag-and-drop your menu items in the right sidebar to re-order them. You can also re-order your items in the Navigation Block's content area by selecting the link itself and clicking either the left or right arrow in the formatting menu that appears.

## Types of Links

Both **Appearance->Menus** and the **Navigation Block** allow you to place links to content other than pages or posts such as an external link, a Category or Tag link, or, in the case of the Navigation Block, just about any other content block that is available. A popular use uf the Navigation Block is to create a set of [anchor links](#) to aid on-page navigation.

## Style and Format the Navigation Block

Once you create your menu, it might not look that great. Perhaps it's displaying vertically and you want it to display horizontally because you're using it in a side-bar. Maybe you want to change the background. Generally jazz it up a bit. No sweat!

As discussed above, when you select the whole Navigation Block (not just a list item), its formatting and settings panel will appear in the right column of your editing screen.

There are three icons above the **Menu** list that toggle the ***List*** ("stepped hamburger" icon) ***Settings*** (gear icon), and ***Styles*** (circle-half-dark-half-light icon) of the block.

### Settings

The ***Settings*** area allows you to adjust your menu's layout appearance. You can adjust its orientation (*horizontal* or *vertical*), its item justification (*left*, *center*, *right*, etc.) and how it displays on mobile screens.

### Styles

The ***Styles*** screen allows you to apply styling typical to most blocks such as text and background color, font size, etc.

## Left Navigation Pattern

The **UCSC WordPress Theme** provides a [Block Pattern](https://developer.wordpress.org/block-editor/reference-guides/block-api/block-patterns/) with a preset layout called **Left navigation**. This pattern provides a two-column layout with a left-hand navigation area containing a Navigation Block and a right-hand content area. This is useful for page layout in sub-sections of your site.

Access the **Left navigation** pattern from the **Pattterns** library in the **Block Inserter** side-bar or by hitting the forward-slash key (`/`) and typing `left navigation` in your content area. Once you insert the pattern, you are free to add or remove additional blocks to it to customize it to your liking. The original block pattern will remain unchanged.

## Finalize and Use

Whether you are using the Left navigation pattern or not, once you get your menu settings and styles dialed in, **Save** your work! As stated above, your new menu will be available for use globally throughout your site, not just where you created it. However, if you created it where you intend to use it, you're good to go.

Note though, that the *next time* you insert a Navigation Block elsewhere in your site, it will automatically populate with the menu you created in this exercise. You can create a new menu by repeating the steps outlined in this post.
