async function build_callout_dataview (tp, type) {

  let teamMemberName = await tp.user.team_member_selection(tp);
  let yearChoice = await tp.system.suggester(["Current", "All", "Last"], [tp.date.now('YYYY'), "", tp.date.now('YYYY',-1)])
  let quarterChoice = await tp.system.suggester(["Current", "All", "Q1", "Q2", "Q3", "Q4"], [tp.date.now('Q'), "", "1", "2", "3", "4"]) 

  let dataview = '```dataview\n' +
  'LIST L.text\n' +
  'FLATTEN file.lists AS L\n'
  
  dataview += `WHERE contains(L.${type}, [[${teamMemberName}/${teamMemberName}|${teamMemberName}]])\n`
  
  if (yearChoice != "") {
    dataview += `AND contains(L.year, "${yearChoice}")\n`
  }
  if (quarterChoice != "") {
    dataview += `AND contains(L.quarter, "${quarterChoice}")\n`
  }
  dataview += 'SORT L.week ASC\n' +
  '```'
  
  return dataview
};

module.exports = build_callout_dataview;