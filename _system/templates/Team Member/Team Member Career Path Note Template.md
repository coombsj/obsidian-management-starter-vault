<%*  
let teamMemberName = await tp.user.team_member_selection(tp);  
let currentLevel = await tp.system.prompt("Current Dev Level (1-5)")  
let fileExtension = " - Career Path"  
await tp.user.team_member_note_move(teamMemberName, "", fileExtension, tp);

 -%>  
<%"---"%>  
aliases:

 - Career Path  
status: In Progress  
tags:
 - <% teamMemberName.replace(/\s+/g, '') %>
 - career-path  
<%"---"%>

### [[Cambia Health Engineering Job Profiles 1 |Career Path]]

<%*  
var currentPositionLink;  
var nextPositionLink;  
if(currentLevel == 1){  
	currentPositionLink = "Software Dev Engineer I"  
	nextPositionLink = "[Software Dev Engineer II](https://www.myworkday.com/cambiahealth/d/inst/15$1514/219$72.htmld#TABINDEX=0&SUBTABINDEX=0)"  
} else if (currentLevel == 2) {  
	currentPositionLink = "[Software Dev Engineer II](https://www.myworkday.com/cambiahealth/d/inst/15$1514/219$72.htmld#TABINDEX=0&SUBTABINDEX=0)"  
	nextPositionLink = "[Software Dev Engineer III](https://www.myworkday.com/cambiahealth/d/inst/3$612/219$388.htmld)"  
} else if (currentLevel == 3) {  
	currentPositionLink = "[Software Dev Engineer III](https://www.myworkday.com/cambiahealth/d/inst/3$612/219$388.htmld)"  
	nextPositionLink = "[[Cambia Software Dev Engineer IV]]"  
} else if (currentLevel == 4) {  
	currentPositionLink = "[[Cambia Software Dev Engineer IV]]"  
	nextPositionLink = "[Software Dev Engineer V](https://www.myworkday.com/cambiahealth/d/inst/3$612/219$558.htmld)"  
} else if (currentLevel == 5) {  
	currentPositionLink = "[Software Dev Engineer V](https://www.myworkday.com/cambiahealth/d/inst/3$612/219$558.htmld)"  
	nextPositionLink = "Architect"  
}  
-%>  
Current Position: <% currentPositionLink %>

Next Position: <% nextPositionLink %>

> [!example] Goals

> [!hint] How Can I Help?

### <% tp.date.now("YYYY") %> - Year in Review

![[<% teamMemberName %> - <% tp.date.now("YYYY") %> Year in Review#Summary]]

### <% tp.date.now("YYYY", "P-1Y") %> - Year in Review

![[<% teamMemberName %> - <% tp.date.now("YYYY", "P-1Y") %> Year in Review#Summary]]
