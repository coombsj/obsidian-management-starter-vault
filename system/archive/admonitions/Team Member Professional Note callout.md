<%*
let teamMemberName = await tp.user.team_member_selection(tp);
let noteContent = await tp.system.prompt("Note") 
-%>
```ad-tip
title:[[<% teamMemberName %>]] #Professional-Note
[professional-note::<% teamMemberName %>] [year::"<% tp.date.now("YYYY") %>"] [quarter::"<% tp.date.now("Q") %>"]
<% noteContent %> 
```