async function select_team_member (tp) {
  // TODO: Replace entries in the suggester with your team member names
  let teamMemberName = await tp.system.suggester(
    ["Ashlyn", "Arun", "Cris", "Justin M", "Justin S", "Maya", "Megan", "Miguel", "Neil", "Prasanna", "Trevor", "Myself", "Gaea", "Hermes"], 
    ["Ashlyn Funk-Tracy", "Arun Palanivel", "Cris Holm", "Justin May", "Justin Stull", "Maya Stark", "Megan Dorrah", "Miguel Sanchez", "Neil Roberts", "Prasanna Nallathambi", "Trevor Brandt", "Jonathan Coombs", "Gaea", "Hermes"]);
  return teamMemberName;
};

module.exports = select_team_member;