import React from 'react';

function KanjiSearch({hidden}) {
  return (
    <div hidden={hidden}>
      <ol className='KanjiNavBar'>
        <h3>Settings</h3>
        <hr />
        <div>
            <label for="Grades">Choose a Grade:</label>
            <br /><br />
            <select name="Grades" id="Grades">
                <option value="None">None</option>
                <option value="JLPT1">JLPT1</option>
                <option value="JLPT2">JLPT2</option>
                <option value="JLPT3">JLPT3</option>
                <option value="JLPT4">JLPT4</option>
            </select>
        </div>
        <hr />
        <h3>OR</h3>
        <hr />
        <div>
        <label for="JLPT">Choose a JLPT:</label>
        <br /><br />
            <select name="JLPT" id="JLPT">
                <option value="None">None</option>
                <option value="Grade1">Grade1</option>
                <option value="Grade2">Grade2</option>
                <option value="Grade3">Grade3</option>
                <option value="Grade4">Grade4</option>
                <option value="Grade5">Grade5</option>
                <option value="Grade6">Grade6</option>
            </select>
        </div>
        <hr />
        <button>Search</button>
      </ol>
    </div>
  );
}

export default KanjiSearch;
