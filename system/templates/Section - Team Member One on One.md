<%*
let teamMemberName = tp.user.team_member_selection(tp);
-%>
### Follow up in One on One for [[<% teamMemberName %>]]
#### Completed since we last talked
```tasks
done
description includes <% teamMemberName %>
done after 2 weeks ago
```

#### To check in on today
```tasks
not done
description includes <% teamMemberName %>
```

- >[!example]  [one-on-one::[[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]]] 
> \[year::"<% tp.date.now("YYYY") %>"] [quarter::"<% tp.date.now("Q") %>"] [week::"<% tp.date.now("W")"]
> <% tp.file.cursor() %>
