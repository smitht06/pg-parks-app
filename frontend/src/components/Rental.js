import React from 'react'

function Rental({rental}) {
    return (
    <div>
    <table class="table table-hover">
    <thead>
        <tr>
        <th scope="col">Type</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
        <th scope="col">Column heading</th>
        </tr>
    </thead>
    <tbody>
        <tr class="table-active">
        <th scope="row">Active</th>
        <td>{rental.name}</td>
        <td>Column content</td>
        <td>Column content</td>
        </tr>
    </tbody>
            </table>
                </div>
    )
}

export default Rental
