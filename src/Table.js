import React from 'react';

/*
class Table extends Component {
    render(){
        return <div>Hellllll</div>
    }
}
*/

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

const TableBody = (props) => {
    console.log(props.characterData)
    const rows = props.characterData.map((row, index) => {
        console.log("Row");
        console.log(row)
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={()=>{
                        props.removeCharacter(index)
                    }}>Delete</button>
                </td>
            </tr>
        )
    }
    );
    return (
        <tbody>{rows}</tbody>
    );
}


const Table = (props) => {
    const {characterData, removeCharacter} = props
    return (
        <div className="container">
            <table>
                <TableHeader />
                <TableBody characterData={characterData}
                removeCharacter={removeCharacter}

                />
            </table>
        </div>
    );
}
export default Table