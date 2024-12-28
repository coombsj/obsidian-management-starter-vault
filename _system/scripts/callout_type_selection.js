async function select_callout_type(tp) {
  const file = await tp.file.find_tfile("Callout Type Selection Options.md");
  const content = await app.vault.read(file);

  // Use regex to extract list items and split by "|"
  const optionLines = content.match(/^- (.*)/gm);
  const displayNames = [];
  const values = [];

  // Iterate through each line and separate display name and short form
  optionLines.forEach(line => {
    const [display, value] = line.replace("- ", "").split("|").map(item => item.trim());
    displayNames.push(display);
    values.push(short);
  });

  // Use tp.system.suggester with display names for the user and short forms for selection
  const calloutType = await tp.system.suggester(displayNames, values);
                                               
  return calloutType;
};

module.exports = select_callout_type;
}