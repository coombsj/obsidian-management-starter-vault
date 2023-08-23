---
aliases: 
 - Team
tags: 
 - TeamMemberFullName
---
# Team Member Full Name

## Contact Info


☎️: 360-555-5555
🏠 Address: 

Profiles:
- [Atlassian Profile]()
- [Github Profile]()
- [Workday Profile]()

## Communication Preferences

![[Team Member Full Name - Communication Preferences]]

## Career Path

## Professional Notes
```dataview
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-note, [[Team Member Full Name/Team Member Full Name|Team Member Full Name]])
SORT L.week ASC
```

### Highlights
```dataview
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, [[Team Member Full Name/Team Member Full Name|Team Member Full Name]])
SORT L.week ASC
```

### Challenges
```dataview
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, [[Team Member Full Name/Team Member Full Name|Team Member Full Name]])
SORT L.week ASC
```
## Stay Interviews

## Personal Notes

```dataview
LIST WITHOUT ID L.text
FLATTEN file.lists AS L
WHERE contains(L.personal-note, [[Team Member Full Name/Team Member Full Name|Team Member Full Name]])
SORT L.week ASC
```

## One on Ones
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.one-on-one, [[Team Member Full Name/Team Member Full Name|Team Member Full Name]])
SORT L.week ASC
```