async function move_team_member_note (teamMemberName, teamName, fileNameExtension, tp) {
  // TODO: If you have multiple teams, you can add them here.
  if (teamName == "") {
    teamName = await tp.system.suggester(["Team"],["Team"]);
  }
  let fileName = teamMemberName+fileNameExtension
  // Modify base folder if you would like the team member notes stored in a sub folder rather than root.
  let baseFolder = '/Team Members/'
  let newFolder = `${baseFolder}${teamName}/${teamMemberName}/` 
  await tp.file.move(newFolder + fileName);
};

module.exports = move_team_member_note;