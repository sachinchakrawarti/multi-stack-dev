function TableSlide({ title, table }) {
  return (
    <>
      <h1 className="slide-title">{title}</h1>
      <table className="slide-table">
        <thead>
          <tr>
            {table.headers.map((header, i) => (
              <th key={i}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

window.TableSlide = TableSlide;
