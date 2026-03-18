<%"---"%>
status: Archived
tags:
 - DailyNote
 - <% tp.file.title.split('-')[0] %>
 - <% tp.file.title.split('-')[0] %>-<% tp.file.title.split('-')[1] %>
<%"---"%>

## Last Week
### Highlights
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, [[Gaea/Gaea|Gaea]])
AND contains(L.year, "2023")
AND contains(L.quarter, "3")
AND contains(L.week, "")
SORT L.week ASC
```