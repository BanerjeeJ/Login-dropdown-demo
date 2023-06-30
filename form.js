var names = {
  Julian: ["A", "B", "C"],
  Lily: ["L", "M", "N"],
  Rose: ["X", "Y", "Z"],
};
//getting the main and sub menu

var main = document.getElementById("main_menu");
var sub = document.getElementById("sub_menu");

//Trigger the event when main menu changes

main.addEventListener("change", function () {
  var selected_option = names[this.value];

  //removing the sub menu

  while (sub.options.length > 0) {
    sub.options.remove(0);
  }

  //using Option constructor it will create html element with the given value and innerText

  Array.from(selected_option).forEach(function (el) {
    let option = new Option(el, el);

    //append the child option in sub menu
    sub.appendChild(option);
  });
});

function selectOption() {
  let selectedValue = main_menu.options[dropdown.selectedIndex].text;
}
