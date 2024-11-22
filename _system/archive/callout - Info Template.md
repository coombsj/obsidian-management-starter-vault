<%*
let teamMemberName = await tp.user.team_member_selection(tp);
let type = await tp.system.suggester(["Highlight", "Demo", "Professional Note", "Personal Note", "Talent Development"], ["highlight", "demo", "professional-note", "personal-note", "talent-development"])
var calloutType = "note"
if (type == "highlight") {
  calloutType = "important"
} else if (type == "demo") {
  calloutType = "example"
} else if (type == "professional-note") {
  calloutType = "note"
} else if (type == "personal-note") {
  calloutType = "hint"
} else if (type == "talent-development") {
  calloutType = "abstract"
}
let noteContent = await tp.system.prompt("Note") 
-%>
- > [!<% calloutType %>] [<% type %>::[[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]]] 
> <% noteContent %> 
> [year::"<% tp.date.now("YYYY") %>"] [quarter::"<% tp.date.now("Q") %>"] [week::"<% tp.date.now("W") %>"]