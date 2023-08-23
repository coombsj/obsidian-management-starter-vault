<%*
let teamMemberName = await tp.user.team_member_selection(tp);
await tp.file.rename(teamMemberName)
let baseFolder = "/" 
let newFolder = `${baseFolder}${teamMemberName}/` 
await tp.file.move(newFolder + teamMemberName);

let communicationPrefFileName = teamMemberName+" - Communication Preferences";
if (!tp.file.exists(communicationPrefFileName)) {
	await tp.file.create_new(tp.file.find_tfile("Note - Communication Preferences Template"), communicationPrefFileName)
}
-%>
<%"---"%>
aliases: 
 - <% teamMemberName.split(' ')[0] %>
tags: 
 - <% teamMemberName.replace(/\s+/g, '') %>
<%"---"%>
# <% teamMemberName %>

## Contact Info

<% tp.file.include("[[Section - Team Member Contact Info]]") %>

## Communication Preferences

![[<% communicationPrefFileName %>]]

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
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT L.week ASC
```