# Obsidian Starter Vault for Managers

***Organize your teams: An Obsidian starter vault for managers, support for one on ones and periodic reports***

---

Team Member Home Template, update the baseFolder value to a location you want to store team member profiles and information.

## Table of Contents

1. [Setup](#setup)

2. [Structure](#structure)

1. [\_data_](#\_data_)

2. [Concept Board](#concept-board)

3. [Journal](#journal)

4. [Learning](#learning)

5. [Notes](#notes)

6. [Personal](#personal)

7. [Projects](#projects)

8. [Resources](#resources)

9. [Spaces](#spaces)

10. [Dashboard.md](#dashboardmd)

11. [Inbox.md](#inboxmd)

3. [Templates](#templates)

1. [Navigation Bar](#navigation-bar)

2. [Full Page Templates](#full-page-templates)

3. [Component Templates](#component-templates)

4. [JavaScript Components](#javascript-components)

4. [Plugins](#plugins)

1. [Installed Plugins](#installed-plugins)

2. [Notable Plugins](#notable-plugins)

5. [Themes](#themes)

  
  

## Setup

- [ ] Install and enable all plugins and the minimal theme  

## Structure

### Overview

```

Vault/

├── _data_/

├── Concept Board/

│ ├── Cocnepts/

│ ├── Lectures/

│ └── Concept Board.md

├── Journal/

│ ├── Entries/

│ └── Journal Dashboard.md

├── Learning/

│ ├── Example Course/

│ │ │── Assignments/

│ │ │── Lectures/

│ │ │── Notes/

│ │ └── Home.md

│ └── Learning Dashboard.md

├── Notes/

│ └── Notes Dashboard.md

├── Personal/

│ └── Personal Dashboard.md

├── Projects/

│ ├── Example Project/

│ │ │── Meetings/

│ │ │── Notes/

│ │ │── Home.md

│ │ │── References.md

│ │ └── Tasks.md

│ └── Projects Dashboard.md

├── Resources/

│ └── Resources Dashboard.md

├── Spaces/

│ ├── Books/

│ ├── Contacts/

│ ├── Definitions/

│ ├── Formulas/

│ ├── Trips/

│ └── Spaces Dashboard.md

├── Dashboard.md

├── Inbox.md

└── README.md

```

  

### \_data_

The \_data_ folder holds contains all templates, components, media, pre-setup pinned pages, and scripts.

  

### Concept Board

The _Concept Board_ is a place to store and document preliminary concepts and ideas. Typically ideas are written down as a simple idea (e.g., *Drone Part Picker Website*) that can evolve into a _Project_. Each newly added concept's page is setup using the _Concept Template_ template. The template type is set by the Templater plugin via folder path.

  

**How to add a new concept**

Add a new concept by navigating to _Concept Board_ and clicking on the `+ Add concept` button. Or add a new note directly in the `Concept Board/Concepts/` folder.

  

### Journal

The _Journal_ is a place for personal records where thoughts, experiences, ideas, observations, achievements, and important events are documented regularly for self-reflection or for future reference. The _Journal_ can act as both a daily journal or periodic. Each journal entry page is setup using the _Journal entry template_ template. The template type is set by the Templater plugin via folder path.

  

**How to add a new journal entry**

Add a new journal entry by navigating to _Journal Dashboard_ and clicking on the `+ Add journal entry`. Or click on the `Open today's daily note` or by executing the command `Daily notes: Open today's daily note` via command pallet.

  
  

### Learning

The _Learning_ section is for courses, classes, tutorials, workshops, and general learning.

  

**How to add a new course**

To add a new course, click the `+ Add course` button.

  

**Structure**

```

Learning/

└── Example Course/

├── Assignments/ (note: this will only created if you select "Yes" on folder-based assignments prompt during setup)

│ └── 01 - My Assignment.md

├── Lectures/

│ └── 01 - My First Lecture.md

├── Notes/

| └── 01 - My Note.md

└── Home.md

```

  

**Templates**

- Course setup

- Course assignment

- Course lecture

- Course note

  

### Notes

_Notes_ is a place for atomic notes. Each newly added note's page is setup using the _Note page template_. The template type is set by the Templater plugin via folder path.

  
  

### Personal

The _Personal_ folder is for all private and personal documentation and notes. This folder can include things such as accounts, finances, health, identity, vehicles, personal property and vehicle information, etc...

  
  

### Projects

A place for _Projects_. The projects section is setup with pre-defined boilerplate templates that are applicable to most projects, these templates include: Home page, meetings, notes, references, and tasks.

  

**How to add a project**

To add a new project, click the `+ Add project` button.

  

**Structure**

```

Project/

└── Example Project/

├── Meetings/

│ └── 2023-07-15 - My Meeting.md

├── Notes/

│ └── My Note.md

├── Home.md

├── References.md

└── Tasks.md

```

  

**Templates**

- Project boilerplate page

- Project feature

- Project meeting

- Project note

- Project setup

- Project setup meetings

- Project setup notes

- Project setup references

- Project setup tasks

- Project task

  

### Resources

_Resources_ is a general collection of resources and information.

  

### Spaces

_Spaces_ is a flexible area that allows you to organize content/notes on a specific topic or domain (e.g., Books).

  

### Dashboard.md

Homepage of the vault.

  

### Inbox.md

Quickly add general information here, this can be converted to a folder if desired.

  
  

## Templates

There are two types of templates, full page and partial/component templates. Full page templates

  

### Navigation Bar

A vault wide navigation bar can be added to any page by adding the template _Insert navigation bar_ (hotkey ` ALT + E `).

  

**Adding, modifying, and removing navigation links:**

The links displayed in the navigation bar are set by a combination of a page's tag and YAML properties. To add a new page to display in the navigation bar, make sure the page a `#dashboard` tag and YAML properties of `included_in_navbar: true`. You can also set a custom navigation bar name for a page using the YAML property of `navbar_name: MyCustomName`.

  

````

```dataviewjs

const {Navbar} = customJS;

await Navbar.createNavbar(app, dv);

```

````

  
  

### Full Page Templates

- General

- Boilerplate

- Book

- Concept

- Contact

- Definition

- Empty page

- Journal entry

- Math constant

- Math formula

- Note page

- Travel and Trip

- Learning

- Course assignment

- Course lecture

- Course note

- Course setup

- Project

- Project boilerplate

- Project feature

- Project meeting

- Project note

- Project setup

- project setup meetings

- Project setup notes

- Project setup references

- Project setup tasks

- Project task

- Resources

- Resource

- Spaces

- Space home

  

### Component Templates

- Callouts

- Abstract callout

- Bug callout

- Caution callout

- Danger callout

- Drone callout

- Error callout

- Example callout

- Failure callout

- FAQ callout

- Help callout

- Important callout

- Info callout

- Missing callout

- Note callout

- Question callout

- Quote callout

- Success callout

- Summary callout

- Tip callout

- Todo callout

- Warning callout

- Dataview

- Dataview flat table

- Dataview nested table

- General

- Insert code block

- Insert columns

- Insert external link

- Insert formula variable definition

- Insert table of contents

  

### JavaScript Components

There are several DataviewJS and JavaScript components.

  
  

## Plugins

### Installed Plugins

1. [Advanced Tables](https://github.com/tgrosinger/advanced-tables-obsidian)

2. [Banners](https://github.com/noatpad/obsidian-banners)

3. [Book Search](https://github.com/anpigon/obsidian-book-search-plugin)

4. [Buttons](https://github.com/shabegom/buttons)

5. [Dataview](https://github.com/blacksmithgu/obsidian-dataview)

6. [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)

7. [Homepage](https://github.com/mirnovov/obsidian-homepage)

8. [Image Toolkit](https://github.com/sissilab/obsidian-image-toolkit)

9. [Linter](https://github.com/platers/obsidian-linter)

10. [Omnisearch](https://github.com/scambier/obsidian-omnisearch)

11. [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)

12. [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)

13. [Templater](https://github.com/SilentVoid13/Templater)

  

*The Advanced Tables, Banners, Book Search, Excalidraw, Image Toolkit, Omnisearch, and Tasks* can be disabled and removed if they are not relevant to you.

  

### Notable Plugins

*These plugins are not installed, but you may find them useful*

1. Extract URL Content (Great for archiving pages)

2. Auto Link Title (Automatically formats links)

3. Paste Image rename

4. Remember Cursor Position

5. Activity History

6. Theme Picker

7. Hover Editor

8. Periodic and Spaced

  
  

## Themes

**Minimal Theme**

The Vault uses the minimal theme, if the minimal theme is removed, certain pages that use multi-columns may not display properly.