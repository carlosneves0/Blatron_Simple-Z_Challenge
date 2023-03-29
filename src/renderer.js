const table = document.getElementById("table")
function render(state)
{
  const delta = state.length - table.children.length
  if (delta > 0)
    for (let i = table.children.length; i < state.length; i++)
    {
      const [x, y] = state[i]
      table.appendChild(createTableRow({ x, y }))
    }
}

function createTableRow({ x, y })
{
  const tableRow = document.createElement("div")
  tableRow.classList.add("table-row")
  
  const xCell = document.createElement("div")
  xCell.textContent = x
  tableRow.appendChild(xCell)

  const yCell = document.createElement("div")
  yCell.textContent = y
  tableRow.appendChild(yCell)
  
  return tableRow
}

// Returns a random number between min (inclusive) and max (exclusive)
function random(min, max)
{
  return Math.random() * (max - min) + min
}

// Simulate a data source
((async () =>
{
  const INTERVAL = 555, MIN = 0, MAX = 50

  let state = [["x", "y"]]
  
  for (let x = 0; x < MAX; x++)
  {
    state = [...state, [x, random(MIN, MAX)]]
    render(state)
    await new Promise(resolve => setTimeout(resolve, INTERVAL))
  }
})())