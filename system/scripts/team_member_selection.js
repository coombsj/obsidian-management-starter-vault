async function select_team_member (tp) {
  const file = await tp.file.find_tfile("Team Member Selection Options.md");
  const content = await app.vault.read(file);

  // Use regex to extract list items and split by "|"
  const optionLines = content.match(/^- (.*)/gm);
  const displayNames = [];
  const shortForms = [];

  // Iterate through each line and separate display name and short form
  optionLines.forEach(line => {
    const [display, short] = line.replace("- ", "").split("|").map(item => item.trim());
    displayNames.push(display);
    shortForms.push(short);
  });

  // Use tp.system.suggester with display names for the user and short forms for selection
  const teamMemberName = await tp.system.suggester(displayNames, shortForms);

// Output the selected short form
//tR += `You selected: ${selectedShortForm}`;
  
  // TODO: Replace entries in the suggester with your team member names
//  let teamMemberName = await tp.system.suggester(
//    ["Team Member Short Name"], 
//    ["Team Member Full Name"]);
                                               
  return teamMemberName;
};

module.exports = select_team_member;