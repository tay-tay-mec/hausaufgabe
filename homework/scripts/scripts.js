const totalRows = 20;  // Change this value for different tree heights

// weißt auf den Baum in html hin.
const treeContainer = document.getElementById("tree-container");

function generateTree(rows) {
    let tree = "";
        const maxWidth = 2 * rows - 3; 

    for (let i = 1; i <= rows - 3; i++) {
        const hashes = "#".repeat(2 * i - 1);
        const spaces = " ".repeat((maxWidth - hashes.length) / 2);
        tree += spaces + hashes + spaces + "\n";
    }

    for (let i = 0; i < 3; i++) {
        const trunk = "###";
        const spaces = " ".repeat((maxWidth - trunk.length) / 2);
        tree += spaces + trunk + spaces + "\n";
    }

    return tree;
}

treeContainer.textContent = generateTree(totalRows);
