<%*
let teamMemberName = await tp.user.team_member_selection(tp);
let teamName = await tp.system.suggester(["Gaea", "Hermes"],["Gaea", "Hermes"]);
await tp.user.team_member_note_move(teamMemberName, teamName, "", tp);
-%>
<%"---"%>
aliases: 
 - <% teamMemberName.split(' ')[0] %>
tags: 
 - <% teamMemberName.replace(/\s+/g, '') %>
 - <% teamName %>
<%"---"%>
# <% teamMemberName %>

## Communication Preferences
![[<% teamMemberName %> - Communication Preferences#📈 How Do You Like to Receive Constructive Feedback?]]
![[<% teamMemberName %> - Communication Preferences#🎉 How Do You Like to Receive Praise?]]
![[<% teamMemberName %> - Communication Preferences#☀️ What Are the Work Areas That Excite You Most?]]
![[<% teamMemberName %> - Communication Preferences#🔥What Things Burn You Out?]]

## Career Path

## Professional Notes
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-notes, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
AND !contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```

### Highlights
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
AND !contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])

SORT L.week ASC
```

### Challenges
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
AND !contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])

SORT L.week ASC
```
## Stay Interviews

## Personal Notes

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.personal-note, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
AND !contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```

## One on Ones
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```