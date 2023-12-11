<%*
let teamMemberName = await tp.user.team_member_selection(tp);

let fileExtension = teamMemberName+" - Contact Info")
await tp.user.team_member_note_move(teamMemberName, "", fileExtension, tp);
-%>
<%"---"%>
aliases: 
status: Archived
tags: 
 - <% teamMemberName.replace(/\s+/g, '') %>
 - contact-info
<%"---"%>

## Contact Info
☎️: 
🏠: 

Profiles:
- Atlassian Profile
- Github Profile
- Workday Profile