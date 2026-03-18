<%*
let teamMemberName = await tp.user.team_member_selection(tp);
let year = await tp.system.suggester([tp.date.now("YYYY"), tp.date.now("YYYY", "P-1Y")],[tp.date.now("YYYY"), tp.date.now("YYYY", "P-1Y")]);
let fileExtension = " - "+year+" Year in Review"
await tp.user.team_member_note_move(teamMemberName, "", fileExtension, tp);
-%>
<%"---"%>
aliases:
 - <% year %> Year in Review  
status: In Progress  
tags:
 -  <% teamMemberName.replace(/\s+/g, '') %>
 - <% year %>  
<%"---"%>

## Year in Review
```toc
```

### Summary
#### Highlights

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
SORT file.day ASC
```

#### Challenges

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
SORT file.day ASC
```

#### Professional Notes

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-note, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
SORT file.day ASC
```

#### Demos

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.demo, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
SORT file.day ASC
```

### Q1

#### Highlights

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "1")
SORT file.day ASC
```

#### Challenges

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "1")
SORT file.day ASC
```

#### Professional Notes

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-note, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "1")
SORT file.day ASC
```

#### Demos
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.demo, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "1")
SORT file.day ASC
```

### Q2

#### Highlights

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "2")
SORT file.day ASC
```

#### Challenges

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "2")
SORT file.day ASC
```

#### Professional Notes

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-note, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "2")
SORT file.day ASC
```

#### Demos
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.demo, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "2")
SORT file.day ASC
```

### Q3

#### Highlights

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "3")
SORT file.day ASC
```

#### Challenges

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "3")
SORT file.day ASC
```

#### Professional Notes

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-note, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "3")
SORT file.day ASC
```

#### Demos
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.demo, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "3")
SORT file.day ASC
```

### Q4

#### Highlights

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "4")
SORT file.day ASC
```

#### Challenges

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "4")
SORT file.day ASC
```

#### Professional Notes

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-note, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "4")
SORT file.day ASC
```

#### Demos
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.demo, "<% teamMemberName %>")
AND contains(L.year, "<% year %>")
AND contains(L.quarter, "4")
SORT file.day ASC
```