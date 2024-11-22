<%*
let teamMemberName = tp.user.team_member_selection(tp);
-%>
### One on One for [[<% teamMemberName %>]]

#### Completed since we last talked  %% fold %% 
```tasks
done
description includes <% teamMemberName %>
done after 2 weeks ago
```

#### To check in on today %% fold %%
```tasks
not done
description includes <% teamMemberName %>
```

#### Review Communication Preferences %% fold %% 
![[<% teamMemberName %> - Communication Preferences#📈 How Do You Like to Receive Constructive Feedback?]]
![[<% teamMemberName %> - Communication Preferences#🎉 How Do You Like to Receive Praise?]]
![[<% teamMemberName %> - Communication Preferences#☀️ What Are the Work Areas That Excite You Most?]]
![[<% teamMemberName %> - Communication Preferences#🔥What Things Burn You Out?]]

#### Highlights %% fold %%

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.highlight, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
AND !contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT file.day DESC
```

#### Challenges %% fold %%

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.challenge, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
AND !contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT file.day DESC
```

#### Professional Notes %% fold %%

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.professional-note, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
AND !contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT file.day DESC
```

#### Personal Notes %% fold %%

```dataview
LIST L.text
FLATTEN file.lists AS L
WHERE contains(L.personal-note, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
AND !contains(L.one-on-one, [[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]])
SORT file.day DESC
```

#### Notes

- >[!example]  [one-on-one::[[<% teamMemberName %>/<% teamMemberName %>|<% teamMemberName %>]]] 
> \[year::"<% tp.date.now("YYYY") %>"] [quarter::"<% tp.date.now("Q") %>"]
> <% tp.file.cursor() %>