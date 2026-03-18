<%*
let teamMemberName = await tp.user.team_member_selection(tp);
let fileExtension = " - "+tp.date.now("YYYY - [Q]Q")+" Stay Interview"
await tp.user.team_member_note_move(teamMemberName, "", fileExtension, tp);
-%>
<%"---"%>
aliases: 
 - <% tp.date.now("YYYY - [Q]Q") %> Stay Interview
status: In Progress
tags: 
 - <% teamMemberName.replace(/\s+/g, '') %>
 - stay-interview
 - <% tp.date.now("YYYY/[Q]Q") %>
<%"---"%>

### [[<% tp.date.now("YYYY - [Q]Q") %>]]

1. *What do you love most about your job?*

>

2. *What would cause you to leave?*

>

3. *How clear is the connection between your work and our Cause?*

>

4. *What can I do to help you with your short-term or long-term career goals?*

>

5. *What can you and I do to make you more satisfied in your current role?*

>