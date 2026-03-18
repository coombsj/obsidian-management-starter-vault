<%*
let teamMemberName = await tp.user.team_member_selection(tp);
let noteContent = await tp.system.prompt("Note") 
-%>
```ad-warning
title:[[<% teamMemberName %>]] #Challenge
- [ ] [challenge::<% teamMemberName %>] [year::"<% tp.date.now("YYYY") %>"] [quarter::"<% tp.date.now("Q") %>"]
<% noteContent %> 
```
<% tp.file.cursor() %>