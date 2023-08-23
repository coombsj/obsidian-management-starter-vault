<%*
let teamMemberName = await tp.user.team_member_selection(tp);
await tp.file.rename(teamMemberName)
let baseFolder = "/" 
let newFolder = `${baseFolder}${teamMemberName}/` 
await tp.file.move(newFolder + teamMemberName);
-%>
<%"---"%>
aliases: 
 - <% teamMemberName.split(' ')[0] %>
tags: 
 - <% teamMemberName.replace(' ', '') %>
<%"---"%>
# <% teamMemberName %>

## Contact Info


## Communication Preferences

## Career Path

## Professional Notes
```dataview
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-note, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```

### Highlights
```dataview
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```

### Challenges
```dataview
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```
## Stay Interviews

## Personal Notes

```dataview
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.personal-note, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```

## One on Ones
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```