function generateButtons(selected, listener, ...filters) {
  let elements = [];
  filters.forEach((el, i) => elements.push(
    <li className={selected === el ? 'menuLi selected' : 'menuLi'} onClick={listener} key={i}>{el}</li>
  ));
  return elements;
}

function Toolbar(props) {
  return <ul id="menuUL">{generateButtons(props.selected, props.onSelectFilter, ...props.filters)}</ul>;
}

export default Toolbar;