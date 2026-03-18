<%*
let teamMemberName = tp.user.team_member_selection(tp);
let calloutType = await tp.system.suggester(["Highlight", "Challenge", "Follow-up", "Demo", "Professional Note", "Personal Note", "Talent Development"], ["highlight", "challenge", "follow-up", "demo", "professional-note", "personal-note", "talent-development"])
let yearChoice = await tp.system.suggester(["Current", "All", "Last"], [tp.date.now('YYYY'), "", tp.date.now('YYYY',-1)])
let quarterChoice = await tp.system.suggester(["Current", "All", "Q1", "Q2", "Q3", "Q4"], [tp.date.now('Q'), "", "1", "2", "3", "4"])
_%>
```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.<% calloutType %>, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
<%* 
if (yearChoice != "") {
_%>
AND contains(L.year, "<% yearChoice %>")
<%* 
}
if (quarterChoice != "") {
_%>
AND contains(L.quarter, "<% quarterChoice %>")
<%* } _%>
SORT L.week ASC
```