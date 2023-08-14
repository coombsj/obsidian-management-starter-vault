async function select_team_member (tp) {
  // Replace entries in the suggester with your team member names
  let teamMemberName = await tp.system.suggester(["Team Member Short Name"], ["Team Member Full Name"]);
  return teamMemberName;
};

module.exports = select_team_member;