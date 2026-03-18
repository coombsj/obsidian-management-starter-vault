<%*
let teamMemberName = await tp.user.team_member_selection(tp);
-%>
### <% tp.date.now('YYYY') %>  Q<% tp.date.now('Q') %>  Challenges

```dataviewjs
// You can update this to filter as you like - filtering for just your daily notes would be good
const pages = dv.pages('#Challenge')
// console.log(pages.length)

// This regex will find the contents of a specifically formatted callout
const regex = /```ad-(\w+)\r?\ntitle:(\[\[<% teamMemberName %>\]\])(\s)(#Challenge)\r?\n(\[\w+::)(\w+\s?)+(\])(\s\[\w+::\"\w+\"\])+\r?\n(\w+\s?\S?)+\r?\n```/
const rows = []
for (const page of pages) {
    const file = app.vault.getAbstractFileByPath(page.file.path)
    // Read the file contents
    const contents = await app.vault.read(file)
    // Extract the summary via regex
    for (const callout of contents.match(new RegExp(regex, 'g')) || []) {
        const match = callout.match(new RegExp(regex, 's')) 
        // console.log(match)
        rows.push(match.input)
    }
}

dv.list(rows)

```

