let run = document.querySelector("#run-btn");
const op = document.querySelector("#output");

function updatePreview() {

  const pyCode = document.querySelector("#py-code").value;
  const combineCode = `
      <py-script>
      ${pyCode}
      </py-script>
  `;
  op.innerHTML = combineCode;
}

document.querySelector("#run-btn").addEventListener("click", updatePreview);
