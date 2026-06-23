---
title: Items
sidebar:
  order: 11
---

# What are Items?
Items are stuff that you pick up. Visually they look just like Things, but when the Player walks over an Item, it gets picked up and added to the Player’s inventory. Like the Player and Things, Items always face the camera. You can have as many copies of an Item in the game as you want.

In this lesson we're going to learn how to feed our creature a cookie.

## Create an item

For this this lesson I've provided a premade level to save some time.

<a href="/lil-bitty-things-tour/items-lesson-start.txt" download>Click me to download items lesson starting setup</a>

![Descriptive Alt Text](../lessons/images/lesson-11/level-start.jpg)

Go to the "Sprites" tab and create a new Sprite.

![Descriptive Alt Text](../lessons/images/lesson-11/sprites-tab.jpg)

Draw a cookie or food of your choice.

![Descriptive Alt Text](../lessons/images/lesson-11/food-sprite.jpg)

Go to the "Items" tab and create a new Item.

![Descriptive Alt Text](../lessons/images/lesson-11/create-new-item.jpg)

Replace the new Item sprite.

![Descriptive Alt Text](../lessons/images/lesson-11/replace-sprite.jpg)

Name our Item "cookie".

![Descriptive Alt Text](../lessons/images/lesson-11/rename-item.jpg)

On the left tool bar, make sure you are in "Add Items" mode

![Descriptive Alt Text](../lessons/images/lesson-11/add-items-mode.jpg)

Place the food item on the right side of the room

![Descriptive Alt Text](../lessons/images/lesson-11/place-item.jpg)

## Add Action Sequence to creature

In the "Action Sequence" tab, create new action and name it "Hungry".

![Descriptive Alt Text](../lessons/images/lesson-11/create-hungry-action.jpg)

Click on the actions dropdown menu. Click on "Make a Decision" action.

![Descriptive Alt Text](../lessons/images/lesson-11/add-decision-action.jpg)

Click on the "If" inside the "Make a Decision" action. This is called an if condition.

**Condition:** is a state of being or a specific requirement.

![Descriptive Alt Text](../lessons/images/lesson-11/click-if.jpg)

This will execute a different action depending on if some condition is true. For example, If cookies we have is more than 0. 

![Descriptive Alt Text](../lessons/images/lesson-11/if-condition-diagram.jpg)

The bottom of the "Action Editor" is where we can chage our condition.

![Descriptive Alt Text](../lessons/images/lesson-11/if-condition.jpg)

This is the dropdown button where we can choose any item we've created.

