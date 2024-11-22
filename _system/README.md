
Maintain your list of team members in the [[Team Member Selection Options]] file. The [[team_member_selection.js]] logic will read the list from this file in order to supply a drop down select list when interacting with many of the templates.

There is a set of callouts and corresponding dataviews that can be used within the vault:
- Demo: When you want to track when a team member has participated in team or organization demos

 - > [!example] [demo::[[Team Member 1/Team Member 1|Team Member 1]]] 
> This is a note on a demo that the team member participated in.
> [year::"2024"] [quarter::"4"] [week::"47"]

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.demo, [[Team Member 1/Team Member 1|Team Member 1]])
AND contains(L.year, "2024")
AND contains(L.quarter, "4")
SORT L.week ASC
```

- Follow-up: When you want to make sure and follow up on a topic with a team member the next time you have a one on one with them.
- Highlight: Used to highlight a particular activity the team member did, can be used in one on ones or other reviews
- Personal Note: To help keep track of personal notes on the team member
- Professional Note: 