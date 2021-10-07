import React from 'react'

function Rental({rental}) {
    
    return (
    <>
    
    <tbody>
        <tr class="table-active">
        <th scope="row">{rental.name}</th>
        <td>{rental.site}</td>
        <td>Column content</td>
        <td>Column content</td>
        </tr>
    </tbody>
           </>
    )
}

export default Rental
