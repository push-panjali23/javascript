let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let turn0 = true;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerHTML = "o"
            turn0 = false;
        }
        else {
            box.innerHTML = "x";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const checkWinner = () => {
    for (pattern of winPatterns) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;

        if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
            if (posVal1 == posVal2 && posVal2 == posVal3) {
                console.log("Winner", posVal1);
            }
        }

    }
};