<%*
let phoneNumber = await tp.system.prompt("Phone Number")
let atlassianProfileLink = await tp.system.prompt("Atlassian Profile Link")
let githubProfileLink = await tp.system.prompt("Github Profile Link")
let workdayProfileLink = await tp.system.prompt("Workday Profile Link")
-%>

☎️: <% phoneNumber %>
🏠 Address: 

Profiles:
- [Atlassian Profile](<% atlassianProfileLink %>)
- [Github Profile](<% githubProfileLink %>)
- [Workday Profile](<% workdayProfileLink %>)