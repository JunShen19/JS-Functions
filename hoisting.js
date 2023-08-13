// function works if it created with function but const can not work!
display();

// work
function display() {
  console.log("hello world");
}

// not work
const display = () => {
  console.log("hello world");
};
