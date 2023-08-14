<%*
let teamMemberName = await tp.user.team_member_selection(tp);
let type = await tp.system.suggester(["Challenge", "Follow-up"], ["challenge", "follow-up"])
var calloutType = "note"
if (type == "challenge") {
  calloutType = "warning"
} else if (type == "follow-up") {
  calloutType = "question"
}
let noteContent = await tp.system.prompt("Note") 
-%>
- > [!<% calloutType %>] [<% type %>::[[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]]] 
> - [ ] <% noteContent %> 
> [year::"<% tp.date.now("YYYY") %>"] [quarter::"<% tp.date.now("Q") %>"] [week::"<% tp.date.now("W") %>"]