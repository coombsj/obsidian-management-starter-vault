<%*
let teamMemberName = await tp.user.team_member_selection(tp);
let noteContent = await tp.system.prompt("Note") 
-%>
```ad-abstract
title:[[<% teamMemberName %>]] #Personal-Note
[personal-note::<% teamMemberName %>] [year::"<% tp.date.now("YYYY") %>"] [quarter::"<% tp.date.now("Q") %>"]
<% noteContent %> 
```