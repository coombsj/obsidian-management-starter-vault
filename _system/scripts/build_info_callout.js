async function build_info_callout(tp) {
  let calloutType = await tp.user.callout_type_selection(tp);
  let calloutFocus = await tp.user.callout_focus_selection(tp);
  let noteContent = await tp.system.prompt("Note");

  let callout = `- > [!${calloutType}] [${type}::[[${teamMemberName}/${teamMemberName}|${teamMemberName}]]] 
> ${noteContent}
> [year::"${tp.date.now("YYYY")}"] [quarter::"${tp.date.now("Q")}"] [week::"${tp.date.now("W")}"]`

  return callout
};

module.exports = build_info_callout;